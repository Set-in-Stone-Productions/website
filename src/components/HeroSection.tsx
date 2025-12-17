import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden vignette film-grain">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-zoom-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 animate-fade-up">
          <img
            src="/SIT Logo Black copy.png"
            alt="Set in Stone Productions"
            className="h-40 md:h-56 w-auto mx-auto drop-shadow-2xl"
          />
        </div>
        <p className="text-2xl md:text-3xl mb-8 text-primary font-light tracking-[0.2em] uppercase animate-fade-up animation-delay-200 drop-shadow-lg">
          Where Visions Sharpens Creation
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-600">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-xl hover:shadow-primary/30 shadow-lg transition-all duration-300 ease-out px-10 py-4 text-lg font-medium tracking-wide"
            asChild
          >
            <Link to="/submission-form">Submit Your Project</Link>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-[#D4A574]/50 text-foreground hover:text-foreground/100 hover:border-foreground/80 hover:shadow-lg hover:shadow-white/10 hover:bg-white/5 shadow-md backdrop-blur-sm bg-[#D4A574]/10 transition-all duration-300 ease-out px-8 py-3 text-lg font-medium"
            asChild
          >
            <Link to="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>

    </section>
  );
}