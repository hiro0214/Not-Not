import { FC, memo, useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

type Props = {
  rotation: [number, number, number];
  isRotating: boolean;
};

export const Stage: FC<Props> = memo((props) => {
  const { rotation, isRotating } = props;

  const stageRef = useRef<Mesh>(null);

  useEffect(() => {
    if (!stageRef.current || isRotating) return;

    stageRef.current.rotation.x = -1.25;
    stageRef.current.rotation.y = 0;
    stageRef.current.rotation.z = 0;
  }, [isRotating]);

  useFrame(() => {
    if (!stageRef.current || !isRotating) return;

    if (isRotating) {
      stageRef.current.rotation.x += rotation[0];
      stageRef.current.rotation.y += rotation[1];
      stageRef.current.rotation.z += rotation[2];
    }
  });

  return (
    <mesh ref={stageRef}>
      <boxGeometry />
      <meshBasicMaterial color='#333' />
      {!isRotating && (
        <Html occlude distanceFactor={2} position={[0, 0, 0.55]} transform>
          <span style={{ color: '#fff' }}>テキスト</span>
        </Html>
      )}
    </mesh>
  );
});
