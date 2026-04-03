import type { Metadata } from "next";
import { LegalPageShell } from "@/components/site/LegalPageShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `Informativa sul trattamento dei dati personali per il sito ${SITE.name}.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPageShell title="Privacy policy" lastUpdated="3 aprile 2026">
      <p>
        La presente informativa descrive come <strong>{SITE.name}</strong> (&quot;Titolare&quot;) tratta i dati
        personali degli utenti che visitano il sito, inviano richieste tramite form, email, telefono o WhatsApp, o
        utilizzano i servizi offerti, nel rispetto del Regolamento (UE) 2016/679 (&quot;GDPR&quot;) e della normativa
        italiana sulla privacy.
      </p>

      <h2>1. Titolare del trattamento</h2>
      <p>
        Titolare: <strong>{SITE.name}</strong>. Contatti:{" "}
        <a className="text-accent underline underline-offset-2 hover:text-white" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        , telefono {SITE.phoneDisplay}.
      </p>

      <h2>2. Tipologie di dati trattati</h2>
      <p>Possono essere trattati, a seconda dei casi:</p>
      <ul>
        <li>
          <strong>Dati identificativi e di contatto:</strong> nome, cognome, email, numero di telefono, account di
          messaggistica (es. WhatsApp), messaggi inviati.
        </li>
        <li>
          <strong>Dati di navigazione e tecnici:</strong> indirizzo IP, tipo di browser, dispositivo, data/ora di accesso,
          pagine visitate, cookie o identificatori simili secondo quanto indicato nella sezione Cookie.
        </li>
        <li>
          <strong>Dati contenuti nei progetti:</strong> materiali forniti dal cliente per l&apos;esecuzione del servizio
          (testi, immagini, video), trattati per adempiere al contratto.
        </li>
      </ul>

      <h2>3. Finalità e basi giuridiche</h2>
      <ul>
        <li>
          <strong>Rispondere a richieste di informazioni</strong> (email, telefono, WhatsApp, moduli): interesse legittimo
          e/o esecuzione di misure precontrattuali su richiesta dell&apos;interessato.
        </li>
        <li>
          <strong>Erogazione dei servizi contrattualizzati</strong>, fatturazione e adempimenti contabili: esecuzione del
          contratto e obblighi di legge.
        </li>
        <li>
          <strong>Gestione del sito, sicurezza, statistiche aggregate</strong>: interesse legittimo e/o consenso ove
          richiesto (es. cookie non tecnici).
        </li>
        <li>
          <strong>Invio di comunicazioni promozionali</strong>: solo previo consenso esplicito ove necessario, salvo
          soft spam per beni simili ai sensi di legge ove applicabile.
        </li>
      </ul>

      <h2>4. Modalità del trattamento</h2>
      <p>
        I dati sono trattati con strumenti informatici e, se del caso, cartacei, con logiche correlate alle finalità
        indicate e mediante misure di sicurezza adeguate. Il trattamento è effettuato da soggetti autorizzati e, se
        necessario, da responsabili esterni (es. hosting, email provider) nominati ove richiesto dalla legge.
      </p>

      <h2>5. Conservazione</h2>
      <p>
        I dati sono conservati per il tempo necessario alle finalità per cui sono stati raccolti (es. gestione della
        pratica commerciale), e successivamente per il periodo previsto da obblighi legali (es. contabilità) o per la
        tutela di diritti in sede contenziosa. I messaggi di contatto possono essere conservati per il tempo ragionevole
        per gestire la richiesta e eventuali rapporti successivi.
      </p>

      <h2>6. Comunicazione e trasferimenti</h2>
      <p>
        I dati non sono diffusi. Possono essere comunicati a fornitori tecnici (hosting, manutenzione sito, strumenti di
        comunicazione) nella misura strettamente necessaria. Se un fornitore si trova fuori dallo SEE, si applicano le
        garanzie previste dal GDPR (clausole contrattuali standard o altre misure idonee).
      </p>

      <h2>7. Diritti dell&apos;interessato</h2>
      <p>In base agli articoli 15–22 GDPR, l&apos;interessato può esercitare i diritti di:</p>
      <ul>
        <li>accesso, rettifica, cancellazione, limitazione, portabilità (ove applicabile), opposizione;</li>
        <li>revoca del consenso ove il trattamento si basi sul consenso, senza pregiudicare la liceità del trattamento
          precedente;</li>
        <li>proporre reclamo all&apos;Autorità Garante per la protezione dei dati personali (
          <a
            className="text-accent underline underline-offset-2 hover:text-white"
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noopener noreferrer"
          >
            garanteprivacy.it
          </a>
          ).
        </li>
      </ul>
      <p>
        Per esercitare i diritti: scrivi a{" "}
        <a className="text-accent underline underline-offset-2 hover:text-white" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        .
      </p>

      <h2>8. Cookie e tecnologie simili</h2>
      <p>
        Il sito può utilizzare cookie tecnici necessari al funzionamento e, previo consenso ove richiesto, cookie di
        analisi o di terze parti. Puoi gestire le preferenze tramite il banner cookie (se presente) o le impostazioni del
        browser. L&apos;uso di cookie non necessari è subordinato al consenso ove applicabile.
      </p>

      <h2>9. Modifiche</h2>
      <p>
        L&apos;informativa può essere aggiornata. Si consiglia di consultare periodicamente questa pagina; la data in
        cima indica l&apos;ultimo aggiornamento sostanziale.
      </p>
    </LegalPageShell>
  );
}
