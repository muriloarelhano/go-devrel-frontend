import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { FormikProps } from "formik/dist/types";

export interface StepComponentItem {
  label: string;
  description: string;
  questionsComponent?: JSX.Element;
}

export interface StepComponentProps {
  steps: StepComponentItem[];
  formik: FormikProps<any>;
}

export const StepsComponent: React.FC<StepComponentProps> = ({
  steps,
  formik,
}) => {
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

  const handleBackToStage = () => {
    reset();
  };

  return (
    <Flex flexDir="column" width="100%">
      <Steps colorScheme="teal" activeStep={activeStep}>
        {steps.map(({ label, description, questionsComponent }, index) => (
          <Step label={label} key={label}>
            <Box p={5} border={"black solid 1px"} borderRadius={"md"} my={10}>
              <Heading fontSize={"xl"} mb={5}>{description}</Heading>
              {questionsComponent
                ? questionsComponent
                : "Nenhum componente foi adicionado aqui!!"}
            </Box>
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex px={4} py={4} width="100%" flexDirection="column">
          <Heading fontSize="xl" textAlign="center">
            Woohoo! All steps completed!
          </Heading>
          <Button mx="auto" mt={6} size="sm" onClick={handleBackToStage}>
            Back to Stage
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
            Prev
          </Button>
          <Button size="sm" onClick={handleSubmitFormClick}>
            {activeStep === steps.length - 1 ? "Enviar" : "Next"}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default StepsComponent;
