import { FC, memo, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Stage } from '@/components/Stage';
import { useController } from '@/hooks/useController';

export const Top: FC = memo(() => {
  const { initController, rotation, isRotating } = useController();

  useEffect(() => {
    initController();
  }, []);

  return (
    <Canvas camera={{ position: [0, 2, 2], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} />
      <pointLight position={[-5, -5, -5]} />
      <Stage rotation={rotation} isRotating={isRotating.current} />
      <OrbitControls makeDefault />
    </Canvas>
  );
});
