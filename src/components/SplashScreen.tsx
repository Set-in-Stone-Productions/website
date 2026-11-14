import { useState, useEffect, createContext, useContext } from "react";

interface SplashScreenProps {
  children: React.ReactNode;
}

interface SplashContextType {
  animationsReady: boolean;
}

const SplashContext = createContext<SplashContextType>({ animationsReady: true });

export const useSplashContext = () => useContext(SplashContext);

const SPLASH_DURATION = 6000; // Adjust this to match your GIF duration in milliseconds
const FADE_DURATION = 1000;

export const SplashScreen = ({ children }: SplashScreenProps) => {
  const [showSplash, setShowSplash] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [animationsReady, setAnimationsReady] = useState(() => {
    // If splash was already seen, animations are ready immediately
    return sessionStorage.getItem("hasSeenSplash") === "true";
  });

  useEffect(() => {
    // Check if splash has already been shown this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (!hasSeenSplash) {
      setShowSplash(true);

      // Start fade out after GIF completes
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, SPLASH_DURATION);

      // Hide splash completely after fade animation
      const hideTimer = setTimeout(() => {
        setShowSplash(false);
        setAnimationsReady(true);
        sessionStorage.setItem("hasSeenSplash", "true");
      }, SPLASH_DURATION + FADE_DURATION);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  if (!showSplash) {
    return (
      <SplashContext.Provider value={{ animationsReady }}>
        {children}
      </SplashContext.Provider>
    );
  }

  return (
    <SplashContext.Provider value={{ animationsReady }}>
      {/* Solid black background - stays until splash fully removed */}
      <div className="fixed inset-0 z-[9998] bg-black" />

      {/* Splash GIF overlay */}
      <div
        className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-1000 ${
          fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <video
          src="/Set in Stone Logo.mp4"
          aria-label="Set in Stone Productions"
          autoPlay
          muted
          playsInline
          className="max-w-[80vw] max-h-[80vh] object-contain"
        />
      </div>
    </SplashContext.Provider>
  );
};
