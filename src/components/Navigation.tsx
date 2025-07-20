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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md shadow-2xl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-poppins font-bold text-white">
            Set in Stone Productions
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-200 hover:text-orange-400 transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/submission-form"
              className="bg-orange-500 text-white hover:bg-orange-400 hover:shadow-orange-500/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium border border-orange-500/30"
            >
              Submit a Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-200 hover:text-orange-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-3 py-2 text-gray-200 hover:text-orange-400 transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 py-2">
              <Link 
                to="/submission-form"
                className="block w-full bg-orange-500 text-white hover:bg-orange-400 px-3 py-2 rounded-lg transition-all text-center font-medium border border-orange-500/30"
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