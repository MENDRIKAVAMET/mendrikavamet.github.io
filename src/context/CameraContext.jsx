import { createContext, useState, useCallback } from 'react';

/**
 * CameraContext - Gère les mouvements de caméra 3D déclenchés par les interactions
 */
export const CameraContext = createContext();

export function CameraProvider({ children }) {
  const [cameraTarget, setCameraTarget] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const moveCameraTo = useCallback((target) => {
    setCameraTarget(target);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  }, []);

  return (
    <CameraContext.Provider value={{ cameraTarget, moveCameraTo, isAnimating }}>
      {children}
    </CameraContext.Provider>
  );
}
