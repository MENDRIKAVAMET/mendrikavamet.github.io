import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Preload } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import ParticleField from './ParticleField';
import * as THREE from 'three';

/**
 * Scene3D - Composant Canvas 3D principal
 * Gère la caméra adaptive, les lumières et orchestre la scène
 */
function SceneContent() {
  const cameraRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cameraTarget, setCameraTarget] = useState(null);
  const targetPositionRef = useRef([0, 0, 15]);

  // Mise à jour de la position de la caméra basée sur le scroll
  useFrame(({ camera }) => {
    if (cameraRef.current) {
      // Animer vers la position cible si elle existe
      if (cameraTarget) {
        camera.position.x += (targetPositionRef.current[0] - camera.position.x) * 0.1;
        camera.position.y += (targetPositionRef.current[1] - camera.position.y) * 0.1;
        camera.position.z += (targetPositionRef.current[2] - camera.position.z) * 0.1;
      } else {
        // Mouvement vertical subtil basé sur le scroll
        camera.position.y += (scrollY * 0.0002 - camera.position.y) * 0.1;
      }
      
      // Rotation légère basée sur la position de la souris
      camera.rotation.x += (mousePosition.y * 0.0005 - camera.rotation.x) * 0.08;
      camera.rotation.z += (mousePosition.x * 0.0003 - camera.rotation.z) * 0.08;
    }
  });

  // Écoute du scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    // Écoute des événements de mouvement de caméra
    const handleCameraMove = (e) => {
      const { target } = e.detail;
      setCameraTarget(target);
      
      // Définir la position cible en fonction de la section
      switch(target) {
        case 'projects':
          targetPositionRef.current = [5, 2, 18];
          break;
        case 'skills':
          targetPositionRef.current = [-5, 5, 20];
          break;
        case 'contact':
          targetPositionRef.current = [0, 10, 15];
          break;
        default:
          targetPositionRef.current = [0, 0, 15];
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('cameraMove', handleCameraMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('cameraMove', handleCameraMove);
    };
  }, []);

  return (
    <>
      {/* Caméra perspective adaptative */}
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0, 15]}
        fov={60}
        near={0.1}
        far={10000}
      />

      {/* Lumière ambiante pour éclairer uniformément la scène */}
      <ambientLight intensity={0.6} color={0x8899ff} />

      {/* Lumière directionnelle pour créer du contraste et des ombres */}
      <directionalLight
        position={[10, 15, 10]}
        intensity={1.2}
        color={0xffffff}
        castShadow
      />

      {/* Lumière de point pour l'ambiance */}
      <pointLight
        position={[-15, 10, -15]}
        intensity={0.8}
        color={0xff6b9d}
        distance={50}
      />

      {/* Champ de particules interactif */}
      <group scale={[3, 3, 3]}>
        <ParticleField mousePosition={mousePosition} scrollY={scrollY} />
      </group>

      {/* Optimisation : pré-chargement des assets */}
      <Preload all />
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: false,
      }}
      dpr={[1, 1.5]}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
      }}
    >
      <SceneContent />
    </Canvas>
  );
}
