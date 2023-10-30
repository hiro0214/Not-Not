import { atom } from 'jotai';

type Question = {
  text: string;
  answer: string[];
};

export const questionAtom = atom<Question>({
  text: '',
  answer: []
});
