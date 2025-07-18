import { Navigation } from "@/components/Navigation";
import { DonateSection } from "@/components/DonateSection";
import { Footer } from "@/components/Footer";

const Donate = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <DonateSection />
      <Footer />
    </div>
  );
};

export default Donate;