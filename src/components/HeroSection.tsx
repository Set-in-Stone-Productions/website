import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSplashContext } from "./SplashScreen";

const heroImages = [
  "/splashpage/hero-3.png",
  "/splashpage/hero-5.png",
];

export function HeroSection() {
  const { animationsReady } = useSplashContext();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleBackgroundClick = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden vignette film-grain">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center cursor-pointer"
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
        onClick={handleBackgroundClick}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`mb-3 ${animationsReady ? "animate-fade-up" : "opacity-0"}`}>
          <img
            src="/SIT Logo Black copy.png"
            alt="Set in Stone Productions"
            className="h-44 md:h-64 w-auto mx-auto drop-shadow-2xl"
          />
        </div>
        <p className={`text-lg md:text-xl mb-5 text-primary font-light tracking-[0.2em] uppercase drop-shadow-lg ${animationsReady ? "animate-fade-up animation-delay-200" : "opacity-0"}`}>
          Where Visions Sharpens Creation
        </p>

        <div className={`flex flex-col sm:flex-row gap-3 justify-center items-center ${animationsReady ? "animate-fade-up animation-delay-600" : "opacity-0"}`}>
          <Button
            size="default"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-xl hover:shadow-primary/30 shadow-lg transition-all duration-300 ease-out px-6 py-2 text-sm font-medium tracking-wide"
            asChild
          >
            <Link to="/submission-form">Submit Your Project</Link>
          </Button>
          <Button
            size="default"
            variant="outline"
            className="border-[#D4A574]/50 text-foreground hover:text-foreground/100 hover:border-foreground/80 hover:shadow-lg hover:shadow-white/10 hover:bg-white/5 shadow-md backdrop-blur-sm bg-[#D4A574]/10 transition-all duration-300 ease-out px-6 py-2 text-sm font-medium"
            asChild
          >
            <Link to="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>

    </section>
  );
}