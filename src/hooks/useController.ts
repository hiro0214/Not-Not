import { useCallback } from 'react';
import { useAtomValue } from 'jotai';
import { questionAtom } from '@/context/question';
import { stageAtom } from '@/context/state';
import { useStage } from '@/hooks/useStage';

export const useController = () => {
  const { up, left, right, down } = useStage();

  const stage = useAtomValue(stageAtom);
  const question = useAtomValue(questionAtom);

  const onKeyUp = useCallback(() => {
    if (stage.isRotating) return;

    down();
  }, [stage, question]);

  const onKeyLeft = useCallback(() => {
    if (stage.isRotating) return;

    right();
  }, [stage, question]);

  const onKeyRight = useCallback(() => {
    if (stage.isRotating) return;

    left();
  }, [stage, question]);

  const onKeyDown = useCallback(() => {
    if (stage.isRotating) return;

    up();
  }, [stage, question]);

  return { onKeyUp, onKeyLeft, onKeyRight, onKeyDown };
};
