import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ACHIEVEMENTS } from "../data";
import { ChevronRight, ChevronLeft, Calendar, UserCheck, Sparkles, AlertCircle } from "lucide-react";
import schoolGoma from "../assets/images/school_goma_1783663363905.jpg";
import healthSupport from "../assets/images/health_support_1783663376759.jpg";

const imageMap: Record<string, string> = {
  school_goma: schoolGoma,
  health_support: healthSupport,
  prison_support: "https://picsum.photos/seed/prison_support/800/600",
  microcredit: "https://picsum.photos/seed/microcredit/800/600"
};

export default function RecentWorks() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % ACHIEVEMENTS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + ACHIEVEMENTS.length) % ACHIEVEMENTS.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const activeWork = ACHIEVEMENTS[activeIndex];

  return (
    <section id="realisations" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative ambient background gradient */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl z-0" />
      <div className="absolute top-24 -left-24 w-96 h-96 bg-purple-50/60 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-brand-purple font-mono text-xs font-extrabold tracking-widest uppercase bg-purple-50 px-3 py-1.5 rounded-full"
          >
            Nos Réalisations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-black text-gray-900 tracking-tight"
          >
            Impact Réel & Projets Concrets à Goma
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-brand-green mx-auto rounded-full mt-2"
          />
          <p className="text-gray-500 text-sm max-w-lg mx-auto pt-2">
            Découvrez nos interventions récentes qui ont apporté un changement durable dans la vie des familles et des communautés locales.
          </p>
        </div>

        {/* 3D Stack and description grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptive Text Block of Active Realization */}
          <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWork.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="space-y-4"
              >
                <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100 text-brand-green px-3.5 py-1.5 rounded-full">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[11px] font-bold font-mono tracking-widest uppercase">
                    {activeWork.category}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 leading-tight">
                  {activeWork.title}
                </h3>

                <div className="flex flex-wrap gap-4 text-xs font-mono font-medium text-gray-500 py-1">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4 text-brand-purple" />
                    <span>Date: {activeWork.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <UserCheck className="w-4 h-4 text-brand-green" />
                    <span className="text-brand-green font-bold">Impact: {activeWork.impact}</span>
                  </span>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                  {activeWork.description}
                </p>

                <div className="bg-purple-50/50 border border-purple-100/50 rounded-2xl p-4.5 flex items-start space-x-3">
                  <div className="p-1.5 rounded-lg bg-white shadow-sm mt-0.5">
                    <AlertCircle className="w-4.5 h-4.5 text-brand-purple" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-brand-purple font-mono uppercase tracking-wider">Résultat vérifié</span>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed font-light">
                      Chaque projet fait l'objet d'un audit complet par notre Collège des Commissaires aux comptes pour certifier la redevabilité et la transparence de l'utilisation de vos contributions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Manual Controls */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-slate-50 hover:bg-purple-100 text-brand-purple border border-slate-200/60 hover:border-purple-200 flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-brand-purple hover:bg-purple-900 text-white flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono font-semibold text-gray-400">
                {activeIndex + 1} / {ACHIEVEMENTS.length}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Card Stack Layer (lg:col-span-6) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            
            {/* The 3D stack container with precise responsive heights */}
            <div className="relative w-full max-w-md mx-auto h-[340px] sm:h-[450px] md:h-[480px] flex flex-col justify-between">
              
              {/* Cards Deck */}
              <div className="relative flex-1 w-full">
                {ACHIEVEMENTS.map((work, index) => {
                  // Determine positions based on active index
                  const total = ACHIEVEMENTS.length;
                  const offset = (index - activeIndex + total) % total;
                  const isTop = offset === 0;
                  
                  // Only show the top 3 cards to keep it clean and save rendering resources
                  if (offset > 2) return null;

                  const scale = 1 - offset * 0.05;
                  const yOffset = offset * 20; // Stacking layout vertical shift
                  const zIndex = 10 - offset;
                  const opacity = 1 - offset * 0.3;

                  return (
                    <motion.div
                      key={work.id}
                      style={{ zIndex }}
                      animate={{
                        scale,
                        y: yOffset,
                        opacity,
                        // Offset cards slightly to the right for depth
                        x: offset * 8,
                      }}
                      transition={{
                        duration: 0.6,
                        // Luxury easing curve as requested by user
                        ease: [0.32, 0.72, 0, 1]
                      }}
                      className="absolute inset-x-0 top-0 h-[85%] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-white flex flex-col cursor-pointer origin-top"
                      onClick={() => {
                        if (!isTop) {
                          setDirection(index > activeIndex ? 1 : -1);
                          setActiveIndex(index);
                        }
                      }}
                    >
                      {/* Image Frame */}
                      <div className="relative flex-1 w-full bg-slate-100 overflow-hidden group">
                        <img
                          src={imageMap[work.image] || work.image}
                          alt={work.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {/* Shimmer / Shadow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                        
                        {/* Title badge floating inside card */}
                        <div className="absolute bottom-4 left-4 right-4 text-left">
                          <span className="bg-brand-green text-white font-mono text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-md">
                            {work.category}
                          </span>
                          <h4 className="text-white font-display font-bold text-base md:text-lg mt-1 truncate">
                            {work.title}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation dots sitting flush beneath the images on all screen sizes */}
              <div className="flex justify-center space-x-2.5 pb-2">
                {ACHIEVEMENTS.map((work, idx) => (
                  <button
                    key={work.id}
                    onClick={() => handleDotClick(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIndex
                        ? "bg-brand-purple w-7 shadow-sm shadow-purple-200"
                        : "bg-purple-200 hover:bg-brand-purple/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
