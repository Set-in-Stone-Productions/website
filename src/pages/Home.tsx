import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
              Our mission is to champion independent filmmakers by providing the space, support, and freedom to bring their vision to life. From concept to completion, we are committed to cinematic excellence and an unwavering dedication to honing your craft.
            </p>

            {/* Services Summary */}
            <div className="mt-8 mb-10">
              <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
                We offer a comprehensive range of production services tailored to bring your creative vision to the screen, from pre-production planning to final post-production polish.
              </p>
              <Link to="/services" className="text-primary hover:text-primary/80 underline underline-offset-4 font-medium transition-colors">
                Read More about our Services
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-xl hover:shadow-primary/30 shadow-lg transition-all duration-300 ease-out px-8 py-6 text-base font-medium tracking-wide"
                asChild
              >
                <Link to="/submission-form">Submit Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 ease-out px-8 py-6 text-base font-medium"
                asChild
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;