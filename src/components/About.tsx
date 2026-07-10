import React from "react";
import { motion } from "motion/react";
import { VALUES, STRUCTURE, NGO_INFO, TEAM_MEMBERS } from "../data";
import { ShieldCheck, Users, Award, Heart, Sparkles, MapPin, Target, Eye, GitCommit } from "lucide-react";

// Icon mapping dictionary for values
const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldCheck,
  Users,
  Award,
  Heart,
  Sparkles
};

export default function About() {
  return (
    <section id="qui-sommes-nous" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-brand-purple font-mono text-xs font-extrabold tracking-widest uppercase bg-purple-50 px-3 py-1.5 rounded-full"
          >
            Qui sommes-nous
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-black text-gray-900 tracking-tight"
          >
            Engagés pour l'Autonomisation et le Bien-être des Familles
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-brand-green mx-auto rounded-full mt-2"
          />
        </div>

        {/* Mission & Vision Bento Style cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-purple/5 to-purple-50/20 border border-purple-100 p-8 rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/5 rounded-full -mr-10 -mt-10 blur-xl group-hover:bg-brand-purple/10 transition-colors" />
            <div className="w-12 h-12 rounded-2xl bg-brand-purple text-white flex items-center justify-center mb-6 shadow-md shadow-purple-200">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-2xl text-brand-purple mb-4">Notre Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              "{NGO_INFO.mission}"
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Nous intervenons directement auprès des populations en détresse à Goma, en apportant une assistance pratique, médicale, psychologique et spirituelle.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-50/25 to-green-50/5 border border-emerald-100 p-8 rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full -mr-10 -mt-10 blur-xl group-hover:bg-brand-green/10 transition-colors" />
            <div className="w-12 h-12 rounded-2xl bg-brand-green text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-100">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-2xl text-brand-green mb-4">Notre Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              "{NGO_INFO.vision}"
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Bâtir une communauté résiliente, autonome et équitable où chaque femme, chaque enfant et chaque famille jouit d'une vie digne, saine et protégée par la loi.
            </p>
          </motion.div>
        </div>

        {/* Our Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-display font-extrabold text-2xl text-gray-900">Nos Valeurs Fondamentales</h3>
            <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">Ces principes guident chacune de nos actions, de nos interventions de terrain à nos collaborations stratégiques.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {VALUES.map((val, index) => {
              // Dynamically pick mapped icon, fallback to Award
              const Icon = iconMap[val.iconName] || Award;
              return (
                <motion.div
                  key={val.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:bg-white hover:shadow-xl hover:border-purple-100 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-50 text-brand-purple flex items-center justify-center mb-4 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300 shadow-inner">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-gray-900 mb-2 text-sm sm:text-base">
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Structure et Organisation */}
        <div className="mb-20 bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-purple/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 text-left space-y-4">
              <span className="text-brand-green font-mono text-xs font-bold uppercase tracking-wider">AFADEF Structuration</span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 leading-tight">
                Structure & Organisation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                Pour assurer une gouvernance irréprochable et transparente, l'association s'organise autour de quatre organes clés définis statutairement.
              </p>
              <div className="pt-2 border-t border-slate-200">
                <div className="flex items-center space-x-2 text-xs font-semibold text-brand-purple">
                  <MapPin className="w-4 h-4 text-brand-green" />
                  <span>Siège Social : Goma, Nord-Kivu, RDC</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {STRUCTURE.map((org, index) => (
                <motion.div
                  key={org.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-brand-purple/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center font-mono text-xs font-bold">
                        {index + 1}
                      </div>
                      <h4 className="font-display font-extrabold text-sm sm:text-base text-gray-900">
                        {org.name}
                      </h4>
                    </div>
                    <span className="inline-block bg-purple-50 text-brand-purple font-mono font-bold text-[9px] uppercase px-2 py-0.5 rounded-md mb-3">
                      {org.role}
                    </span>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      {org.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Team Members */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-display font-extrabold text-2xl text-gray-900">Notre Équipe Dirigeante</h3>
            <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">Des femmes et des hommes d'action dévoués à la transformation sociale dans la province du Nord-Kivu.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-purple-50 transition-all duration-300 group"
              >
                {/* Avatar Image container */}
                <div className="h-56 bg-purple-50 overflow-hidden relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-[11px] font-medium leading-relaxed italic">
                      "Dévouée à la cause de la famille"
                    </span>
                  </div>
                </div>

                <div className="p-5 text-left space-y-2">
                  <h4 className="font-display font-bold text-gray-900 text-base">
                    {member.name}
                  </h4>
                  <span className="block text-brand-purple text-xs font-bold tracking-wide uppercase font-mono">
                    {member.role}
                  </span>
                  <p className="text-xs text-gray-500 leading-relaxed font-light line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
