import { Contact } from "@/components/site/Contact";
import { FaqSection } from "@/components/site/FaqSection";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { PartnersMarquee } from "@/components/site/PartnersMarquee";
import { Packages } from "@/components/site/Packages";
import { Portfolio } from "@/components/site/Portfolio";
import { Services } from "@/components/site/Services";
import { TalentBoard } from "@/components/site/TalentBoard";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PartnersMarquee />
        <Services />
        <TalentBoard />
        <Portfolio />
        <Packages />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
