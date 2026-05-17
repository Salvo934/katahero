import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { TalentBoardExplorer } from "@/components/talent-board/TalentBoardExplorer";
import {
  TalentBoardClosingCta,
  TalentBoardPageHero,
  TalentBoardStatsStrip,
} from "@/components/talent-board/talent-board-sections";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Talent Board",
  description: `${SITE.name} Talent Board: cerca e filtra atleti per ruolo, categoria, club e statistiche; ogni card apre una scheda digitale completa per agenti, scout e società. Demo basket.`,
  path: "/talent-board",
});

export default function TalentBoardPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">
        <TalentBoardPageHero />
        <TalentBoardStatsStrip />
        <TalentBoardExplorer />
        <TalentBoardClosingCta />
      </main>
      <Footer />
    </div>
  );
}
