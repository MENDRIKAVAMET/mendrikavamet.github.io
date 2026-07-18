import { motion } from 'framer-motion';
import { User, Terminal, Code, Server } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-24 bg-transparent z-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-4">
            <User size={14} className="text-cyan-400" />
            <span className="text-xs font-medium tracking-wider uppercase text-cyan-300">À propos de moi</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Qui suis-<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">je ?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bloc Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 leading-relaxed text-lg"
          >
            <p>
              Développeur Full-Stack basé à Madagascar, je suis passionné par la conception de solutions digitales robustes et performantes. J'accompagne les projets de l'idée initiale jusqu'au déploiement final en veillant à la qualité de l'architecture logicielle.
            </p>
            <p>
              Ayant une forte affinité pour l'administration système et l'environnement Linux, j'aime comprendre ce qui se passe sous le capot. Cela me permet de créer des applications non seulement belles en surface, mais aussi optimisées et sécurisées côté serveur.
            </p>
            <p>
              Je suis constamment en train d'explorer de nouvelles technologies, de peaufiner mon code et d'apprendre de nouveaux concepts pour concevoir des expériences utilisateur fluides et mémorables.
            </p>
          </motion.div>

          {/* Grille de cartes visuelles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-blue-500/40 transition-all duration-300">
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className="text-white font-bold text-xl mb-2">Frontend</h3>
              <p className="text-gray-400 text-sm">Interfaces modernes, réactives et animations fluides.</p>
            </div>
            
            <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-purple-500/40 transition-all duration-300 translate-y-6">
              <Server className="text-purple-400 mb-4" size={32} />
              <h3 className="text-white font-bold text-xl mb-2">Backend</h3>
              <p className="text-gray-400 text-sm">APIs sécurisées, bases de données et logique métier.</p>
            </div>

            <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-green-500/40 transition-all duration-300">
              <Terminal className="text-green-400 mb-4" size={32} />
              <h3 className="text-white font-bold text-xl mb-2">Système</h3>
              <p className="text-gray-400 text-sm">Environnement Linux, serveurs et automatisation DevOps.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}   