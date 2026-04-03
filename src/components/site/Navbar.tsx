"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const nav = [
  { href: "#servizi", label: "Servizi" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#pacchetti", label: "Pacchetti" },
  { href: "#contatti", label: "Contatti" },
];

const mobileSocial = [
  {
    key: "instagram",
    label: "Instagram",
    href: SITE.social.instagram,
    className:
      "border-pink-500/30 bg-linear-to-br from-purple-500/20 to-pink-600/10 text-pink-400 hover:border-pink-400/50",
  },
  {
    key: "tiktok",
    label: "TikTok",
    href: SITE.social.tiktok,
    className: "border-white/15 bg-white/5 text-white hover:border-white/30",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: SITE.social.linkedin,
    className: "border-sky-500/30 bg-sky-500/10 text-sky-400 hover:border-sky-400/50",
  },
] as const;

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

const socialIcons = {
  instagram: IconInstagram,
  tiktok: IconTikTok,
  linkedin: IconLinkedIn,
} as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-[padding] duration-300 ${
          scrolled ? "pt-2 md:pt-3" : "pt-0"
        }`}
      >
        <div
          className={`mx-auto max-w-6xl px-3 transition-[margin,box-shadow,background-color,border-color,border-radius,backdrop-filter] duration-300 sm:px-5 lg:px-8 ${
            scrolled
              ? "border border-white/12 bg-black/80 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.85)] backdrop-blur-xl md:mx-4 md:rounded-2xl lg:mx-auto"
              : "border border-transparent bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-3.5">
            <Link
              href="/"
              className="group relative font-display text-lg font-bold tracking-tight text-white sm:text-xl"
            >
              <span className="relative z-10 transition group-hover:text-zinc-100">
                {SITE.name}
                <span className="text-accent">.</span>
              </span>
              <span
                className="absolute -inset-x-1 -bottom-0.5 h-px bg-linear-to-r from-transparent via-accent/70 to-transparent opacity-0 transition group-hover:opacity-100"
                aria-hidden
              />
            </Link>

            <nav
              className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] md:flex"
              aria-label="Principale"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-[13px] font-medium text-zinc-400 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:px-4"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="#contatti"
                className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black shadow-[0_0_28px_-6px_rgba(0,229,160,0.55)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:inline-flex"
              >
                Richiedi consulenza
                <span aria-hidden className="text-base leading-none">
                  →
                </span>
              </Link>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-white/25 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Chiudi menu" : "Apri menu"}
                onClick={() => setOpen((o) => !o)}
              >
                <span className="sr-only">Menu</span>
                <span className="relative block h-4 w-5" aria-hidden>
                  <span
                    className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                      open ? "top-2 rotate-45" : "top-0.5"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2 block h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                      open ? "top-2 -rotate-45" : "top-3.5"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-100 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ease-out ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Chiudi menu"
          tabIndex={open ? 0 : -1}
          onClick={close}
        />
        <aside
          className={`absolute top-0 right-0 flex h-full w-[min(100%,23rem)] max-w-full flex-col rounded-l-3xl border-l border-white/15 bg-linear-to-b from-zinc-900 via-zinc-950 to-black shadow-[-24px_0_64px_-16px_rgba(0,0,0,0.95)] ring-1 ring-white/5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            paddingTop: "max(0.75rem, env(safe-area-inset-top))",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-accent/60 to-transparent" />

          <div className="flex items-start justify-between gap-3 px-5 pb-4 pt-2">
            <div className="min-w-0 pt-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent/90">Menu</p>
              <p className="font-display mt-1 text-xl font-bold tracking-tight text-white">{SITE.name}</p>
              <p className="mt-1 text-xs leading-snug text-zinc-500">Brand · Siti · Contenuti</p>
            </div>
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-zinc-300 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
              onClick={close}
              aria-label="Chiudi menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col overflow-y-auto px-4 pb-2" aria-label="Mobile">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-1.5 shadow-inner">
              <ul className="flex flex-col">
                {nav.map((item, i) => (
                  <li
                    key={item.href}
                    className="border-b border-white/6 last:border-b-0"
                  >
                    <Link
                      href={item.href}
                      className="group flex min-h-14 items-center justify-between gap-3 px-4 py-3.5 transition active:bg-white/5"
                      onClick={close}
                    >
                      <span className="text-[15px] font-semibold text-zinc-100">{item.label}</span>
                      <span className="text-zinc-600 transition group-hover:text-accent active:translate-x-0.5" aria-hidden>
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="mb-3 px-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Seguici
              </p>
              <div className="flex justify-center gap-2.5">
                {mobileSocial.map((s) => {
                  const Icon = socialIcons[s.key as keyof typeof socialIcons];
                  return (
                    <a
                      key={s.key}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition ${s.className}`}
                      aria-label={`${SITE.name} su ${s.label}`}
                      title={s.label}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </nav>

          <div className="mt-auto border-t border-white/10 bg-black/30 px-4 py-5">
            <Link
              href="#contatti"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-4 text-base font-bold text-black shadow-[0_12px_36px_-14px_rgba(0,229,160,0.55)] transition hover:brightness-110 active:scale-[0.99]"
              onClick={close}
            >
              Richiedi consulenza
              <span aria-hidden className="text-lg">
                →
              </span>
            </Link>
            <p className="mt-3 text-center text-[11px] text-zinc-600">Chiudi con ✕ o toccando fuori</p>
          </div>
        </aside>
      </div>
    </>
  );
}
