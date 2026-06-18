#!/usr/bin/env python3
"""Genera il PDF di consenso genitore/tutore per atleti minorenni KataHero."""

from pathlib import Path

from fpdf import FPDF
from fpdf.enums import XPos, YPos

OUT = Path(__file__).resolve().parent.parent / "public" / "documenti" / "consenso-genitore-tutore-katahero.pdf"
FONT_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
BLANK = "________________________________________"


class ConsentPDF(FPDF):
    def footer(self) -> None:
        self.set_y(-12)
        self.set_font("Arial", size=8)
        self.set_text_color(100, 100, 100)
        self.cell(
            0,
            8,
            f"KataHero — Consenso genitore/tutore — pagina {self.page_no()}",
            align="C",
            new_x=XPos.LMARGIN,
            new_y=YPos.NEXT,
        )


def write_line(pdf: FPDF, text: str, *, bold: bool = False, size: int = 10) -> None:
    pdf.set_x(pdf.l_margin)
    pdf.set_font("Arial", "B" if bold else "", size)
    pdf.multi_cell(pdf.epw, 5.5 if not bold else 6, text)


def main() -> None:
    pdf = ConsentPDF()
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.add_font("Arial", "", FONT_REG)
    pdf.add_font("Arial", "B", FONT_BOLD)
    pdf.add_page()

    write_line(pdf, "Modulo di consenso per atleti minorenni", bold=True, size=16)
    pdf.ln(2)
    write_line(pdf, "KataHero — scheda digitale e Talent Board", bold=True, size=11)
    pdf.set_text_color(80, 80, 80)
    write_line(
        pdf,
        "Documento da compilare e firmare dal genitore esercente la responsabilità genitoriale "
        "o dal tutore legale dell'atleta minorenne.",
        size=9,
    )
    pdf.ln(3)
    pdf.set_text_color(0, 0, 0)

    fields = [
        ("1. Dati dell'atleta minorenne", [
            f"Nome e cognome: {BLANK}",
            f"Data di nascita: ____ / ____ / ______    Luogo di nascita: {BLANK}",
            f"Codice fiscale (se disponibile): {BLANK}",
            f"Squadra / società sportiva: {BLANK}",
            f"Ruolo / categoria: {BLANK}",
        ]),
        ("2. Dati del genitore / tutore legale che presta il consenso", [
            f"Nome e cognome: {BLANK}",
            "Qualifica:  [ ] Genitore   [ ] Tutore legale   [ ] Affidatario / esercente potestà",
            f"Codice fiscale: {BLANK}",
            f"Documento d'identità (tipo e numero): {BLANK}",
            f"Indirizzo: {BLANK}",
            f"Email: ______________________  Telefono: ______________________",
            f"Rapporto con l'atleta (se tutore): {BLANK}",
        ]),
    ]

    for title, lines in fields:
        pdf.ln(2)
        write_line(pdf, title, bold=True, size=11)
        for line in lines:
            write_line(pdf, line)

    pdf.ln(2)
    write_line(pdf, "3. Oggetto del consenso", bold=True, size=11)
    write_line(
        pdf,
        "Il/La sottoscritto/a, in qualità di genitore esercente la responsabilità genitoriale "
        "o tutore legale dell'atleta indicato, dichiara di aver preso visione dell'informativa "
        "privacy di KataHero (www.katahero.com/privacy) e:",
    )

    checks = [
        "autorizza KataHero al trattamento dei dati personali dell'atleta minorenne, "
        "inclusi dati anagrafici, sportivi, biografici, immagini, video e recapiti, "
        "per le finalità connesse alla creazione e gestione della scheda digitale / player card "
        "e, ove previsto, alla pubblicazione su sito dedicato e Talent Board;",
        "autorizza la pubblicazione e la condivisione controllata del profilo dell'atleta "
        "(nome, immagine, dati sportivi, link al profilo) verso club, scout, sponsor, agenti "
        "e società sportive, nei limiti concordati con KataHero;",
        "dichiara di disporre dei diritti necessari sui materiali forniti (foto, video, loghi) "
        "o di averne ottenuto le autorizzazioni;",
        "accetta che il servizio sia svolto in favore dell'atleta minorenne sotto la propria responsabilità.",
    ]

    pdf.ln(2)
    write_line(pdf, "4. Dichiarazioni e autorizzazioni", bold=True, size=11)
    for i, text in enumerate(checks, 1):
        write_line(pdf, f"[ ] {i}. {text}")

    pdf.ln(2)
    write_line(pdf, "5. Durata e revoca", bold=True, size=11)
    write_line(
        pdf,
        "Il consenso ha durata legata al rapporto contrattuale o alla pubblicazione del profilo, "
        "fino a revoca scritta inviata a salvo.bonavita9808@gmail.com. La revoca non pregiudica "
        "i trattamenti già effettuati in base al consenso prestato.",
    )

    pdf.ln(2)
    write_line(pdf, "6. Firme", bold=True, size=11)
    pdf.ln(2)
    write_line(pdf, f"Luogo e data: {BLANK}    ____ / ____ / ______")
    pdf.ln(10)
    write_line(pdf, "Firma del genitore / tutore legale")
    pdf.ln(12)
    write_line(pdf, BLANK)
    pdf.ln(6)
    write_line(pdf, "Firma dell'atleta (solo se maggiorenne o come presa visione, se richiesto)")
    pdf.ln(12)
    write_line(pdf, BLANK)

    pdf.ln(4)
    pdf.set_text_color(80, 80, 80)
    write_line(
        pdf,
        "Invio del modulo: allega scansione o foto leggibile del documento firmato a "
        "salvo.bonavita9808@gmail.com indicando in oggetto «Consenso minorenne — [Nome atleta]». "
        "KataHero non attiva profili pubblici di atleti minorenni senza questo consenso.",
        size=9,
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(OUT))
    print(f"Scritto: {OUT}")


if __name__ == "__main__":
    main()
