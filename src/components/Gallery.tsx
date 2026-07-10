import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../data";
import { X, ZoomIn, Eye, Grid } from "lucide-react";

// Asset paths
const schoolGoma = "/src/assets/images/school_goma_1783663363905.jpg";
const healthSupport = "/src/assets/images/health_support_1783663376759.jpg";
const heroAfadef = "/src/assets/images/hero_afadef_1783663350503.jpg";

const galleryImageMap: Record<string, string> = {
  school_goma: schoolGoma,
  health_support: healthSupport,
  hero_afadef: heroAfadef
};

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>("Tous");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = useState<string>("");

  const filters = ["Tous", "Santé", "Éducation", "Infrastructures", "Protection", "Social"];

  const filteredItems = selectedFilter === "Tous"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedFilter);

  return (
    <section id="galerie" className="py-20 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-brand-green font-mono text-xs font-extrabold tracking-widest uppercase bg-emerald-50 px-3 py-1.5 rounded-full"
          >
            Galerie Photos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-black text-gray-900 tracking-tight"
          >
            Aperçu de nos Activités en Images
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-brand-purple mx-auto rounded-full mt-2"
          />
          <p className="text-gray-500 text-sm max-w-md mx-auto pt-2">
            Des clichés authentiques pris lors de nos interventions, réunions communautaires et chantiers de réhabilitation dans le Nord-Kivu.
          </p>
        </div>

        {/* Filter Navigation Chips */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={`px-4.5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                selectedFilter === filter
                  ? "bg-brand-purple text-white shadow-md shadow-purple-100 scale-102"
                  : "bg-white text-gray-600 hover:text-brand-purple border border-slate-150 hover:border-purple-200"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Dynamic Bento Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const imageSrc = galleryImageMap[item.image] || item.image;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl group cursor-pointer relative"
                  onClick={() => {
                    setSelectedImage(imageSrc);
                    setSelectedCaption(item.caption || item.title);
                  }}
                >
                  {/* Photo Container */}
                  <div className="h-64 sm:h-72 overflow-hidden relative">
                    <img
                      src={imageSrc}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Zoom Overlays */}
                    <div className="absolute inset-0 bg-brand-purple/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 p-3.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="w-5.5 h-5.5 text-brand-purple" />
                      </div>
                    </div>

                    {/* Floating category tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-md text-brand-purple font-mono text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Caption & Title */}
                  <div className="p-5 text-left space-y-1">
                    <h4 className="font-display font-extrabold text-gray-900 text-sm sm:text-base group-hover:text-brand-purple transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-light line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state fallback */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center bg-white rounded-3xl border border-dashed border-slate-200">
            <Grid className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <span className="block font-bold text-slate-700 text-sm">Aucune photo dans cette catégorie</span>
            <p className="text-xs text-slate-400 mt-1">Revenez bientôt pour de nouveaux clichés de terrain.</p>
          </div>
        )}

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white hover:text-red-400 bg-white/10 p-2.5 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="max-w-4xl max-h-[80vh] w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Full view"
                  className="mx-auto max-h-[75vh] w-auto object-contain rounded-xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
                
                {/* Caption Bar underneath */}
                <div className="mt-4 text-center">
                  <p className="text-white text-sm sm:text-base font-light italic tracking-wide max-w-xl mx-auto">
                    {selectedCaption}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
