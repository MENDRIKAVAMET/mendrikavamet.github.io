import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

/**
 * Navigation - Composant de navigation avec indicateurs de scroll
 * Affiche les sections et réagit au scroll
 */
export default function Navigation() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      // Déterminer la section active
      const sections = ['hero', 'about', 'projects', 'contact'];
      const windowCenter = window.innerHeight / 2;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowCenter && rect.bottom >= windowCenter) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <motion.div
        className="navbar-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="logo">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Valisoa Mendrika
          </motion.h1>
        </div>

        <ul className="nav-menu">
          {['hero', 'about', 'projects', 'contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <motion.div
                    className="active-indicator"
                    layoutId="indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                  />
                )}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-dot" />
        </motion.div>
      </motion.div>
    </nav>
  );
}
