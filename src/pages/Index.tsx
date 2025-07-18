import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DonateSection } from "@/components/DonateSection";
import { SubmissionsSection } from "@/components/SubmissionsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <DonateSection />
      <SubmissionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
