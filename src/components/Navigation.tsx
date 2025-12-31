import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [justNavigatedToHome, setJustNavigatedToHome] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "";
  const wasVisibleOnHomeRef = useRef(false);
  const prevIsHomeRef = useRef(isHomePage);

  // Track scroll position on home page
  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const handleScroll = () => {
      // Trigger when scrolled past 80% of viewport height
      const isPastHero = window.scrollY > window.innerHeight * 0.8;
      setScrolledPastHero(isPastHero);
      // Track if elements were visible while on home page
      wasVisibleOnHomeRef.current = isPastHero;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Handle animation when navigating
  useEffect(() => {
    const wasOnOtherPage = !prevIsHomeRef.current;

    if (!isHomePage) {
      // Navigated to a non-home page
      if (!wasVisibleOnHomeRef.current) {
        // Elements were hidden on home - animate them in
        setShouldAnimate(true);
      }
      setJustNavigatedToHome(false);
      // Reset scroll state
      setScrolledPastHero(false);
    } else {
      // Navigated to home page
      if (wasOnOtherPage) {
        // Came from another page - animate out
        setJustNavigatedToHome(true);
        // Clear after animation completes
        setTimeout(() => setJustNavigatedToHome(false), 600);
      }
      setShouldAnimate(false);
      wasVisibleOnHomeRef.current = false;
    }

    prevIsHomeRef.current = isHomePage;
  }, [isHomePage]);

  // Show logo/button if: not home page OR (home page AND scrolled past hero)
  const showNavElements = !isHomePage || scrolledPastHero;

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "mailto:contact@jbernsteinmedia.com", label: "Contact", external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md shadow-2xl border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center h-16">
          {/* Left section - Logo */}
          <div className="flex-1 flex items-center">
            <div
              className={`h-24 flex items-center overflow-hidden ${isHomePage || shouldAnimate || justNavigatedToHome ? 'transition-all duration-500 ease-in-out' : ''
                } ${showNavElements ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'
                }`}
            >
              <Link
                to="/"
                className="hover:opacity-80 transition-opacity duration-300 flex-shrink-0"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  src="/SITtopleftlogo.png"
                  alt="Set in Stone Productions"
                  className="h-16 md:h-24 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Center section - Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                  </span>
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                  </span>
                </Link>
              )
            ))}
          </div>

          {/* Right section - Submit button & Mobile menu */}
          <div className="flex-1 flex items-center justify-end">
            <div
              className={`hidden md:block overflow-hidden ${isHomePage || shouldAnimate || justNavigatedToHome ? 'transition-all duration-500 ease-in-out' : ''
                } ${showNavElements ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'
                }`}
            >
              <Link
                to="/submission-form"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg transition-all duration-300 font-playfair font-medium border border-primary/30 shadow-sm hover:shadow-md hover:shadow-primary/20 whitespace-nowrap"
              >
                Submit a Project
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <div className="px-3 py-2">
                <Link
                  to="/submission-form"
                  className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-lg transition-all text-center font-playfair font-medium border border-primary/30"
                >
                  Submit a Project
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}