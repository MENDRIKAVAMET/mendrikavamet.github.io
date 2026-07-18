import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';

export default function HeroSection() {
  const handleDiscoverClick = () => {
    window.dispatchEvent(new CustomEvent('cameraMove', { 
      detail: { target: 'projects' } 
    }));
    
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-transparent"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-semibold uppercase tracking-wider text-blue-300"
        >
          <Code2 size={14} />
          <span>Full-Stack Developer</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white"
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Créateur de
          </span>
          <br />
          Solutions Digitales
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Spécialisé dans le développement Full-Stack avec React, Node.js, et technologies modernes.
          Je transforme des idées en applications performantes et scalables.
        </motion.p>

        {/* Tech Stack Preview - Badges Fixés avec padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-xl"
        >
          {['React', 'Node.js', 'PostgreSQL', 'Docker', 'ASP.NET'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:border-blue-400/50 hover:text-blue-300 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDiscoverClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Découvrir mes projets</span>
            <ArrowRight size={18} />
          </motion.button>

          <motion.a
            href="https://github.com/MENDRIKAVAMET"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 text-center"
          >
            Voir mon GitHub
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator Fixe Absolu en bas de l'écran */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Scroll</span>
          <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 bg-blue-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}