import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * ParticleField - Effet de particules interactif
 * Crée une galaxie de particules qui réagit à la souris et au scroll
 */
export default function ParticleField({ mousePosition, scrollY }) {
  const pointsRef = useRef(null);
  const particleCountRef = useRef(1500);

  // Génération des positions initiales des particules
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCountRef.current * 3);
    const velocities = new Float32Array(particleCountRef.current * 3);

    for (let i = 0; i < particleCountRef.current; i++) {
      // Positions aléatoires dans une sphère
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 20 + Math.random() * 40;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

      // Vélocités aléatoires
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

    return geo;
  }, []);

  // Matériau pour les particules
  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.015,
      color: new THREE.Color(0x8899ff),
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
      fog: false,
    });
  }, []);

  // Animation des particules
  useFrame(() => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array;
    const velocities = pointsRef.current.geometry.attributes.velocity.array;

    // Influence de la souris sur les particules proches
    const mouseInfluence = 2;

    for (let i = 0; i < particleCountRef.current; i++) {
      // Positions actuelles
      let x = positions[i * 3];
      let y = positions[i * 3 + 1];
      let z = positions[i * 3 + 2];

      // Appliquer les vélocités
      x += velocities[i * 3];
      y += velocities[i * 3 + 1];
      z += velocities[i * 3 + 2];

      // Attraction vers le curseur de la souris
      const toMouseX = mousePosition.x * 10 - x;
      const toMouseY = mousePosition.y * 10 - y;
      const distance = Math.sqrt(toMouseX * toMouseX + toMouseY * toMouseY);

      if (distance < 15) {
        velocities[i * 3] += (toMouseX / distance) * mouseInfluence * 0.001;
        velocities[i * 3 + 1] += (toMouseY / distance) * mouseInfluence * 0.001;
      }

      // Appliquer le scroll (mouvement vertical fluide)
      velocities[i * 3 + 1] += (scrollY * 0.00001 - velocities[i * 3 + 1]) * 0.02;

      // Amortissement pour éviter une explosion des vitesses
      velocities[i * 3] *= 0.995;
      velocities[i * 3 + 1] *= 0.995;
      velocities[i * 3 + 2] *= 0.995;

      // Contrainte pour rester dans les limites
      const radius = Math.sqrt(x * x + y * y + z * z);
      if (radius > 60) {
        // Réinitialiser les particules qui s'échappent
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const newRadius = 20 + Math.random() * 20;
        positions[i * 3] = newRadius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = newRadius * Math.cos(phi);
        positions[i * 3 + 2] = newRadius * Math.sin(phi) * Math.sin(theta);
        velocities[i * 3] = (Math.random() - 0.5) * 0.02;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
      }

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} geometry={geometry} material={material} />
  );
}
