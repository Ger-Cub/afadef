import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { INTERVENTIONS } from "../data";
import { HeartPulse, GraduationCap, Construction, Scale, TrendingUp, ChevronDown, CheckCircle2, Heart } from "lucide-react";

// Icon mapping dictionary for domains
const domainIconMap: Record<string, React.ComponentType<any>> = {
  HeartPulse,
  GraduationCap,
  Construction,
  Scale,
  TrendingUp
};

export default function Interventions() {
  const [activeTab, setActiveTab] = useState<string>("sante");

  return (
    <section id="interventions" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-brand-green font-mono text-xs font-extrabold tracking-widest uppercase bg-emerald-50 px-3 py-1.5 rounded-full"
          >
            Nos Actions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-black text-gray-900 tracking-tight"
          >
            Domaines d’Intervention Stratégique
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-brand-purple mx-auto rounded-full mt-2"
          />
          <p className="text-gray-500 text-sm max-w-xl mx-auto pt-2">
            Grâce à une approche globale centrée sur la famille, nous couvrons les besoins fondamentaux pour rétablir la dignité et favoriser l'autonomie.
          </p>
        </div>

        {/* Desktop Tabbed View & Mobile Accordion Toggle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Sidebar (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            {INTERVENTIONS.map((domain, index) => {
              const IconComponent = domainIconMap[domain.iconName] || Heart;
              const isActive = activeTab === domain.id;
              return (
                <motion.button
                  key={domain.id}
                  onClick={() => setActiveTab(domain.id)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-center space-x-4 cursor-pointer relative overflow-hidden group ${
                    isActive
                      ? "bg-brand-purple text-white border-brand-purple shadow-lg shadow-purple-100"
                      : "bg-white text-gray-700 border-slate-100 hover:border-purple-200 hover:bg-purple-50/20"
                  }`}
                >
                  {/* Active highlight pill */}
                  {isActive && (
                    <motion.div
                      layoutId="active-domain-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-green"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-white/10 text-emerald-300"
                        : "bg-purple-50 text-brand-purple group-hover:scale-110"
                    }`}
                  >
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="block font-display font-bold text-sm sm:text-base truncate">
                      {domain.title}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest block mt-0.5 opacity-60 font-mono">
                      {domain.id === "sante" && "Prise en charge & Soins"}
                      {domain.id === "education" && "Orientation & Appui"}
                      {domain.id === "infrastructures" && "Réhabilitation physique"}
                      {domain.id === "juridique" && "Droit & Protection"}
                      {domain.id === "economique" && "Réinsertion & Paix"}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Interactive Detail Content Box (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm min-h-[420px] relative overflow-hidden flex flex-col justify-between">
            {/* Visual design elements in background */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-50/50 rounded-full blur-2xl -mr-16 -mt-16" />
            
            <AnimatePresence mode="wait">
              {INTERVENTIONS.map((domain) => {
                if (domain.id !== activeTab) return null;
                const IconComponent = domainIconMap[domain.iconName] || Heart;
                return (
                  <motion.div
                    key={domain.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                    className="space-y-6 relative z-10 flex-1 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Domain Header Card Info */}
                      <div className="flex items-center space-x-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-purple to-purple-800 text-white flex items-center justify-center shadow-lg shadow-purple-100">
                          <IconComponent className="w-6 h-6 text-emerald-300" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-widest font-black text-brand-purple font-mono">PÔLE D'INTERVENTION</span>
                          <h3 className="font-display font-black text-xl sm:text-2xl text-gray-900 leading-none">
                            {domain.title}
                          </h3>
                        </div>
                      </div>

                      {/* Domain Description */}
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                        {domain.description}
                      </p>

                      <div className="w-full h-[1px] bg-slate-100 my-4" />

                      {/* Domain Directives / Detail bullet list */}
                      <div>
                        <h4 className="font-display font-extrabold text-xs text-brand-purple uppercase tracking-wider mb-3 font-mono">
                          Objectifs et Activités Clés :
                        </h4>
                        <div className="space-y-3">
                          {domain.details.map((detail, dIdx) => (
                            <motion.div
                              key={dIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: dIdx * 0.1, duration: 0.4 }}
                              className="flex items-start space-x-3 bg-slate-50 hover:bg-purple-50/10 p-3 rounded-xl border border-slate-100/50 hover:border-purple-100 transition-colors"
                            >
                              <div className="mt-0.5">
                                <CheckCircle2 className="w-4.5 h-4.5 text-brand-green fill-green-50 shrink-0" />
                              </div>
                              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                {detail}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA dynamic footer inside container */}
                    <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="text-left">
                        <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider font-mono">LOCALISATION CONCERNÉE</span>
                        <span className="text-xs font-semibold text-slate-700">Territoire de Goma & zones d'influence du Nord-Kivu</span>
                      </div>
                      <a
                        href="#contact"
                        className="bg-brand-purple hover:bg-purple-900 text-white text-xs font-extrabold tracking-wider uppercase px-4.5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow hover:scale-102"
                      >
                        Soutenir ce projet
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
