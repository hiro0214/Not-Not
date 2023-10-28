import { useCallback, useState } from 'react';

const rotate = Math.PI / 2 / 60;

export const useStage = () => {
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);

  const up = useCallback(() => {
    setRotation([-rotate, 0, 0]);
  }, []);

  const left = useCallback(() => {
    setRotation([0, 0, -rotate]);
  }, []);

  const right = useCallback(() => {
    setRotation([0, 0, rotate]);
  }, []);

  const down = useCallback(() => {
    setRotation([rotate, 0, 0]);
  }, []);

  return { rotation, setRotation, up, left, right, down };
};
