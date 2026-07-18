import Scene3D from './components/Scene3D';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-transparent select-none">
      {/* Scène 3D figée en fond d'écran total */}
     <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Scene3D />
      </div>

      {/* Barre de navigation */}
      <Navigation />

      {/* Layout principal par-dessus la 3D */}
      <main className="relative z-10 w-full block">
        <HeroSection />
        <AboutSection/>
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />

        {/* Footer épuré */}
        <footer className="w-full border-t border-white/5 bg-slate-950/20 backdrop-blur-sm py-12">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-2">
            <p className="text-gray-400 text-sm font-medium">
              © 2026 Mendrika Vamet | Full-Stack Developer
            </p>
            <p className="text-gray-500 text-xs">
              Créé avec React, Three.js, Tailwind CSS et Framer Motion
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;