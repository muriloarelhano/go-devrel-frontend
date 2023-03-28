import { EStages } from "../../interfaces/interfaces";

export interface Answer {
  label: string;
  value: number;
  for: EStages;
}

export interface MyStageQuestion {
  title: string;
  answers: Answer[];
}

export const questions: MyStageQuestion[] = [
  {
    title: "O que você acha sobre o projeto?",
    answers: [
      { label: "Sim", for: EStages.ACTIVATE, value: 1 },
      {
        label: "Não sei",
        for: EStages.BEGINNING,
        value: 1,
      },
      {
        label: "Claramente que sim",
        for: EStages.REFERENCE,
        value: 2,
      },
    ],
  },
];
