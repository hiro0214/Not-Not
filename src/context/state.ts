import { atom } from 'jotai';

type Stage = {
  isRotating: boolean;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
};

export const stageAtom = atom<Stage>({
  isRotating: false,
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0
});
