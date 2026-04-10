import { LegalPageShell } from "@/components/site/LegalPageShell";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Termini e condizioni",
  description: `Condizioni generali di utilizzo del sito e dei servizi ${SITE.name}.`,
  path: "/termini-e-condizioni",
});

export default function TerminiCondizioniPage() {
  return (
    <LegalPageShell title="Termini e condizioni" lastUpdated="3 aprile 2026">
      <p>
        I presenti Termini e Condizioni (&quot;Termini&quot;) regolano l&apos;accesso al sito web e l&apos;utilizzo dei
        servizi offerti da <strong>{SITE.name}</strong> (di seguito &quot;{SITE.name}&quot;, &quot;noi&quot;,
        &quot;Titolare&quot;). Utilizzando il sito o richiedendo informazioni o prestazioni, l&apos;utente
        (&quot;Cliente&quot;, &quot;tu&quot;) accetta integralmente i presenti Termini.
      </p>

      <h2>1. Informazioni sul Titolare</h2>
      <p>
        I servizi sono resi da <strong>{SITE.name}</strong>. Per contatti:{" "}
        <a className="text-accent underline underline-offset-2 hover:text-white" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        , telefono {SITE.phoneDisplay}. Il sito ha finalità promozionale e informativa su servizi di personal branding,
        siti web, contenuti e attività correlate per atleti e personal trainer.
      </p>

      <h2>2. Oggetto dei servizi</h2>
      <p>
        {SITE.name} offre servizi professionali che possono includere, a seconda del preventivo o del contratto
        specifico: identità visiva, progettazione e realizzazione di siti web o landing page, piani editoriali,
        contenuti, media kit, consulenza strategica e supporto continuativo anche tramite abbonamento. Le caratteristiche
        precise (deliverable, tempi, numero di revisioni, canali inclusi) sono definite di volta in volta in
        preventivo, ordine o contratto scritto.
      </p>

      <h2>3. Prezzi, pagamenti e abbonamenti</h2>
      <p>
        I prezzi indicati sul sito (inclusi pacchetti con quota di setup e abbonamento mensile) sono espressi in euro e
        possono essere IVA esclusa o inclusa: quanto applicabile sarà specificato in preventivo o in fattura. I pagamenti
        seguono le modalità concordate (bonifico, piattaforme di pagamento, ecc.). Gli abbonamenti si intendono con
        rinnovo periodico come indicato in offerta; la disdetta e le condizioni di recesso sono quelle indicate nel
        contratto o nel documento di adesione all&apos;abbonamento.
      </p>

      <h2>4. Obblighi del Cliente</h2>
      <ul>
        <li>Fornire informazioni veritiere, materiali (testi, foto, video, loghi) di cui possiede i diritti o le necessarie autorizzazioni.</li>
        <li>Rispettare i tempi di feedback concordati per non ritardare il progetto.</li>
        <li>Non utilizzare i servizi per contenuti illeciti, diffamatori o che violino diritti di terzi.</li>
      </ul>

      <h2>5. Proprietà intellettuale</h2>
      <p>
        Salvo diverso accordo scritto, il Titolare mantiene i diritti su strumenti, template e metodologie proprie. I
        deliverable finali oggetto di pagamento sono ceduti o concessi in licenza al Cliente nei termini indicati nel
        contratto o nel preventivo. Il Cliente garantisce di avere titolo per l&apos;uso dei materiali forniti.
      </p>

      <h2>6. Limitazione di responsabilità</h2>
      <p>
        Il sito e i contenuti sono forniti &quot;così come sono&quot;. {SITE.name} non è responsabile per danni indiretti,
        perdita di profitto, interruzioni o malfunzionamenti dipendenti da terze parti (hosting, provider, piattaforme
        social). L&apos;obiettivo di visibilità o risultati commerciali non costituisce garanzia assoluta, salvo quanto
        eventualmente pattuito per iscritto in modo specifico.
      </p>

      <h2>7. Uso del sito web</h2>
      <p>
        È vietato l&apos;uso del sito in modo da compromettere la sicurezza, sovraccaricare i sistemi o estrarre dati in
        modo automatizzato non autorizzato. Il Titolare può sospendere o limitare l&apos;accesso in caso di abuso.
      </p>

      <h2>8. Modifiche ai Termini</h2>
      <p>
        I Termini possono essere aggiornati. La versione applicabile è quella pubblicata su questa pagina con data di
        ultimo aggiornamento. Per i rapporti già in essere, si applicano le condizioni contrattuali sottoscritte al momento
        dell&apos;ordine, salvo aggiornamenti resi obbligatori per legge.
      </p>

      <h2>9. Legge applicabile e foro</h2>
      <p>
        I presenti Termini sono regolati dalla legge italiana. Per le controversie relative a consumatori, si applicano le
        norme inderogabili di protezione del consumatore. Per chi agisce come professionista o impresa, salvo diversa
        norma imperativa, il foro competente è quello di riferimento del Titolare, salvo accordi diversi per iscritto.
      </p>

      <h2>10. Contatti</h2>
      <p>
        Per domande sui presenti Termini:{" "}
        <a className="text-accent underline underline-offset-2 hover:text-white" href={`mailto:${SITE.email}`}>
          {SITE.email}
        </a>
        .
      </p>
    </LegalPageShell>
  );
}
