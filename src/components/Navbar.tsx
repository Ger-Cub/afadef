import React, { useState, useEffect } from "react";
import { Menu, X, Shield, Phone } from "lucide-react";
import logoImg from "../assets/images/afadef_logo_1783663335338.jpg";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onScrollToSection, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "accueil", label: "Accueil" },
    { id: "qui-sommes-nous", label: "Qui sommes-nous" },
    { id: "interventions", label: "Domaines d'intervention" },
    { id: "realisations", label: "Réalisations" },
    { id: "galerie", label: "Galerie" },
    { id: "contact", label: "Contactez-nous" },
  ];

  return (
    <nav
      id="navbar-main"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-purple-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Brand Name */}
          <div
            id="brand-logo-container"
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onScrollToSection("accueil")}
          >
            <div className={`w-11 h-11 rounded-full overflow-hidden border-2 shadow-sm flex items-center justify-center bg-white transition-all duration-300 ${
              isScrolled ? "border-brand-purple" : "border-white"
            }`}>
              <img
                src={logoImg}
                alt="AFADEF Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span
                className={`font-display font-black text-xl tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-brand-purple" : "text-white"
                }`}
              >
                AFADEF
              </span>
              <p className={`text-[9px] font-medium tracking-widest uppercase -mt-1 font-mono transition-colors duration-300 ${
                isScrolled ? "text-brand-green" : "text-emerald-300"
              }`}>
                Nord-Kivu • RDC
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div id="desktop-links" className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onScrollToSection(link.id)}
                className={`px-3 py-2 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer ${
                  activeSection === link.id
                    ? isScrolled
                      ? "bg-brand-purple text-white shadow-sm"
                      : "bg-white text-brand-purple shadow-sm"
                    : isScrolled
                    ? "text-gray-600 hover:text-brand-purple hover:bg-purple-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => onScrollToSection("contact")}
              className="ml-4 bg-brand-green hover:bg-emerald-800 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center space-x-1 shadow-md hover:shadow-lg cursor-pointer hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Soutenir / Contact</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none cursor-pointer ${
                isScrolled ? "text-brand-purple hover:bg-purple-50" : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-b border-purple-50 shadow-inner">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onScrollToSection(link.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-semibold transition-all duration-150 ${
                  activeSection === link.id
                    ? "bg-brand-purple text-white"
                    : "text-gray-700 hover:bg-purple-50 hover:text-brand-purple"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 pb-2 px-4 border-t border-gray-100">
              <button
                onClick={() => {
                  onScrollToSection("contact");
                  setIsOpen(false);
                }}
                className="w-full bg-brand-green hover:bg-emerald-800 text-white py-3 px-4 rounded-xl text-center font-bold tracking-wide uppercase transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Nous contacter</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
