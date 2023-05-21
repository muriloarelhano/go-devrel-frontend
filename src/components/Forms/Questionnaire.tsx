import { Button, Flex, Heading, useToast, VStack } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { FormikProps, useFormik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCustomToastError } from "../../hooks/useCustomToastError";
import { StageFormValues } from "../../interfaces/interfaces";
import { sendFormResponse } from "../../services/formService";

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
  const customToast = useCustomToastError();
  const [onError, setOnError] = useState(false);
  const { t } = useTranslation();

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
      try {
        await sendFormResponse(values);
        toast({
          title: "Formulário enviado com sucesso",
          status: "success",
          isClosable: true,
        });
        setOnError(false);
      } catch (error) {
        customToast(error);
        setOnError(true);
      }
    },
  });

  const steps = prepareSteps(formik);

  return (
    <VStack justify={"start"} align={"start"} width="100%" gap={5}>
      <Heading>
        {t("stages." + formStage)} -&gt; {title}
      </Heading>

      <Steps
        colorScheme="teal"
        justifyContent={"start"}
        activeStep={activeStep}
      >
        {steps.map(
          ({ label, description, questionsComponent }, index: number) => (
            <Step label={label} key={label}>
              <VStack
                p={5}
                my={10}
                width={"100%"}
                align={"start"}
                borderRadius={"md"}
                border={"black solid 1px"}
              >
                <Heading fontSize={"xl"} mb={5}>
                  {description}
                </Heading>
                {questionsComponent
                  ? questionsComponent
                  : "Nenhum componente foi adicionado aqui!!"}
              </VStack>
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
    </VStack>
  );
};
