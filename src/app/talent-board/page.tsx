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
  description: `${SITE.name} Talent Board: board private con tutte le schede dei tuoi atleti; anteprima demo con ricerca e filtri su dati di esempio (basket).`,
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
