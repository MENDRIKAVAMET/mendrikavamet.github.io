import { motion } from 'framer-motion';
import { FolderGit, ExternalLink, Code2 } from 'lucide-react';

/**
 * ProjectsSection - Grille de projets avec cartes interactives
 */
const projects = [
  {
    id: 1,
    title: 'CompostApp',
    description: 'Application d\'optimisation et de suivi de compost pour organisations, groupes ou associations.',
    stack: ['Flutter', 'Dart Frog', 'PostgreSQL'],
    colors: {
      bg: 'from-green-500/20 to-emerald-500/20',
      border: 'border-green-500/30',
      text: 'text-green-300',
      hover: 'hover:border-green-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]'
    },
    links: {
      backend: 'https://github.com/MENDRIKAVAMET/compostApp.git',
      frontend: 'https://github.com/MENDRIKAVAMET/compostApp_Frontend.git'
    }
  },
  {
    id: 2,
    title: 'Gestion Sanitaire JIRAMA',
    description: 'Application de gestion des déclarations et suivi sanitaires pour accélérer les processus administratifs.',
    stack: ['AngularJS', 'NestJS', 'MySQL'],
    colors: {
      bg: 'from-orange-500/20 to-red-500/20',
      border: 'border-orange-500/30',
      text: 'text-orange-300',
      hover: 'hover:border-orange-400/50 hover:shadow-[0_0_30px_rgba(234,88,12,0.2)]'
    },
    links: {
      backend: 'https://github.com/MENDRIKAVAMET/gestionSanitaireJirama.git',
      frontend: 'https://github.com/MENDRIKAVAMET/jiramaSanteFrontend.git'
    }
  },
  {
    id: 3,
    title: 'Gestion Emploi du Temps EMIT',
    description: 'Système intelligent de gestion des enseignants et des salles pour éviter les conflits de planning.',
    stack: ['React', 'ASP.NET', 'SQL Server'],
    colors: {
      bg: 'from-purple-500/20 to-pink-500/20',
      border: 'border-purple-500/30',
      text: 'text-purple-300',
      hover: 'hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]'
    },
    links: {
      backend: 'https://github.com/MENDRIKAVAMET/ASP.NET-SALLE-ET-EMPLOI-DU-TEMPS-EMIT.git',
      frontend: 'https://github.com/lanjamiarantsoa/asp_net_frontend.git'
    }
  }
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8 }}
      className={`
        group relative rounded-2xl overflow-hidden border
        bg-slate-950/25 backdrop-blur-md border-white/10
        p-8 transition-all duration-300 hover:border-purple-500/40
      `}
    >
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header with icon */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">
              {project.title}
            </h3>
            <p className={`text-sm font-semibold ${project.colors.text}`}>
              Projet {project.id}
            </p>
          </div>
          <Code2 className={project.colors.text} size={24} />
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Stack Badges */}
        <div className="flex flex-wrap mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 mx-1 my-1 block sm:inline-block rounded-full bg-transparent border border-white/10 text-slate-300 text-xs font-semibold hover:text-white hover:bg-white/10 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          <a
            href={project.links.backend}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg
              bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40
              text-white font-semibold text-sm transition-all duration-300
              group/link
            `}
          >
            <FolderGit size={16} />
            <span>Backend</span>
            <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
          </a>

          <a
            href={project.links.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg
              bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40
              text-white font-semibold text-sm transition-all duration-300
              group/link
            `}
          >
            <FolderGit size={16} />
            <span>Frontend</span>
            <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-32 px-4 overflow-hidden space-y-24 bg-transparent"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <Code2 size={16} className="text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Portfolio</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Mes <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projets</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez les applications que j'ai développées, combinant design moderne et architecture robuste.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center w-full max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">
            Vous avez un projet en tête?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all"
          >
            Contactez-moi
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
