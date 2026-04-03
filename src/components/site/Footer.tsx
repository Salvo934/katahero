import Link from "next/link";
import { SITE } from "@/lib/site";

const footerNav = [
  { href: "#servizi", label: "Servizi" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pacchetti", label: "Pacchetti" },
  { href: "#contatti", label: "Contatti" },
];

const footerLegal = [
  { href: "/termini-e-condizioni", label: "Termini e condizioni" },
  { href: "/privacy", label: "Privacy policy" },
];

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

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.063 2.063 0 1.139-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  { key: "instagram", label: "Instagram", href: SITE.social.instagram, Icon: IconInstagram },
  { key: "tiktok", label: "TikTok", href: SITE.social.tiktok, Icon: IconTikTok },
  { key: "linkedin", label: "LinkedIn", href: SITE.social.linkedin, Icon: IconLinkedIn },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020202]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-30%,rgba(0,229,160,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(0,229,160,0.08),transparent_45%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2272%22%20height%3D%2272%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.04)%22%20d%3D%22M0%2072h72M72%200v72%22%2F%3E%3C%2Fsvg%3E')]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px max-w-6xl mx-auto bg-linear-to-r from-transparent via-white/10 to-transparent opacity-60" />

      <div className="relative mx-auto max-w-6xl px-4 pt-18 pb-12 sm:px-6 lg:px-8">
        {/* CTA */}
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-linear-to-br from-white/6 via-zinc-900/40 to-black/80 p-8 shadow-[0_32px_80px_-40px_rgba(0,229,160,0.35)] sm:p-10">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/20 blur-[90px]"
            aria-hidden
          />
          <div className="relative flex flex-col gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="mx-auto max-w-xl lg:mx-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">Prossimo passo</p>
              <p className="font-display mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Porta il tuo brand oltre il feed.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Obiettivi, sport e tempistiche: rispondiamo su WhatsApp o via email con un perimetro chiaro.
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center lg:w-auto lg:justify-end">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-black shadow-[0_16px_40px_-16px_rgba(0,229,160,0.55)] transition hover:brightness-110"
              >
                <IconWhatsApp className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/35 hover:bg-white/10"
              >
                <IconMail className="h-5 w-5 opacity-90" />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Colonne */}
        <div className="mt-20 grid gap-12 text-center sm:gap-14 lg:grid-cols-12 lg:gap-6 lg:pt-4 lg:text-left">
          <div className="flex flex-col items-center lg:col-span-4 lg:items-start">
            <Link href="/" className="group inline-flex items-baseline gap-0.5">
              <span className="font-display text-4xl font-bold tracking-tight text-white transition group-hover:text-accent">
                {SITE.name}
              </span>
              <span className="font-display text-4xl font-bold text-accent">.</span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-400">{SITE.description}</p>
            <div className="mt-8 w-full">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Social</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
                {socialLinks.map(({ key, label, href, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/4 text-zinc-300 transition hover:border-accent/40 hover:bg-white/8 hover:text-accent"
                    aria-label={`${SITE.name} su ${label}`}
                    title={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:col-span-2 lg:items-start">
            <h3 className="w-full max-w-xs border-b border-white/10 pb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500 lg:max-w-none">
              Menu
            </h3>
            <ul className="mt-6 flex w-full max-w-xs flex-col items-center gap-3.5 lg:max-w-none lg:items-start">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center justify-center gap-2 text-sm text-zinc-400 transition hover:text-white lg:justify-start"
                  >
                    <span className="hidden h-px w-4 bg-zinc-600 transition group-hover:w-6 group-hover:bg-accent sm:block" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center lg:col-span-3 lg:items-start">
            <h3 className="w-full max-w-md border-b border-white/10 pb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500 lg:max-w-none">
              Legale
            </h3>
            <ul className="mt-6 flex w-full max-w-md flex-col items-center gap-3.5 lg:max-w-none lg:items-start">
              {footerLegal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center justify-center gap-2 text-center text-sm text-zinc-400 transition hover:text-white lg:justify-start lg:text-left"
                  >
                    <span className="hidden h-px w-4 shrink-0 bg-zinc-600 transition group-hover:w-6 group-hover:bg-accent sm:block" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-zinc-600 lg:max-w-none">
              Documenti informativi sul sito e sul trattamento dei dati. Per esercitare i diritti privacy scrivi a{" "}
              <a href={`mailto:${SITE.email}`} className="text-zinc-500 underline-offset-2 hover:text-accent">
                {SITE.email}
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col items-center lg:col-span-3 lg:items-start">
            <h3 className="w-full max-w-sm border-b border-white/10 pb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500 lg:max-w-none">
              Contatti
            </h3>
            <ul className="mt-6 w-full max-w-sm space-y-4 lg:max-w-none">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-start gap-3 rounded-2xl border border-white/8 bg-white/2 p-4 text-left transition hover:border-white/15 hover:bg-white/4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                    <IconMail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Email</span>
                    <span className="mt-0.5 block break-all text-sm font-medium text-zinc-200 group-hover:text-white">
                      {SITE.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/2 p-4 text-left transition hover:border-white/15 hover:bg-white/4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent ring-1 ring-white/10">
                    <IconPhone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Telefono</span>
                    <span className="mt-0.5 block text-sm font-medium text-zinc-200 group-hover:text-accent">
                      {SITE.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex w-full flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left">
            <p className="text-xs text-zinc-600">
              © {year} {SITE.name}. Tutti i diritti riservati.
            </p>
            <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
            <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs" aria-label="Legale">
              <Link href="/termini-e-condizioni" className="text-zinc-500 transition hover:text-accent">
                Termini
              </Link>
              <Link href="/privacy" className="text-zinc-500 transition hover:text-accent">
                Privacy
              </Link>
            </nav>
          </div>
          <div className="flex max-w-sm flex-col items-center gap-2 text-center text-xs text-zinc-600 sm:max-w-none sm:flex-row sm:text-left">
            <span className="h-1 w-1 shrink-0 rounded-full bg-accent/60 sm:mt-1.5" aria-hidden />
            <span>Personal branding · Atleti · Personal trainer · Italia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
