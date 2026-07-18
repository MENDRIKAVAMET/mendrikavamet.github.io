/**
 * Exemples Avancés - Cas d'usage pour étendre le portfolio
 * Ce fichier montre comment implémenter des fonctionnalités supplémentaires
 */

// ==========================================
// 1. Component avec Intersection Observer
// ==========================================

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from './hooks/usePortfolio';

/**
 * Exemple : Section qui s'anime à l'entrée dans la viewport
 */
export function AnimatedSectionExample() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Cette section s'anime à l'entrée</h2>
      <p>L'animation se déclenche uniquement quand vous la voyez!</p>
    </motion.section>
  );
}

// ==========================================
// 2. Galerie avec Parallax Effect
// ==========================================

/**
 * Exemple : Galerie avec effet parallax au scroll
 */
export function ParallaxGalleryExample() {
  const { scrollY } = useScroll();

  return (
    <div className="parallax-gallery">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          style={{
            y: scrollY * (0.5 - i * 0.1),  // Effet parallax
          }}
          className="parallax-item"
        >
          <img src={`/gallery-${i}.jpg`} alt={`Gallery ${i}`} />
        </motion.div>
      ))}
    </div>
  );
}

// ==========================================
// 3. Formulaire de Contact avec Validation
// ==========================================

/**
 * Exemple : Formulaire de contact complet avec validation
 */
export function ContactFormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Remplacer par votre endpoint API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Votre message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="5"
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Envoi...' : 'Envoyer'}
      </button>
      {submitted && <p className="success">Message envoyé avec succès!</p>}
    </form>
  );
}

// ==========================================
// 4. Compteur de Statistiques avec Animation
// ==========================================

/**
 * Exemple : Compteur qui compte jusqu'à une valeur
 */
export function CounterExample({ endValue = 50, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = endValue / (duration * 60); // 60 FPS
    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [isVisible, endValue, duration]);

  return (
    <motion.div ref={ref} className="counter-box">
      <h3>{count}+</h3>
      <p>Projets complétés</p>
    </motion.div>
  );
}

// ==========================================
// 5. Component Tabs/Carousel Responsif
// ==========================================

/**
 * Exemple : Tabs pour afficher différents contenus
 */
export function TabsExample() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: 'Frontend', content: 'React, Three.js, Tailwind...' },
    { title: 'Backend', content: 'Node.js, Express, MongoDB...' },
    { title: 'DevOps', content: 'Docker, AWS, CI/CD...' },
  ];

  return (
    <div className="tabs-container">
      <div className="tabs-nav">
        {tabs.map((tab, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`tab ${i === activeTab ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.title}
          </motion.button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="tab-content"
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  );
}

// ==========================================
// 6. Tooltip Component
// ==========================================

/**
 * Exemple : Tooltip réutilisable
 */
export function TooltipExample({ text, children }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <motion.div
        className="tooltip"
        initial={{ opacity: 0, y: -10 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.div>
    </div>
  );
}

// ==========================================
// 7. Modal Component
// ==========================================

/**
 * Exemple : Modal avec animation
 */
export function ModalExample({ isOpen, onClose, title, children }) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
      onClick={onClose}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={isOpen ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>×</button>
        </div>
        <div className="modal-body">{children}</div>
      </motion.div>
    </motion.div>
  );
}

// ==========================================
// 8. Filtre de Projets
// ==========================================

/**
 * Exemple : Galerie de projets avec filtre par technologie
 */
export function ProjectFilterExample() {
  const [selectedTech, setSelectedTech] = useState('all');

  const projects = [
    { title: 'Project 1', techs: ['React', 'Three.js'] },
    { title: 'Project 2', techs: ['Node.js', 'MongoDB'] },
    { title: 'Project 3', techs: ['React', 'Node.js'] },
  ];

  const techs = ['all', 'React', 'Three.js', 'Node.js', 'MongoDB'];

  const filtered = projects.filter(
    (p) =>
      selectedTech === 'all' ||
      p.techs.includes(selectedTech)
  );

  return (
    <div>
      <div className="filter-buttons">
        {techs.map((tech) => (
          <motion.button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`filter-btn ${selectedTech === tech ? 'active' : ''}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.button>
        ))}
      </div>

      <motion.div
        className="projects-grid"
        layout
      >
        {filtered.map((project, i) => (
          <motion.div
            key={i}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <div className="tech-tags">
              {project.techs.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ==========================================
// 9. Custom Scene 3D Avancée
// ==========================================

/**
 * Exemple : Scene 3D personnalisée avec géométries
 */
export function Advanced3DSceneExample() {
  const groupRef = useRef(null);
  const { scrollY } = useScroll();

  useFrame(() => {
    if (groupRef.current) {
      // Rotation basée sur le scroll
      groupRef.current.rotation.y = scrollY * 0.001;
      groupRef.current.rotation.x = scrollY * 0.0005;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {/* Ajouter votre géométrie 3D ici */}
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhongMaterial color={0x8899ff} />
        </mesh>
      </group>
    </>
  );
}

// ==========================================
// 10. Performance Debug Panel
// ==========================================

/**
 * Exemple : Panel de debug pour la performance
 */
export function PerformanceDebugPanelExample() {
  const [fps, setFps] = useState(0);
  const [stats, setStats] = useState({
    memory: 0,
    renderTime: 0,
  });

  usePerformanceMonitor((currentFps) => {
    setFps(currentFps);
  });

  return (
    <motion.div
      className="debug-panel"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h4>Performance</h4>
      <p>FPS: {fps}</p>
      <p>Memory: {stats.memory}MB</p>
      <p>Render: {stats.renderTime}ms</p>
    </motion.div>
  );
}

// ==========================================
// Imports manquants
// ==========================================

import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, useIntersectionObserver, usePerformanceMonitor } from './hooks/usePortfolio';

/**
 * Comment utiliser ces exemples :
 *
 * 1. Importer le composant souhaité dans App.jsx :
 *    import { AnimatedSectionExample } from './examples/advanced-examples';
 *
 * 2. L'ajouter dans le JSX :
 *    <AnimatedSectionExample />
 *
 * 3. Adapter le style selon vos besoins avec les classes CSS
 *
 * Chaque exemple est modulaire et peut être copié/modifié
 * pour vos cas d'usage spécifiques.
 */
