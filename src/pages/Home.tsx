import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      
      {/* Mission Statement Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
            <p className="text-lg leading-relaxed text-gray-200">
              Our mission is to champion independent filmmakers by providing the space, support, and freedom to bring their visions to life. From concept to completion, we are committed to cinematic excellence and an unwavering dedication to honing your craft.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;