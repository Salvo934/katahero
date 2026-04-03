import { SITE } from "@/lib/site";

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

export function Contact() {
  const telHref = `tel:${SITE.phoneTel}`;
  const mailHref = `mailto:${SITE.email}`;

  return (
    <section
      id="contatti"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      {/* Sfondo */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(0,229,160,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(0,229,160,0.06),transparent_45%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.4)_0%,#050505_35%,#050505_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2248%22%20height%3D%2248%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20d%3D%22M0%2048h48M48%200v48%22%2F%3E%3C%2Fsvg%3E')]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-accent sm:text-xs">
            Contatti
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Parliamo del{" "}
            <span className="bg-linear-to-r from-white via-zinc-100 to-accent bg-clip-text text-transparent">
              tuo brand
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Un solo tap per scriverci, chiamarci o inviarci una mail.
          </p>
          <div
            className="mx-auto mt-8 h-px max-w-xs bg-linear-to-r from-transparent via-accent/50 to-transparent"
            aria-hidden
          />
        </header>

        <div className="mt-16 grid gap-5 sm:grid-cols-3 sm:gap-6">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[200px] flex-col rounded-3xl border border-white/8 bg-white/2 p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#25D366]/45 hover:bg-[#25D366]/6 hover:shadow-[0_24px_48px_-24px_rgba(37,211,102,0.45)] sm:min-h-[220px]"
          >
            <div className="relative flex flex-1 flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366] ring-1 ring-[#25D366]/25 transition group-hover:scale-105 group-hover:bg-[#25D366]/25">
                <IconWhatsApp className="h-7 w-7" />
              </div>
              <h3 className="font-display mt-6 text-lg font-semibold text-white">WhatsApp</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-zinc-400 transition group-hover:text-zinc-300">
                Chat veloce, vocali e file quando vuoi.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-[#4ade80] transition group-hover:gap-3">
                {SITE.phoneDisplay}
                <span className="text-lg transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </span>
            </div>
          </a>

          <a
            href={telHref}
            className="group relative flex min-h-[200px] flex-col rounded-3xl border border-white/8 bg-white/2 p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/4 hover:shadow-[0_24px_48px_-24px_rgba(0,229,160,0.35)] sm:min-h-[220px]"
          >
            <div className="relative flex flex-1 flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-accent ring-1 ring-white/10 transition group-hover:scale-105 group-hover:bg-accent/15 group-hover:ring-accent/30">
                <IconPhone className="h-7 w-7" />
              </div>
              <h3 className="font-display mt-6 text-lg font-semibold text-white">Telefono</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-zinc-400 transition group-hover:text-zinc-300">
                Chiamata diretta per briefing e urgenze.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-white transition group-hover:gap-3 group-hover:text-accent">
                {SITE.phoneDisplay}
                <span className="text-lg text-accent/80 transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </span>
            </div>
          </a>

          <a
            href={mailHref}
            className="group relative flex min-h-[200px] flex-col rounded-3xl border border-white/8 bg-white/2 p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-400/35 hover:bg-violet-500/6 hover:shadow-[0_24px_48px_-24px_rgba(139,92,246,0.25)] sm:min-h-[220px]"
          >
            <div className="relative flex flex-1 flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300 ring-1 ring-violet-400/20 transition group-hover:scale-105 group-hover:bg-violet-500/20">
                <IconMail className="h-7 w-7" />
              </div>
              <h3 className="font-display mt-6 text-lg font-semibold text-white">Email</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-zinc-400 transition group-hover:text-zinc-300">
                Brief dettagliati e allegati in un colpo solo.
              </p>
              <span className="mt-6 flex flex-wrap items-end justify-between gap-3 border-t border-white/5 pt-5">
                <span className="min-w-0 flex-1 break-all text-sm font-semibold leading-snug text-violet-200/90 transition group-hover:text-violet-100 sm:text-[15px]">
                  {SITE.email}
                </span>
                <span
                  className="shrink-0 text-lg text-violet-400/90 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                >
                  →
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
