import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { TalentBoardExplorer } from "@/components/talent-board/TalentBoardExplorer";
import {
  TalentBoardClosingCta,
  TalentBoardPageHero,
  TalentBoardStatsStrip,
} from "@/components/talent-board/talent-board-sections";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Talent Board",
  description: `Ogni atleta può richiedere la propria card. Agenzie e procuratori attivano una board privata con tutto il roster, filtri e link condivisibili.`,
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
