import { useState, useEffect } from "react";

interface SplashScreenProps {
  children: React.ReactNode;
}

const SPLASH_DURATION = 6000; // Adjust this to match your GIF duration in milliseconds
const FADE_DURATION = 1000;

export const SplashScreen = ({ children }: SplashScreenProps) => {
  const [showSplash, setShowSplash] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

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
        sessionStorage.setItem("hasSeenSplash", "true");
      }, SPLASH_DURATION + FADE_DURATION);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  if (!showSplash) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Splash overlay */}
      <div
        className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-1000 ${
          fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <img
          src="/Set in Stone Logo.gif"
          alt="Set in Stone Productions"
          className="max-w-[80vw] max-h-[80vh] object-contain"
        />
      </div>

      {/* Main content (hidden behind splash) */}
      <div className={fadeOut ? "opacity-100" : "opacity-0"}>
        {children}
      </div>
    </>
  );
};
