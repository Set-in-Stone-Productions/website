import { Navigation } from "@/components/Navigation";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Footer } from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default Portfolio;