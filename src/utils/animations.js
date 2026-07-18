/**
 * Animations & Variants
 * Constantes pour Framer Motion utilisées dans le portfolio
 */

// ==========================================
// Navigation Animations
// ==========================================
export const navbarVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const navLinkVariants = {
  hover: {
    scale: 1.1,
    transition: {
      type: 'spring',
      stiffness: 380,
      damping: 40,
    },
  },
  tap: {
    scale: 0.95,
  },
};

export const indicatorVariants = {
  layoutId: 'indicator',
  transition: {
    type: 'spring',
    stiffness: 380,
    damping: 40,
  },
};

// ==========================================
// Button Animations
// ==========================================
export const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    scale: 0.95,
  },
};

// ==========================================
// Card Animations
// ==========================================
export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  hover: {
    y: -8,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

// ==========================================
// Text Animations
// ==========================================
export const textVariants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
    },
  }),
};

// ==========================================
// Scroll Indicator Animation
// ==========================================
export const scrollIndicatorVariants = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ==========================================
// Page Transition Animations
// ==========================================
export const pageTransitionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// ==========================================
// Stagger Animations (pour listes)
// ==========================================
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// ==========================================
// Easing Functions
// ==========================================
export const easings = {
  easeInOut: [0.42, 0, 0.58, 1],
  easeOut: [0, 0, 0.58, 1],
  easeIn: [0.42, 0, 1, 1],
  circIn: [0.6, 0.04, 0.98, 0.335],
  circOut: [0.075, 0.82, 0.165, 1],
  backOut: [0.175, 0.885, 0.32, 1.275],
};

// ==========================================
// Timing Constants (en ms)
// ==========================================
export const timings = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 1000,
};

// ==========================================
// Breakpoints (pour responsive design)
// ==========================================
export const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
};

// ==========================================
// Utility Functions
// ==========================================

/**
 * Crée une animation de dégradé en fonction de la position du scroll
 */
export const getScrollProgress = (elementRef, viewport = {}) => {
  if (!elementRef?.current) return 0;

  const element = elementRef.current;
  const { top, bottom } = element.getBoundingClientRect();
  const { height: windowHeight } = viewport;

  if (bottom < 0 || top > windowHeight) return 0;

  const progress = (windowHeight - top) / (windowHeight + element.offsetHeight);
  return Math.min(Math.max(progress, 0), 1);
};

/**
 * Smoothly interpolate between two values
 */
export const lerp = (start, end, t) => {
  return start + (end - start) * Math.min(Math.max(t, 0), 1);
};

/**
 * Map a value from one range to another
 */
export const mapRange = (value, min1, max1, min2, max2) => {
  return ((value - min1) / (max1 - min1)) * (max2 - min2) + min2;
};

/**
 * Clamp value between min and max
 */
export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Ease functions
 */
export const easeInOutQuad = (t) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

export const easeOutCubic = (t) => {
  return 1 - Math.pow(1 - t, 3);
};

export const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

// ==========================================
// Three.js Color Utilities
// ==========================================

/**
 * Convert hex color to THREE.Color
 */
export const hexToThreeColor = (hex) => {
  const color = parseInt(hex.replace('#', ''), 16);
  return {
    r: ((color >> 16) & 255) / 255,
    g: ((color >> 8) & 255) / 255,
    b: (color & 255) / 255,
  };
};

/**
 * Create gradient color array
 */
export const createGradientColors = (startColor, endColor, steps = 10) => {
  const colors = [];
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    colors.push({
      r: startColor.r + (endColor.r - startColor.r) * t,
      g: startColor.g + (endColor.g - startColor.g) * t,
      b: startColor.b + (endColor.b - startColor.b) * t,
    });
  }
  return colors;
};
