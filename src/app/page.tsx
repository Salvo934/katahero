import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { LaunchOfferBanner } from "@/components/site/LaunchOfferBanner";
import { Navbar } from "@/components/site/Navbar";
import { Packages } from "@/components/site/Packages";
import { Portfolio } from "@/components/site/Portfolio";
import { Services } from "@/components/site/Services";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LaunchOfferBanner />
        <Services />
        <Portfolio />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
