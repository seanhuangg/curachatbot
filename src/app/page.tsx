import { Proza_Libre } from "next/font/google";
import { UserRoundSearch } from "lucide-react";

const proza = Proza_Libre({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function Home() {
  return (
    <div className="bg-slate-800 grid grid-rows-[1fr_auto_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundImage: "url('/cura.jpeg')",
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      <div className="bg-slate-700/80 p-6 sm:p-10 rounded-lg shadow-lg max-w-3xl w-full">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">


          <h1 className={`${proza.className} text-6xl text-slate-200 font-bold py-8`}>Cura ChatBot</h1>


          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Paste our website link{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                directly in front of your website URL
              </code>
              .
            </li>
            <li>Ask{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                Cura
              </code>
              {" "}all of your curious questions!</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://github.com/seanhuangg/curachatbot"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </main>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://seanhuang.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UserRoundSearch className="text-slate-200" />
          Developer Profile →
        </a>
      </footer>
    </div>
  );
}
