import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// On importe les nouvelles icônes modernes de Lucide React
import { Zap, Layout, Server, Code2, Database, Rocket, Wrench } from 'lucide-react';

const skillsData = [
  {
    category: 'Frontend',
    icon: Layout,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    skills: ['React', 'AngularJS', 'Bootstrap', 'Tailwind', 'Flutter']
  },
  {
    category: 'Backend',
    icon: Server,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    skills: ['Node.js', 'NestJS', 'PHP/Laravel', 'Python', 'Java/Spring Boot', 'ASP.NET', 'Dart']
  },
  {
    category: 'Langages',
    icon: Code2,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    skills: ['JavaScript/ES6+', 'TypeScript', 'Python', 'Java', 'C#', 'PHP', 'Dart']
  },
  {
    category: 'Base de Données',
    icon: Database,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB']
  },
  {
    category: 'DevOps & Infra',
    icon: Rocket,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    skills: ['Docker', 'Git/GitHub', 'Linux (Ubuntu/Kali/Parrot)', 'Render', 'Vercel', 'Netlify', 'Railway']
  },
  {
    category: 'Outils & Autres',
    icon: Wrench,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
    skills: ['REST APIs', 'GraphQL', 'JWT Auth', 'Postman', 'VS Code', 'Git', 'Agile/Scrum']
  }
];

function SkillCategory({ category }) {
  const Icon = category.icon;

  return (
    <div className="group relative w-[300px] sm:w-[360px] shrink-0 rounded-2xl border border-white/15 bg-slate-950/60 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-purple-500/40 shadow-xl flex flex-col justify-between">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Nouvel affichage de l'icône avec un design moderne */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-3 rounded-xl border ${category.bgColor} ${category.borderColor} ${category.color} group-hover:scale-110 transition-transform duration-300`}>
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform">
            {category.category}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-6 pt-4 border-t border-white/10 text-xs font-medium text-gray-500">
        {category.skills.length} compétence{category.skills.length > 1 ? 's' : ''}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const targetRef = useRef(null);
  const totalSkills = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="skills" className="relative h-[500vh] bg-transparent viewport-scan">
      <div className="sticky top-0 left-0 h-[100vh] w-full flex flex-col justify-center overflow-hidden">
        
        <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-4">
                <Zap size={14} className="text-yellow-400" />
                <span className="text-xs font-medium tracking-wider uppercase text-yellow-300">Compétences</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight">
                Mon <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Stack</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
                Maîtrise complète de technologies modernes et diversifiées. Continuez à scroller pour tout explorer.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="px-5 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-center min-w-[110px]">
                <p className="text-xl font-bold text-cyan-400">{totalSkills}+</p>
                <p className="text-[10px] uppercase font-semibold tracking-wider text-gray-500">Skills</p>
              </div>
              <div className="px-5 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-center min-w-[110px]">
                <p className="text-xl font-bold text-purple-400">{skillsData.length}</p>
                <p className="text-[10px] uppercase font-semibold tracking-wider text-gray-500">Catégories</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full px-6 sm:px-[calc((100vw-1152px)/2+32px)]">
          <motion.div style={{ x }} className="flex gap-8">
            {skillsData.map((category, index) => (
              <SkillCategory key={category.category} category={category} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}