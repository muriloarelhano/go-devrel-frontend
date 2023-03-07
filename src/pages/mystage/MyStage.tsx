import { Accordion, Container } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form/dist/useForm";
import HeaderMenu from "../../components/Header/Header";
import { EStages } from "../../interfaces/interfaces";
import { MyStageQuestion, QuestionProps } from "./MyStageQuestion";

const questions: QuestionProps[] = [
  {
    questionId: 'question1',
    questionTitle: "Perguta 1",
    answers: [
      { label: "Acho que eu to no estágio X", for: EStages.ACTIVATE, value: 1 },
      {

        label: "Acho que eu to no estágio Y",
        for: EStages.BEGINNING,
        value: 1,
      },
      {

        label: "Certeza que eu estou no estágio J",
        for: EStages.REFERENCE,
        value: 2,
      },
    ],
  },
];


export const MyStage: React.FC = () => {

  const { register } = useForm<any>()

  return (
    <Container maxW={"container.xl"}>
      <HeaderMenu />
      <form>
        {questions.map((question) => (
          <Accordion allowMultiple>
            <MyStageQuestion
              answers={question.answers}
              questionTitle={question.questionTitle}
              questionId={question.questionId}
              register={register}
            />
          </Accordion>
        ))}
      </form>
    </Container>
  );
};
