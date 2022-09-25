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
  formGroup: string;
}

export const Questions: React.FC<QuestionsProps> = ({
  formik,
  questions,
  formGroup,
}) => {
  return (
    <>
      {" "}
      <VStack align={"start"}>
        {questions.map((el) => (
          <Checkbox
            id={formGroup + ".checked"}
            name={formGroup + ".checked"}
            onChange={formik.handleChange}
            value={el.value}
          >
            {el.label}
          </Checkbox>
        ))}
      </VStack>
      <FormControl mt={5}>
        <FormLabel>Outros: </FormLabel>
        <Textarea
          id={formGroup + ".otherInformation"}
          name={formGroup + ".otherInformation"}
          onChange={formik.handleChange}
          value={formik.values[formGroup].otherInformation}
        />
      </FormControl>
    </>
  );
};
