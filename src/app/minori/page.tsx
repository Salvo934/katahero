import Link from "next/link";

import { LegalPageShell } from "@/components/site/LegalPageShell";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

const CONSENT_PDF = "/documenti/consenso-genitore-tutore-katahero.pdf";

export const metadata = pageMetadata({
  title: "Atleti minorenni",
  description: `Informazioni e modulo di consenso per genitori e tutori legali di atleti minorenni che utilizzano i servizi ${SITE.name}.`,
  path: "/minori",
});

export default function MinoriPage() {
  return (
    <LegalPageShell title="Atleti minorenni" lastUpdated="27 maggio 2026">
      <p>
        I servizi <strong>{SITE.name}</strong> (scheda digitale atleta, player card, sito dedicato e Talent Board)
        possono riguardare anche <strong>atleti di età inferiore ai 18 anni</strong>. In tali casi è necessario il
        coinvolgimento del genitore esercente la responsabilità genitoriale o del tutore legale, nel rispetto del
        GDPR e della normativa italiana sulla protezione dei minori.
      </p>

      <div className="not-prose mt-8 rounded-2xl border border-accent/25 bg-accent/5 p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Modulo da firmare</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-300">
          Scarica il modulo di consenso, compilalo e fallo firmare al genitore o al tutore legale. Invia poi la copia
          firmata a{" "}
          <a className="font-medium text-accent underline underline-offset-2 hover:text-white" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          .
        </p>
        <a
          href={CONSENT_PDF}
          download
          className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
        >
          Scarica modulo PDF
          <span aria-hidden>↓</span>
        </a>
      </div>

      <h2>1. Quando serve il consenso</h2>
      <p>Il consenso del genitore o tutore legale è richiesto quando l&apos;atleta ha meno di 18 anni e si chiede di:</p>
      <ul>
        <li>attivare una scheda digitale o player card con dati personali e sportivi;</li>
        <li>pubblicare immagini, video o recapiti su un sito o profilo condivisibile;</li>
        <li>inserire il profilo in una Talent Board o roster visibile a terzi (club, scout, sponsor, agenti).</li>
      </ul>

      <h2>2. Chi può firmare</h2>
      <p>Possono prestare il consenso:</p>
      <ul>
        <li>il genitore esercente la responsabilità genitoriale;</li>
        <li>il tutore legale o chi esercita legalmente la potestà sull&apos;atleta minorenne;</li>
        <li>in caso di affidamento, la persona indicata negli atti competenti, ove applicabile.</li>
      </ul>

      <h2>3. Cosa autorizza il modulo</h2>
      <p>Il documento scaricabile consente di autorizzare, in modo esplicito:</p>
      <ul>
        <li>il trattamento dei dati personali dell&apos;atleta minorenne per le finalità del servizio;</li>
        <li>l&apos;uso e la pubblicazione controllata di immagini, video e dati sportivi;</li>
        <li>la condivisione del profilo verso destinatari professionali concordati (es. club, scout);</li>
        <li>la responsabilità del genitore/tutore sui materiali forniti.</li>
      </ul>
      <p>
        Per i dettagli sul trattamento dati vedi la{" "}
        <Link className="text-accent underline underline-offset-2 hover:text-white" href="/privacy">
          Privacy policy
        </Link>
        .
      </p>

      <h2>4. Come inviare il modulo firmato</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5">
        <li>Scarica il PDF «Consenso genitore/tutore».</li>
        <li>Compila tutti i campi e fai firmare il genitore o tutore legale.</li>
        <li>
          Invia scansione o foto leggibile a{" "}
          <a className="text-accent underline underline-offset-2 hover:text-white" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>{" "}
          con oggetto: <strong>Consenso minorenne — [Nome atleta]</strong>.
        </li>
      </ol>
      <p>
        {SITE.name} non rende pubblici profili di atleti minorenni senza aver ricevuto il modulo firmato, salvo diversa
        previsione di legge.
      </p>

      <h2>5. Revoca del consenso</h2>
      <p>
        Il genitore o tutore legale può revocare il consenso in qualsiasi momento scrivendo a{" "}
        <a className="text-accent underline underline-offset-2 hover:text-white" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        . La revoca non pregiudica i trattamenti già effettuati sulla base del consenso prestato in precedenza, nei
        limiti di legge.
      </p>

      <h2>6. Contatti</h2>
      <p>
        Per domande su atleti minorenni, consensi o documentazione:{" "}
        <a className="text-accent underline underline-offset-2 hover:text-white" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>{" "}
        · {SITE.phoneDisplay}.
      </p>
    </LegalPageShell>
  );
}
