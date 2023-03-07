import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { EStages } from "../../interfaces/interfaces";

export interface Answer {
  label: string;
  value: number;
  for: EStages;

}

export interface QuestionProps {
  questionId: string
  questionTitle: string;
  answers: Answer[];
}

export const MyStageQuestion: React.FC<QuestionProps & { register: UseFormRegister<any> }> = ({
  answers,
  register,
  questionTitle,
  questionId
}) => {
  return (
    <AccordionItem rounded={"lg"} border={'1px solid gray'}>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {questionTitle}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <FormControl>
          <FormLabel>Escolha uma ou mais respostas:</FormLabel>
          <RadioGroup {...register(questionId)}>
            <VStack align={"start"} justify={"start"}>
              {answers.map((answer) => (
                <Radio value={JSON.stringify(answer)}>{answer.label}</Radio>
              ))}
            </VStack>
          </RadioGroup>
        </FormControl>
      </AccordionPanel>
    </AccordionItem>
  );
};
