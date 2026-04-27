import type { ReactNode } from "react";
import Link from "next/dist/client/link";
import { SITE } from "@/lib/site";

type LegalPageShellProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalPageShell({ title, lastUpdated, children }: LegalPageShellProps) {
  return (
    <div className="min-h-dvh bg-[#050505] text-zinc-300">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-black/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="font-display text-lg font-bold tracking-tight text-white">
            {SITE.name}
            <span className="text-accent">.</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 transition hover:text-accent"
          >
            ← Torna al sito
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-zinc-500">Ultimo aggiornamento: {lastUpdated}</p>
        <article className="mt-10 space-y-8 text-sm leading-relaxed sm:text-[15px] [&_h2]:font-display [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_h2]:first:mt-0 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-zinc-100 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_strong]:font-semibold [&_strong]:text-zinc-200">
          {children}
        </article>
      </main>
    </div>
  );
}
