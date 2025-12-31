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
          Where Vision Sharpens Creation
        </p>


      </div>

    </section>
  );
}