import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, FolderGit, ExternalLink, Send, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { name: 'GitHub', icon: FolderGit, url: 'https://github.com/MENDRIKAVAMET', color: 'hover:text-gray-300 border-white/10' },
    { name: 'LinkedIn', icon: ExternalLink, url: 'https://www.linkedin.com/in/mendrika-rakotomalala-a68565326', color: 'hover:text-blue-400 border-white/10' },
    { name: 'X (Twitter)', icon: ExternalLink, url: 'https://x.com/valisoam_ndrika', color: 'hover:text-blue-300 border-white/10' },
    { name: 'Email', icon: Mail, url: 'mailto:mendrikavamet@gmail.com', color: 'hover:text-red-400 border-white/10' }
  ];

  return (
    <section id="contact" className="relative py-32 bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-transparent to-red-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6">
            <Mail size={14} className="text-red-400" />
            <span className="text-xs font-medium tracking-wider uppercase text-red-300">Contact</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Parlons de votre <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">Projet</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Vous avez une idée ? Un projet en tête ? Je serais ravi d'en discuter et de trouver la meilleure solution ensemble.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Formulaire stylisé */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/15 bg-slate-950/50 backdrop-blur-md p-6 sm:p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="form-name" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Nom</label>
                <input
                  id="form-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 text-sm"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="form-email" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Email</label>
                <input
                  id="form-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 text-sm"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="form-subject" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Sujet</label>
                <input
                  id="form-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 text-sm"
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label htmlFor="form-message" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Message</label>
                <textarea
                  id="form-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 resize-none text-sm"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="flex items-center"><Send size={16} /></motion.div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Envoyer le message</span>
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                  ✓ Message envoyé avec succès ! Je vous répondrai bientôt.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Cartes d'informations latérales */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <a href="mailto:mendrikavamet@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/50 backdrop-blur-md border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400"><Mail size={20} /></div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="text-white text-sm font-semibold">mendrikavamet@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/50 backdrop-blur-md border border-white/10 transition-all duration-300">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400"><MapPin size={20} /></div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Localisation</p>
                  <p className="text-white text-sm font-semibold">Madagascar</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/50 backdrop-blur-md border border-white/10 transition-all duration-300">
                <div className="p-2.5 rounded-lg bg-green-500/10 text-green-400"><Phone size={20} /></div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Disponibilité</p>
                  <p className="text-white text-sm font-semibold">Réponse sous 24h</p>
                </div>
              </div>
            </div>

            {/* Réseaux Sociaux Réalignés */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Réseaux</h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3.5 rounded-xl bg-slate-950/50 backdrop-blur-md border border-white/10 flex items-center gap-2.5 text-white font-medium hover:bg-white/5 hover:border-white/25 transition-all duration-300 ${social.color}`}
                    >
                      <Icon size={16} className="text-gray-400 group-hover:text-inherit" />
                      <span className="text-xs tracking-wide">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/50 border border-white/10 backdrop-blur-md">
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="font-semibold text-white">Un projet urgent ?</span> N'hésitez pas à me contacter directement. Je suis toujours à l'écoute de nouvelles opportunités et collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}