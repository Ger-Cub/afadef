import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Heart, Scale, Users, ShieldAlert, Award, ArrowRight } from "lucide-react";

const heroImg = "/src/assets/images/hero_afadef_1783663350503.jpg";
const logoImg = "/src/assets/images/afadef_logo_1783663335338.jpg";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const [userName, setUserName] = useState("Sarah Mapendo");
  const [userRole, setUserRole] = useState("Membre d'Honneur");
  const [showBadgeTip, setShowBadgeTip] = useState(true);

  // Devise items with custom icons
  const deviseItems = [
    { title: "Santé", icon: Heart, desc: "Soin & soutien psycho", bg: "bg-red-50 text-red-600 border-red-100" },
    { title: "Justice", icon: Scale, desc: "Défense des droits", bg: "bg-amber-50 text-amber-600 border-amber-100" },
    { title: "Développement", icon: Users, desc: "Autonomisation locale", bg: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  ];

  return (
    <section
      id="accueil"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* Background Graphic Patterns & Images */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Congolese Women in Goma"
          className="w-full h-full object-cover filter brightness-45 contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Rich brand purple and dark linear gradients to ensure perfect readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/95 via-brand-purple/85 to-transparent md:to-brand-purple/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-transparent to-brand-purple/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Main Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20"
            >
              <Sparkles className="w-4.5 h-4.5 text-yellow-300 animate-pulse" />
              <span className="text-white text-xs font-bold tracking-widest uppercase font-mono">
                ONG humanitaire • Goma, RDC
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight"
            >
              Pour l’Appui et le <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400">
                Développement
              </span> des Familles
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-200 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
            >
              L'<strong>AFADEF</strong> est dédiée à contribuer au soulagement de la souffrance des populations vulnérables et à promouvoir un développement inclusif à Goma et dans tout le Nord-Kivu.
            </motion.p>

            {/* Devise Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 max-w-md pt-2"
            >
              {deviseItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:-translate-y-1"
                  >
                    <div className="p-2 rounded-full bg-white/20 mb-2">
                      <Icon className="w-5 h-5 text-emerald-300" />
                    </div>
                    <span className="font-display font-bold text-sm text-white block">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-gray-300 leading-tight mt-1 hidden sm:block">
                      {item.desc}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => onScrollToSection("qui-sommes-nous")}
                className="bg-white text-brand-purple hover:bg-gray-100 font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 text-sm sm:text-base cursor-pointer hover:scale-[1.02]"
              >
                <span>Découvrir notre vision</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onScrollToSection("contact")}
                className="bg-brand-green hover:bg-emerald-800 text-white font-bold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all border border-emerald-500/20 text-sm sm:text-base cursor-pointer hover:scale-[1.02]"
              >
                Nous soutenir & Collaborer
              </button>
            </motion.div>
          </div>

          {/* Draggable Hanging ID Badge (Interactive Physics Section) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[460px]">
            {/* Lanyard Ring Anchor (visual illustration of where the card hangs from) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border-2 border-slate-700 shadow z-20" />
            
            {/* Hanging Thread (Drawn as a thin wire that connects to the badge loop) */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-indigo-900 z-10" />

            {/* Hint Box */}
            {showBadgeTip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-10 bg-white text-brand-purple border border-purple-200 px-3 py-1.5 rounded-xl shadow-md text-[11px] font-bold flex items-center space-x-2 z-30"
              >
                <span>👇 Secouez ou glissez le badge pour tester la physique !</span>
                <button onClick={() => setShowBadgeTip(false)} className="text-gray-400 hover:text-red-500 font-bold px-1 ml-1">×</button>
              </motion.div>
            )}

            {/* Draggable Badge Component */}
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              whileDrag={{ scale: 1.05, cursor: "grabbing" }}
              id="interactive-member-badge"
              className="relative w-[280px] h-[400px] bg-gradient-to-b from-white via-slate-50 to-purple-50 rounded-2xl shadow-2xl border-4 border-slate-800 flex flex-col overflow-hidden select-none cursor-grab mt-14 z-20"
            >
              {/* Badge Top Hole */}
              <div className="w-10 h-3 bg-slate-800 rounded-full mx-auto mt-2 flex items-center justify-center">
                <div className="w-5 h-1 bg-white rounded-full" />
              </div>

              {/* Lanyard Ribbon graphic */}
              <div className="h-4 bg-brand-purple w-full mt-1.5 text-[8px] text-center text-purple-200 uppercase tracking-widest font-bold flex items-center justify-center font-mono">
                • AFADEF MEMBRE DE SOUTIEN •
              </div>

              {/* ID Content */}
              <div className="p-4 flex-1 flex flex-col items-center justify-between">
                {/* Logo & Org Name */}
                <div className="flex items-center space-x-2 w-full justify-center">
                  <img src={logoImg} className="w-7 h-7 rounded-full border object-cover" alt="logo" referrerPolicy="no-referrer" />
                  <div className="text-left">
                    <h3 className="font-display font-black text-xs text-brand-purple leading-none">AFADEF</h3>
                    <span className="text-[7px] text-brand-green font-bold font-mono tracking-wide">GOMA - RDC</span>
                  </div>
                </div>

                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-full border-2 border-brand-purple bg-purple-50 flex items-center justify-center overflow-hidden shadow-inner my-2 relative group">
                  <div className="absolute inset-0 bg-brand-purple/10 flex items-center justify-center font-black text-brand-purple text-2xl font-display">
                    {userName ? userName.charAt(0).toUpperCase() : "A"}
                  </div>
                </div>

                {/* User custom name block */}
                <div className="text-center w-full">
                  <h4 className="font-display font-bold text-base text-gray-900 leading-tight truncate">
                    {userName}
                  </h4>
                  <span className="text-[10px] font-bold text-brand-green uppercase tracking-wider font-mono">
                    {userRole}
                  </span>
                </div>

                {/* QR Code and Credentials */}
                <div className="flex justify-between items-end w-full border-t border-dashed border-purple-200 pt-3 mt-2">
                  <div className="text-left space-y-0.5 text-[8px] text-gray-500 font-mono">
                    <div>REG: <span className="text-slate-800 font-bold">NK/GM-2026/04</span></div>
                    <div>STATUT: <span className="text-emerald-700 font-bold">ACTIF</span></div>
                    <div>DEVISE: <span className="text-purple-700 font-bold">S.J.D</span></div>
                  </div>
                  {/* High Quality vector looking QR code using CSS SVG */}
                  <div className="w-10 h-10 bg-slate-900 p-1 rounded">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                      <rect x="0" y="0" width="25" height="25" />
                      <rect x="75" y="0" width="25" height="25" />
                      <rect x="0" y="75" width="25" height="25" />
                      <rect x="35" y="35" width="30" height="30" />
                      <rect x="10" y="45" width="10" height="10" />
                      <rect x="80" y="45" width="10" height="15" />
                      <rect x="45" y="10" width="15" height="10" />
                      <rect x="10" y="10" width="5" height="5" className="text-slate-900 fill-white" />
                      <rect x="85" y="10" width="5" height="5" className="text-slate-900 fill-white" />
                      <rect x="10" y="85" width="5" height="5" className="text-slate-900 fill-white" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Strip */}
              <div className="h-2.5 bg-brand-green w-full" />
            </motion.div>

            {/* Customizer Panel */}
            <div className="w-[280px] bg-white rounded-xl shadow-md border border-purple-100 p-3.5 mt-4 space-y-2 text-left z-10">
              <label className="block text-[11px] font-extrabold text-brand-purple tracking-wide uppercase font-mono">
                Personnalisez votre badge de membre :
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  maxLength={18}
                  placeholder="Votre Nom"
                  className="w-full text-xs px-2 py-1.5 border border-purple-100 rounded bg-purple-50/50 text-gray-800 font-medium focus:ring-1 focus:ring-brand-purple outline-none"
                />
                <select
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  className="w-full text-xs px-1 py-1.5 border border-purple-100 rounded bg-purple-50/50 text-gray-800 font-medium focus:ring-1 focus:ring-brand-purple outline-none"
                >
                  <option value="Membre de soutien">Soutien</option>
                  <option value="Ambassadeur">Ambassadeur</option>
                  <option value="Volontaire AFADEF">Volontaire</option>
                  <option value="Membre d'Honneur">D'Honneur</option>
                </select>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
