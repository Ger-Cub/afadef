/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Interventions from "./components/Interventions";
import RecentWorks from "./components/RecentWorks";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { NGO_INFO } from "./data";
import { Heart, Scale, Users, Mail, Phone, MapPin, ArrowUp, ArrowRight, HeartHandshake } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const logoImg = "/src/assets/images/afadef_logo_1783663335338.jpg";

export default function App() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scrolling to highlight links and show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check which section is in view
      const sections = ["accueil", "qui-sommes-nous", "interventions", "realisations", "galerie", "contact"];
      const scrollPosition = window.scrollY + 200; // offset for triggers

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-light flex flex-col justify-between selection:bg-brand-purple selection:text-white">
      {/* Top Glassmorphic Navigation */}
      <Navbar onScrollToSection={handleScrollToSection} activeSection={activeSection} />

      {/* Main Content Layout */}
      <main className="flex-1">
        
        {/* Section 1: Hero Banner (Accueil) */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Section 2: Qui sommes nous */}
        <About />

        {/* Section 3: Domaines d'intervention */}
        <Interventions />

        {/* Section 4: Réalisations */}
        <RecentWorks />

        {/* Section 5: Galerie Photos */}
        <Gallery />

        {/* Section 6: Contactez-nous */}
        <Contact />

      </main>

      {/* Beautiful, High-Contrast Corporate Footer */}
      <footer className="bg-[#1b072f] text-slate-100 border-t border-purple-950 pt-16 pb-8 relative overflow-hidden z-10">
        {/* Subtle glowing elements in footer background */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-purple-900/60">
            
            {/* Column 1: Brand details (lg:col-span-5) */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white bg-white flex items-center justify-center shadow-sm">
                  <img
                    src={logoImg}
                    alt="AFADEF Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="font-display font-black text-xl tracking-tight text-white">
                    AFADEF
                  </span>
                  <p className="text-[9px] font-semibold tracking-wider text-emerald-400 uppercase font-mono">
                    Goma • Province du Nord-Kivu • RDC
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light max-w-sm">
                L'<strong>Association des Femmes pour l’Appui et le Développement des Familles</strong> est une organisation non-gouvernementale congolaise engagée pour la santé, la justice et le développement des foyers au Nord-Kivu.
              </p>

              {/* Devise pill list in footer */}
              <div className="flex items-center space-x-2 pt-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 font-mono">Devise :</span>
                <span className="text-xs font-semibold bg-white/10 px-2.5 py-1 rounded-full text-white border border-white/5">
                  Santé
                </span>
                <span className="text-xs font-semibold bg-white/10 px-2.5 py-1 rounded-full text-white border border-white/5">
                  Justice
                </span>
                <span className="text-xs font-semibold bg-white/10 px-2.5 py-1 rounded-full text-white border border-white/5">
                  Développement
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-4 text-left">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider font-mono">
                Raccourcis
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {[
                  { id: "accueil", label: "Accueil" },
                  { id: "qui-sommes-nous", label: "Qui sommes-nous" },
                  { id: "interventions", label: "Domaines d'intervention" },
                  { id: "realisations", label: "Réalisations d'Impact" },
                  { id: "galerie", label: "Galerie Photos" },
                  { id: "contact", label: "Faire un Don / Contact" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleScrollToSection(item.id)}
                      className="hover:text-emerald-400 hover:translate-x-1 transition-all flex items-center space-x-1 cursor-pointer"
                    >
                      <span>•</span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contacts / Location Summary (lg:col-span-4) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider font-mono">
                Secrétariat de Goma
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-light leading-relaxed">
                    N°125A, Avenue Présidentielle, Quartier Himbi 1, Goma, RDC.
                  </span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`mailto:${NGO_INFO.contact.email}`} className="hover:text-emerald-400 transition-colors font-medium">
                    {NGO_INFO.contact.email}
                  </a>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="font-medium">
                    <span>{NGO_INFO.contact.phone}</span>
                    <span className="block text-[11px] text-slate-400 font-light mt-0.5">
                      {NGO_INFO.contact.phoneSecondary}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright & NGO Credits */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-400 font-medium">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} AFADEF. Tous droits réservés. Organisation sans but lucratif (ASBL).
            </p>
            <div className="flex items-center space-x-1 text-slate-500 mt-2 sm:mt-0 font-mono">
              <span>Fait avec</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span>pour les familles du Nord-Kivu</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 bg-brand-purple hover:bg-purple-900 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
