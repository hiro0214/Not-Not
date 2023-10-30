import { FC, memo, useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useAtomValue } from 'jotai';
import { Mesh } from 'three';
import { questionAtom } from '@/context/question';
import { stageAtom } from '@/context/state';

type Props = {
  //
};

export const Stage: FC<Props> = memo(() => {
  const stageRef = useRef<Mesh>(null);

  const question = useAtomValue(questionAtom);
  const stage = useAtomValue(stageAtom);

  useEffect(() => {
    if (!stageRef.current || stage.isRotating) return;

    stageRef.current.rotation.x = -1.25;
    stageRef.current.rotation.y = 0;
    stageRef.current.rotation.z = 0;
  }, [stage]);

  useFrame(() => {
    if (!stageRef.current || !stage.isRotating) return;

    if (stage.isRotating) {
      stageRef.current.rotation.x += stage.rotationX;
      stageRef.current.rotation.y += stage.rotationY;
      stageRef.current.rotation.z += stage.rotationZ;
    }
  });

  return (
    <mesh ref={stageRef}>
      <boxGeometry />
      <meshBasicMaterial color='#333' />
      {!stage.isRotating && (
        <Html occlude distanceFactor={2} position={[0, 0, 0.55]} transform>
          <span style={{ color: '#fff' }}>{question.text}</span>
        </Html>
      )}
    </mesh>
  );
});
