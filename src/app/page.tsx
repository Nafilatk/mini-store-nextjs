import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen  ">

      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-42 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src="https://i.pinimg.com/1200x/7a/d7/7f/7ad77fdae977c55f86893ae07d879676.jpg"
          alt="background"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Mini Store Create with Next.js
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Next.js is a React based framework Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>

            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop Now
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
