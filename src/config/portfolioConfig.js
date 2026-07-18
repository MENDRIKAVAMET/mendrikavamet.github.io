/**
 * Portfolio Configuration File
 * Modifiez les valeurs ici pour personnaliser votre portfolio
 */

export const portfolioConfig = {
  // ===========================
  // Informations Personnelles
  // ===========================
  personal: {
    name: 'Votre Nom',
    title: 'Creative Full-Stack Developer',
    description: 'Building immersive digital experiences with React & Three.js',
    email: 'votre.email@example.com',
    phone: '+33 (0)X XX XX XX XX',
  },

  // ===========================
  // Couleurs Theme
  // ===========================
  theme: {
    primary: '#8899ff',      // Bleu principal
    secondary: '#ff6b9d',    // Rose
    accent: '#00d4ff',       // Cyan
    background: '#0a0f28',   // Dark blue
  },

  // ===========================
  // Configuration 3D
  // ===========================
  scene3D: {
    particleCount: 1500,           // Nombre de particules
    particleSize: 0.15,            // Taille des particules
    cameraFov: 60,                 // Champ de vision
    cameraPosition: [0, 0, 15],    // Position initiale
    mouseInfluence: 2,             // Force d'attraction souris
    scrollSensitivity: 0.0002,     // Sensibilité au scroll
    rotationSensitivity: 0.0003,   // Sensibilité à la rotation souris
  },

  // ===========================
  // Sections
  // ===========================
  sections: {
    hero: {
      title: 'Creative Developer',
      subtitle: 'Building immersive digital experiences with React & Three.js',
      buttons: [
        { label: 'View My Work', type: 'primary', action: 'projects' },
        { label: 'Get In Touch', type: 'secondary', action: 'contact' },
      ],
    },

    about: {
      title: 'About Me',
      cards: [
        {
          title: 'Frontend Specialist',
          description:
            'Expert in React, Three.js, and modern web technologies. Passionate about creating interactive and performant experiences.',
        },
        {
          title: 'Full-Stack Developer',
          description:
            'Building complete solutions from concept to deployment. Strong in both frontend creativity and backend logic.',
        },
        {
          title: 'Creative Technologist',
          description:
            'Blending art and code to push the boundaries of what\'s possible on the web. Always exploring new technologies.',
        },
      ],
    },

    projects: {
      title: 'Featured Projects',
      items: [
        {
          id: 1,
          title: 'Project Title 1',
          description: 'A showcase of innovative web technologies and creative design.',
          tags: ['React', 'Three.js', 'WebGL'],
          image: '/project1.jpg', // À remplacer par votre image
          link: '#',
        },
        {
          id: 2,
          title: 'Project Title 2',
          description: 'An immersive experience built with cutting-edge technologies.',
          tags: ['React', 'Node.js', 'PostgreSQL'],
          image: '/project2.jpg',
          link: '#',
        },
        {
          id: 3,
          title: 'Project Title 3',
          description: 'Full-stack application with 3D visualization.',
          tags: ['React', 'Three.js', 'Express'],
          image: '/project3.jpg',
          link: '#',
        },
      ],
    },

    contact: {
      title: 'Get In Touch',
      subtitle:
        'I\'m always interested in hearing about new projects and opportunities.',
      formFields: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Your Name',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Your Email',
          required: true,
        },
        {
          name: 'message',
          type: 'textarea',
          placeholder: 'Your Message',
          rows: 5,
          required: true,
        },
      ],
    },
  },

  // ===========================
  // Navigation Menu
  // ===========================
  navigation: [
    { label: 'Hero', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ],

  // ===========================
  // Socials & Links
  // ===========================
  socials: [
    { label: 'GitHub', url: 'https://github.com/yourprofile', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: 'linkedin' },
    { label: 'Twitter', url: 'https://twitter.com/yourprofile', icon: 'twitter' },
    { label: 'Email', url: 'mailto:mendrikavamet@gmail.com', icon: 'mail' },
  ],

  // ===========================
  // Footer
  // ===========================
  footer: {
    copyright: '© 2025 Your Name. All rights reserved.',
    links: [
      { label: 'Privacy', url: '/privacy' },
      { label: 'Terms', url: '/terms' },
    ],
  },

  // ===========================
  // Animations
  // ===========================
  animations: {
    navbarInitial: { opacity: 0, y: -20 },
    navbarAnimate: { opacity: 1, y: 0 },
    navbarTransition: { duration: 0.6 },

    buttonHover: { scale: 1.05 },
    buttonTap: { scale: 0.95 },

    cardHover: { y: -8 },
    cardTransition: { duration: 0.3 },

    scrollIndicator: {
      animate: { y: [0, 10, 0] },
      transition: { duration: 2, repeat: Infinity },
    },
  },

  // ===========================
  // Performance Settings
  // ===========================
  performance: {
    enableParticles: true,
    enableMouseInteraction: true,
    enableScrollReaction: true,
    particleOptimization: 'high', // 'low', 'medium', 'high'
    dpr: [1, 1.5], // Device pixel ratio range
  },

  // ===========================
  // SEO & Meta
  // ===========================
  seo: {
    title: 'Creative Developer | Full-Stack Portfolio',
    description: 'Immersive 3D portfolio of a creative full-stack developer showcasing innovative web experiences.',
    keywords: ['developer', 'portfolio', '3D', 'React', 'Three.js', 'full-stack'],
    image: '/og-image.jpg',
  },
};

// Helper function pour obtenir une valeur de config
export const getConfig = (path) => {
  return path.split('.').reduce((obj, key) => obj?.[key], portfolioConfig);
};

// Export types pour TypeScript (optionnel)
export type PortfolioConfig = typeof portfolioConfig;
