import { useCallback } from 'react';
import { useSetAtom } from 'jotai';
import { stageAtom } from '@/context/state';
import { animteDuration } from '@/settings';

const frame = (animteDuration * 60) / 1000;
const rotate = Math.PI / 2 / frame;

export const useStage = () => {
  const setStage = useSetAtom(stageAtom);

  const init = useCallback(() => {
    setStage({
      isRotating: false,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0
    });
  }, []);

  const up = useCallback(() => {
    setStage({
      isRotating: true,
      rotationX: -rotate,
      rotationY: 0,
      rotationZ: 0
    });

    setTimeout(() => {
      init();
    }, animteDuration);
  }, []);

  const left = useCallback(() => {
    setStage({
      isRotating: true,
      rotationX: 0,
      rotationY: rotate,
      rotationZ: 0
    });

    setTimeout(() => {
      init();
    }, animteDuration);
  }, []);

  const right = useCallback(() => {
    setStage({
      isRotating: true,
      rotationX: 0,
      rotationY: -rotate,
      rotationZ: 0
    });

    setTimeout(() => {
      init();
    }, animteDuration);
  }, []);

  const down = useCallback(() => {
    setStage({
      isRotating: true,
      rotationX: rotate,
      rotationY: 0,
      rotationZ: 0
    });

    setTimeout(() => {
      init();
    }, animteDuration);
  }, []);

  return { up, left, right, down };
};
