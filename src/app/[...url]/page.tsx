import { ChatWrapper } from "@/components/ChatWrapper"
import { ragChat } from "@/lib/rag-chat"
import { redis } from "@/lib/redis"
import { cookies } from "next/headers"

interface PageProps {
    params: {
        url: string | string[] | undefined;
    }
}

function reconstructUrl({ url }: { url: string[] }) {
    const decoded = url.map((component) => decodeURIComponent(component))

    return decoded.join("/")
}

const Page = async ({ params }: PageProps) => {
    const sessionCookie = (await cookies()).get("sessionId")?.value

    const resolvedParams = await params
    const reconstructedUrl = reconstructUrl({ url: resolvedParams.url as string[] })

    //unique cookie for every user
    const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(/\//g, "")

    const isIndexed = await redis.sismember("indexed-urls", reconstructedUrl)

    const initialMessages = await ragChat.history.getMessages({ amount: 10, sessionId })

    if (!isIndexed) {
        // index website data
        //resconstruct needed for link
        await ragChat.context.add({
            type: "html",
            source: reconstructedUrl,
            config: { chunkOverlap: 50, chunkSize: 200 },
        })

        await redis.sadd("indexed-urls", reconstructedUrl)
    }

    return <ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
}

export default Page