import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-zoom-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
          Set in Stone Productions
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
          Where Vision Meets Execution
        </p>
        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          From concept to completion, we bring your stories to life with cinematic excellence 
          and unwavering dedication to the craft of filmmaking.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/80 hover-scale px-6 py-2 text-base"
          >
            Submit Your Project
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background hover-scale px-8 py-4 text-lg"
          >
            View Our Work
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-foreground hover:text-primary transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}