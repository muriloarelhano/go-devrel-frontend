import { Flex, Heading, useToast } from "@chakra-ui/react";
import { FormikProps, useFormik } from "formik";
import React from "react";
import { StageFormValues } from "../../interfaces";
import { StepComponentItem, StepsComponent } from "./StepsComponent";

interface QuestionnaireProps {
  formikInitialValues: Partial<StageFormValues>;
  formStage: string;
  title: string;
  steps: (formik: FormikProps<any>) => StepComponentItem[];
}

export const Questionnaire: React.FC<QuestionnaireProps> = ({
  formikInitialValues,
  formStage,
  title,
  steps,
}) => {
  const toast = useToast();

  const formik = useFormik({
    initialValues: { stage: formStage, ...formikInitialValues },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      toast({
        title: "Formulário enviado com sucesso",
        status: "success",
        isClosable: true,
      });
    },
  });

  return (
    <Flex flexDir="column" width="100%" gap={5}>
      <Heading>{title}</Heading>
      <StepsComponent steps={steps(formik)} formik={formik} />
    </Flex>
  );
};
