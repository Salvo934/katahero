import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { TalentBoardExplorer, TalentBoardFaqSection } from "@/components/talent-board/TalentBoardExplorer";
import {
  TalentBoardClosingCta,
  TalentBoardPageHero,
  TalentBoardStatsStrip,
} from "@/components/talent-board/talent-board-sections";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Talent Board",
  description: `Dashboard ${SITE.name} per scoprire e valutare atleti: mini card, filtri e profili completi. Oggi in vetrina il basket.`,
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
        <TalentBoardFaqSection />
      </main>
      <Footer />
    </div>
  );
}
