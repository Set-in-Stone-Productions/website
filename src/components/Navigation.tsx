import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md shadow-2xl border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-poppins font-bold text-foreground hover:text-primary transition-all duration-300 tracking-wide relative group"
          >
            <span className="relative">
              Set in Stone Productions
              <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </Link>
            ))}
            <Link 
              to="/submission-form"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg transition-all duration-300 font-medium border border-primary/30 shadow-sm hover:shadow-md hover:shadow-primary/20"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
              <Link 
                to="/submission-form"
                className="block w-full bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-2 rounded-lg transition-all text-center font-medium border border-primary/30"
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