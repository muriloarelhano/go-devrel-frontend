import React, { useState } from "react";
import { FormikProps, useFormik } from "formik";
import { StageFormValues } from "../../interfaces";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { sendFormResponse } from "../../services/formService";
import { Box, Button, Flex, Heading, useToast } from "@chakra-ui/react";

export interface StepComponentItem {
  label: string;
  description: string;
  questionsComponent?: JSX.Element;
}

interface QuestionnaireProps {
  prepareSteps: (formik: FormikProps<any>) => StepComponentItem[];
  formikInitialValues: Partial<StageFormValues>;
  formStage: string;
  title: string;
}
export const Questionnaire: React.FC<QuestionnaireProps> = ({
  formikInitialValues,
  formStage,
  title,
  prepareSteps,
}) => {
  const toast = useToast();
  const [onError, setOnError] = useState(false);

  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const handleSubmitFormClick = () => {
    if (activeStep === steps.length - 1) {
      formik.submitForm();
      nextStep();
    } else {
      nextStep();
    }
  };

  const formik = useFormik({
    initialValues: { stage: formStage, ...formikInitialValues },
    onSubmit: async (values) => {
      sendFormResponse(values, toast, setOnError);
    },
  });

  const steps = prepareSteps(formik);

  return (
    <Flex flexDir="column" width="100%" gap={5}>
      <Heading>{title}</Heading>
      <Flex flexDir="column" width="100%">
        <Steps colorScheme="teal" activeStep={activeStep}>
          {steps.map(
            ({ label, description, questionsComponent }, index: number) => (
              <Step label={label} key={label}>
                <Box
                  p={5}
                  border={"black solid 1px"}
                  borderRadius={"md"}
                  my={10}
                >
                  <Heading fontSize={"xl"} mb={5}>
                    {description}
                  </Heading>
                  {questionsComponent
                    ? questionsComponent
                    : "Nenhum componente foi adicionado aqui!!"}
                </Box>
              </Step>
            )
          )}
        </Steps>
        {activeStep === steps.length ? (
          <Flex px={4} py={4} width="100%" flexDirection="column">
            <Heading fontSize="xl" textAlign="center">
              {onError
                ? "Oops, acho que algo deu errado ;-;"
                : "Muito obrigado pela sua colaboração!!"}
            </Heading>
            <Button mx="auto" mt={6} size="sm" onClick={() => reset()}>
              {onError ? "Tentar novamente" : "Voltar do inicio"}
            </Button>
          </Flex>
        ) : (
          <Flex width="100%" justify="flex-end">
            <Button
              isDisabled={activeStep === 0}
              mr={4}
              onClick={prevStep}
              size="sm"
              variant="ghost"
            >
              Voltar
            </Button>
            <Button size="sm" onClick={handleSubmitFormClick}>
              {activeStep === steps.length - 1 ? "Enviar" : "Próximo"}
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
