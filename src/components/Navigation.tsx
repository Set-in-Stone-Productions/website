import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-poppins font-bold text-background">
            Set in Stone Productions
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-background hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/submission-form"
              className="bg-primary text-primary-foreground hover:bg-primary/80 hover-scale px-4 py-2 rounded transition-all"
            >
              Submit a Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-background"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-foreground border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-3 py-2 text-background hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
              <Link 
                to="/submission-form"
                className="block w-full bg-primary text-primary-foreground hover:bg-primary/80 px-3 py-2 rounded transition-all text-center"
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