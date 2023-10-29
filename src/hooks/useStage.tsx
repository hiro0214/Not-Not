import { useCallback, useState } from 'react';
import { animteDuration } from '@/settings';

const frame = (animteDuration * 60) / 1000;
const rotate = Math.PI / 2 / frame;

export const useStage = () => {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  const up = useCallback(() => {
    setRotation([-rotate, 0, 0]);
  }, []);

  const left = useCallback(() => {
    setRotation([0, rotate, 0]);
  }, []);

  const right = useCallback(() => {
    setRotation([0, -rotate, 0]);
  }, []);

  const down = useCallback(() => {
    setRotation([rotate, 0, 0]);
  }, []);

  return { rotation, setRotation, up, left, right, down };
};
