import {
  Checkbox,
  FormControl,
  FormLabel,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FormikProps } from "formik/dist/types";

export interface QuestionItem {
  label: string;
  value: string;
}

export interface QuestionsProps {
  formik: FormikProps<any>;
  questions: QuestionItem[];
  responsesGroup: string;
}

export const Questions: React.FC<QuestionsProps> = ({
  formik,
  questions,
  responsesGroup,
}) => {
  return (
    <>
      <VStack align={"start"}>
        {questions.map((el: any, index: number) => (
          <Checkbox
            key={index}
            value={el.value}
            onChange={formik.handleChange}
            id={"responses." + responsesGroup + ".checked"}
            name={"responses." + responsesGroup + ".checked"}
          >
            {el.label}
          </Checkbox>
        ))}
      </VStack>
      <FormControl mt={5}>
        <FormLabel>Outros: </FormLabel>
        <Textarea
          id={"responses." + responsesGroup + ".otherInformation"}
          name={"responses." + responsesGroup + ".otherInformation"}
          onChange={formik.handleChange}
          value={formik.values.responses[responsesGroup].otherInformation}
        />
      </FormControl>
    </>
  );
};
