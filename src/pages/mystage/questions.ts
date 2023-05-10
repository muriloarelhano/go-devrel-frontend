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
    title: "Em que estágio você está?",
    answers: [
      { label: "Ativação", for: EStages.ACTIVATE, value: 1 },
      {
        label: "Entrada",
        for: EStages.BEGINNING,
        value: 1,
      },
      {
        label: "Referência",
        for: EStages.REFERENCE,
        value: 2,
      },
    ],
  },
  {
    title: "Em que estágio você está?",
    answers: [
      { label: "Ativação", for: EStages.ACTIVATE, value: 1 },
      {
        label: "Entrada",
        for: EStages.BEGINNING,
        value: 1,
      },
      {
        label: "Referência",
        for: EStages.REFERENCE,
        value: 2,
      },
    ],
  },
  {
    title: "Em que estágio você está?",
    answers: [
      { label: "Ativação", for: EStages.ACTIVATE, value: 1 },
      {
        label: "Entrada",
        for: EStages.BEGINNING,
        value: 1,
      },
      {
        label: "Referência",
        for: EStages.REFERENCE,
        value: 2,
      },
    ],
  },
];
