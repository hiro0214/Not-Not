import { useCallback, useRef } from 'react';
import { useStage } from '@/hooks/useStage';
import { animteDuration } from '@/settings';

export const useController = () => {
  const { rotation, setRotation, up, left, right, down } = useStage();
  const isRotating = useRef(false);

  const init = useCallback(() => {
    isRotating.current = false;
    setRotation([0, 0, 0]);
  }, []);

  const onKeyUp = useCallback(() => {
    if (isRotating.current) return;

    isRotating.current = true;
    down();

    setTimeout(() => {
      init();
    }, animteDuration);
  }, [isRotating]);

  const onKeyLeft = useCallback(() => {
    if (isRotating.current) return;

    isRotating.current = true;
    right();

    setTimeout(() => {
      init();
    }, animteDuration);
  }, [isRotating]);

  const onKeyRight = useCallback(() => {
    if (isRotating.current) return;

    isRotating.current = true;
    left();

    setTimeout(() => {
      init();
    }, animteDuration);
  }, [isRotating]);

  const onKeyDown = useCallback(() => {
    if (isRotating.current) return;

    isRotating.current = true;
    up();

    setTimeout(() => {
      init();
    }, animteDuration);
  }, [isRotating]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'ArrowUp') {
        onKeyUp();
      } else if (e.code === 'ArrowLeft') {
        onKeyRight();
      } else if (e.code === 'ArrowRight') {
        onKeyLeft();
      } else if (e.code === 'ArrowDown') {
        onKeyDown();
      }
    },
    [isRotating]
  );

  const initController = useCallback(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return { initController, rotation, isRotating };
};
