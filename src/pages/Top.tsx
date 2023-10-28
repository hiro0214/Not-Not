import { FC, memo, useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Stage } from '@/components/Stage';
import { useController } from '@/hooks/useController';

export const Top: FC = memo(() => {
  const { initController, rotation } = useController();

  useEffect(() => {
    initController();
  }, []);

  return (
    <Canvas>
      <ambientLight />
      <PerspectiveCamera makeDefault position={[0, 0, 5]} rotation={[0, 0, 0]} />
      <Stage rotation={rotation} />
    </Canvas>
  );
});
