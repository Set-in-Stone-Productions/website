import { Navigation } from "@/components/Navigation";
import { SubmissionsSection } from "@/components/SubmissionsSection";
import { Footer } from "@/components/Footer";

const Submissions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <SubmissionsSection />
      <Footer />
    </div>
  );
};

export default Submissions;