import { FC, memo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

type Props = {
  rotation: [number, number, number];
};

export const Stage: FC<Props> = memo((props) => {
  const { rotation } = props;

  const stageRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!stageRef.current) return;

    stageRef.current.rotation.x += rotation[0];
    stageRef.current.rotation.y += rotation[1];
    stageRef.current.rotation.z += rotation[2];
  });

  return (
    <mesh ref={stageRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='skyblue' />
    </mesh>
  );
});
