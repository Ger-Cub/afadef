import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NGO_INFO } from "../data";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, Globe, ArrowRight, User } from "lucide-react";

interface SubmittedMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  status: "reçu" | "en cours d'examen";
  reply?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Soutien",
    message: ""
  });

  const [messages, setMessages] = useState<SubmittedMessage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activePin, setActivePin] = useState<string>("hq");

  // Load sent messages from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("afadef_sent_messages");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved messages", e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate Network delay
    setTimeout(() => {
      const newMessage: SubmittedMessage = {
        id: "msg-" + Date.now(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleDateString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          day: "numeric",
          month: "short"
        }),
        status: "reçu",
        reply: "Merci pour votre message ! Notre secrétariat basé à Himbi (Goma) a bien reçu votre demande concernant '" + formData.subject + "'. Nous l'analyserons et vous répondrons dans les plus brefs délais."
      };

      const updated = [newMessage, ...messages];
      setMessages(updated);
      localStorage.setItem("afadef_sent_messages", JSON.stringify(updated));

      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Soutien",
        message: ""
      });

      // Clear success notification after 5s
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1200);
  };

  const clearHistory = () => {
    setMessages([]);
    localStorage.removeItem("afadef_sent_messages");
  };

  // Map Landmarks in Goma (Himbi 1)
  const mapLandmarks = [
    {
      id: "hq",
      name: "Siège Social AFADEF",
      desc: "N°125A, Avenue Présidentielle, Himbi 1. Bureaux administratifs et pôle juridique.",
      x: 35, // Percentage-based coordinates for our custom vector map
      y: 45,
      color: "bg-brand-purple"
    },
    {
      id: "school",
      name: "EP Himbi",
      desc: "Infrastructures scolaires réhabilitées par l'AFADEF.",
      x: 65,
      y: 25,
      color: "bg-brand-green"
    },
    {
      id: "clinic",
      name: "Centre d'Écoute & d'Orientation",
      desc: "Prise en charge psychologique des survivantes.",
      x: 20,
      y: 70,
      color: "bg-red-500"
    },
    {
      id: "prison",
      name: "Prison Centrale de Munzenze",
      desc: "Lieu de notre monitoring carcéral régulier (plaidoyers & kits de dignité).",
      x: 80,
      y: 60,
      color: "bg-amber-500"
    }
  ];

  const selectedLandmark = mapLandmarks.find(item => item.id === activePin) || mapLandmarks[0];

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white relative">
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
            Nous Contacter
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-black text-gray-900 tracking-tight"
          >
            Restons en Contact
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-brand-green mx-auto rounded-full mt-2"
          />
          <p className="text-gray-500 text-sm max-w-md mx-auto pt-2">
            Que vous souhaitiez devenir membre, parrainer un projet ou simplement nous poser des questions, nous serons ravis de vous lire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Coordinates & Interactive Vector Map (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display font-black text-xl text-brand-purple">Nos Coordonnées</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center shrink-0 shadow-inner">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Siège Social</span>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                      {NGO_INFO.siege.adresse}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center shrink-0 shadow-inner">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Adresse Email</span>
                    <a href={`mailto:${NGO_INFO.contact.email}`} className="text-xs sm:text-sm text-brand-purple hover:underline font-semibold block">
                      {NGO_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-brand-purple flex items-center justify-center shrink-0 shadow-inner">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Téléphones de Contact</span>
                    <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                      {NGO_INFO.contact.phone} <span className="text-gray-400">/</span> {NGO_INFO.contact.phoneSecondary}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Interactive Vector Map of Goma (Himbi 1) & Kivu Border */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-5 relative overflow-hidden shadow-inner">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-brand-purple" />
                  <span className="text-xs font-black text-brand-purple font-mono uppercase tracking-widest">
                    Carte interactive Goma (Himbi)
                  </span>
                </div>
                <span className="text-[9px] bg-emerald-100 text-brand-green font-bold font-mono uppercase px-2 py-0.5 rounded">
                  Live Vector
                </span>
              </div>

              {/* Graphical Canvas showing Lake Kivu, Presidentielle Avenue, and pins */}
              <div className="relative w-full h-[220px] bg-slate-200 rounded-2xl border border-slate-300 overflow-hidden shadow-inner">
                {/* Lake Kivu representation (Blue water area in bottom left) */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-sky-400 to-sky-300 rounded-t-[100px] border-t-2 border-sky-500 opacity-60" />
                
                {/* Lake label */}
                <span className="absolute bottom-4 left-6 text-[9px] font-bold text-sky-800 uppercase tracking-widest font-mono opacity-80 rotate-[-4deg]">
                  🌊 Lac Kivu
                </span>

                {/* Presidentielle Avenue (Main road drawing) */}
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-slate-700/10 -translate-y-1/2 transform skew-y-[-6deg]" />
                <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t border-dashed border-white/60 -translate-y-1/2 transform skew-y-[-6deg]" />
                <span className="absolute top-[42%] left-[45%] text-[8px] font-black text-slate-800/50 uppercase tracking-widest font-mono rotate-[-6deg]">
                  Avenue Présidentielle
                </span>

                {/* Grid Lines background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

                {/* Landmarks Pins */}
                {mapLandmarks.map((pin) => (
                  <button
                    key={pin.id}
                    onClick={() => setActivePin(pin.id)}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer"
                  >
                    {/* Ring animation */}
                    <span className={`absolute inline-flex h-6 w-6 rounded-full opacity-75 animate-ping -left-1 -top-1 ${
                      activePin === pin.id ? "bg-brand-purple/40" : "bg-slate-400/20"
                    }`} />
                    
                    {/* Pin element */}
                    <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center border border-white text-white shadow-md transition-all ${
                      pin.color
                    } ${
                      activePin === pin.id ? "scale-125 ring-2 ring-white" : "hover:scale-115 opacity-80"
                    }`}>
                      <MapPin className="w-2.5 h-2.5" />
                    </div>

                    {/* Simple Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-900 text-white text-[9px] rounded px-2 py-1 w-32 text-center shadow-lg font-medium leading-tight">
                      {pin.name}
                    </div>
                  </button>
                ))}
              </div>

              {/* Landmark description card on click */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedLandmark.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="mt-3.5 bg-white border border-slate-100 p-3.5 rounded-xl text-left"
                >
                  <div className="flex items-center space-x-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${selectedLandmark.color}`} />
                    <h4 className="font-display font-extrabold text-sm text-gray-900">
                      {selectedLandmark.name}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 font-light leading-relaxed">
                    {selectedLandmark.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Contact form submission panel (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-left relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
              
              <h3 className="font-display font-black text-xl text-brand-purple mb-6">Formulaire de Contact</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider font-mono">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Gérard Cubaka"
                      className="w-full text-xs sm:text-sm px-4 py-3 border border-slate-200/80 rounded-xl bg-white text-gray-800 focus:ring-1 focus:ring-brand-purple outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider font-mono">
                      Adresse Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      className="w-full text-xs sm:text-sm px-4 py-3 border border-slate-200/80 rounded-xl bg-white text-gray-800 focus:ring-1 focus:ring-brand-purple outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider font-mono">
                      Numéro de Téléphone (Optionnel)
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ex: +243 ..."
                      className="w-full text-xs sm:text-sm px-4 py-3 border border-slate-200/80 rounded-xl bg-white text-gray-800 focus:ring-1 focus:ring-brand-purple outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider font-mono">
                      Sujet de votre démarche
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full text-xs sm:text-sm px-4 py-3 border border-slate-200/80 rounded-xl bg-white text-gray-800 focus:ring-1 focus:ring-brand-purple outline-none"
                    >
                      <option value="Soutien">Soutenir / Faire un don</option>
                      <option value="Partenariat">Proposer un Partenariat</option>
                      <option value="Adhésion">Devenir membre d'AFADEF</option>
                      <option value="Information">Demande d'informations</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider font-mono">
                    Votre Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Écrivez votre message ici..."
                    className="w-full text-xs sm:text-sm px-4 py-3 border border-slate-200/80 rounded-xl bg-white text-gray-800 focus:ring-1 focus:ring-brand-purple outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-purple hover:bg-purple-900 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer text-sm tracking-wide uppercase disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start space-x-3 text-emerald-800"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-sm block">Message transmis avec succès !</span>
                      <p className="text-xs text-emerald-700 mt-0.5 leading-relaxed font-light">
                        Votre message a été simulé avec succès et stocké localement. Vous pouvez voir sa réponse automatisée dans la liste ci-dessous.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Local Messages History Panel */}
        {messages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-slate-100 rounded-3xl p-6 sm:p-8 bg-slate-50 text-left"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5.5 h-5.5 text-brand-purple" />
                <div>
                  <h3 className="font-display font-black text-lg text-gray-900">Vos Messages Envoyés (Stockage Local)</h3>
                  <p className="text-xs text-gray-400 mt-0.5 leading-none">Historique complet de vos simulations de contact avec AFADEF</p>
                </div>
              </div>
              <button
                onClick={clearHistory}
                className="text-xs font-semibold text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100/50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                Vider l'historique
              </button>
            </div>

            <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-white border border-slate-150 rounded-2xl p-4 shadow-sm space-y-3 hover:border-purple-200 transition-all"
                >
                  <div className="flex flex-wrap justify-between items-center gap-2 border-b border-slate-100 pb-2">
                    <div className="flex items-center space-x-2 text-xs">
                      <User className="w-3.5 h-3.5 text-gray-400" />
                      <span className="font-bold text-slate-800">{msg.name}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500">{msg.email}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono font-bold">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400">{msg.timestamp}</span>
                      <span className="bg-emerald-100 text-brand-green uppercase px-1.5 py-0.5 rounded">
                        {msg.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wide">
                      SUJET : {msg.subject}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed italic">
                      "{msg.message}"
                    </p>
                  </div>

                  {/* Automated Auto-Reply from AFADEF Secretariat */}
                  {msg.reply && (
                    <div className="bg-purple-50/50 border border-purple-100 p-3.5 rounded-xl flex items-start space-x-2.5">
                      <div className="w-5.5 h-5.5 rounded-full overflow-hidden bg-white border border-purple-200 flex items-center justify-center shrink-0">
                        <img src="/src/assets/images/afadef_logo_1783663335338.jpg" alt="logo" className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold text-brand-purple uppercase tracking-wider font-mono">Secrétariat AFADEF (Goma)</span>
                        <p className="text-xs text-slate-700 leading-relaxed font-light">
                          {msg.reply}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
