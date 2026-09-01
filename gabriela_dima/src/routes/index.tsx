import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "@/components/SeoHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyGabrielaSection } from "@/components/sections/WhyGabrielaSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-bg font-body text-navy antialiased">
      <SeoHead
        title="Gabriela Dima CPA, MBA — CFO virtuelle pour PME en croissance"
        description="CFO virtuelle pour dirigeants de PME de plus de 2M$. Croissance, acquisitions, redressement et gestion financière stratégique."
      />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyGabrielaSection />
      <AboutSection />
      <ResultsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
