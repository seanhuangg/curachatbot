import { cn } from "@/lib/utils"
import { BotMessageSquare, User } from "lucide-react"

interface MessageProps {
    content: string
    isUserMessage: boolean
}

export const Message = ({ content, isUserMessage }: MessageProps) => {
    return <div className={cn({
        "bg-zinc-800": isUserMessage,
        "bg-zinc-900/25": !isUserMessage,
    })}>
        <div className="p-6">
            <div className="max-w-3xl mx-auto flex items-start gap-2.5">
                <div className={cn("size-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-slate-950 flex justify-center items-center",
                    {
                        "bg-blue-950 border-blue-700 text-zinc-200": isUserMessage,
                    }
                )}>
                    {isUserMessage ? <User className="size-5" /> : <BotMessageSquare className="size-5 text-white" />}
                </div>

                <div className="flex flex-col ml-6 w-full">
                    <div className="flex items-fenter space-x-2">
                        <span className="text-sm font-semibold text-gray-900 dark:text-slate-400">
                            {isUserMessage ? "You" : "Cura"}
                        </span>
                    </div>

                    <p className="text-sm font-normal py-2.5 dark:text-white text-gray-900 leading-loose">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    </div>
}