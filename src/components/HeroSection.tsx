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
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
          Set in Stone Productions
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
          Where Vision Meets Execution
        </p>
        <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed text-gray-300">
          From concept to completion, we bring your stories to life with cinematic excellence 
          and unwavering dedication to the craft of filmmaking.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-orange-500 text-white hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/25 shadow-md transition-all duration-200 ease-out px-8 py-3 text-lg font-medium"
          >
            Submit Your Project
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-orange-500/50 text-white hover:bg-orange-500/10 hover:border-orange-400/70 hover:shadow-lg hover:shadow-orange-500/20 shadow-md backdrop-blur-sm bg-black/20 transition-all duration-200 ease-out px-8 py-3 text-lg font-medium"
          >
            View Our Work
          </Button>
        </div>
      </div>

    </section>
  );
}