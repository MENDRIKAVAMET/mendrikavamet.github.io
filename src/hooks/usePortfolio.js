/**
 * useScroll Hook - Gère les interactions de scroll et souris
 * Optimisé avec useRef et useCallback pour éviter les re-renders inutiles
 */

import { useEffect, useRef, useCallback, useState } from 'react';

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollTimeoutRef = useRef(null);

  // Gestion du scroll avec throttling
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  // Gestion de la position de la souris avec throttling
  const handleMouseMove = useCallback((e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
    });
  }, []);

  useEffect(() => {
    // Scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Mouse listener
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll, handleMouseMove]);

  return { scrollY, mousePosition };
};

/**
 * useActiveSection Hook - Détecte la section active basée sur le scroll
 */
export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const windowCenter = window.innerHeight / 2;

      for (let sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowCenter && rect.bottom >= windowCenter) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};

/**
 * useIntersectionObserver Hook - Détecte quand un élément entre dans la viewport
 */
export const useIntersectionObserver = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isVisible;
};

/**
 * useWindowSize Hook - Récupère et écoute les changements de taille de la fenêtre
 */
export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};

/**
 * useScrollToSection Hook - Scroll fluide vers une section
 */
export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return scrollToSection;
};

/**
 * usePrefersReducedMotion Hook - Détecte si l'utilisateur préfère les animations réduites
 */
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

/**
 * usePerformanceMonitor Hook - Monitore la performance FPS
 * Utile pour déboguer les problèmes de performance
 */
export const usePerformanceMonitor = (callback) => {
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();

    const measurePerformance = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        callback?.(fps);
        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(measurePerformance);
    };

    const rafId = requestAnimationFrame(measurePerformance);
    return () => cancelAnimationFrame(rafId);
  }, [callback]);
};
