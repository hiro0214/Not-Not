import { FC, memo, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useKey } from 'rooks';
import { Stage } from '@/components/Stage';
import { useController } from '@/hooks/useController';
import { useGame } from '@/hooks/useGame';

export const Top: FC = memo(() => {
  const { start } = useGame();
  const { onKeyUp, onKeyLeft, onKeyRight, onKeyDown } = useController();

  useKey(['ArrowUp'], onKeyUp);
  useKey(['ArrowLeft'], onKeyLeft);
  useKey(['ArrowRight'], onKeyRight);
  useKey(['ArrowDown'], onKeyDown);

  useEffect(() => {
    start();
  }, []);

  return (
    <Canvas camera={{ position: [0, 2, 2], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} />
      <pointLight position={[-5, -5, -5]} />
      <Stage />
      <OrbitControls makeDefault />
    </Canvas>
  );
});
