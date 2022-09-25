import { Flex, Heading } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { step1, step2, step3 } from "../Questions/PlatformAndProducts";
import { Questions } from "../Questions/Questions";
import { StepComponentItem, StepsComponent } from "../StepsComponent";

export const PlatformAndProductsForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      goals: {
        otherInformation: "",
        checked: [],
      },
      components: {
        otherInformation: "",
        checked: [],
      },
      objects: {
        otherInformation: "",
        checked: [],
      },
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const steps: StepComponentItem[] = [
    {
      label: "Step 1",
      description: "Objetivo De Plataforma E Produtos",
      questionsComponent: (
        <Questions formik={formik} questions={step1} formGroup={"goals"} />
      ),
    },
    {
      label: "Step 2",
      description: "Componente De Plataforma E Produtos",
      questionsComponent: (
        <Questions formik={formik} questions={step2} formGroup={"components"} />
      ),
    },
    {
      label: "Step 3",
      description: "Objetos De Transferência De Valor ",
      questionsComponent: (
        <Questions formik={formik} questions={step3} formGroup={"objects"} />
      ),
    },
  ];

  return (
    <Flex flexDir="column" width="100%" gap={5}>
      <Heading>Plataforma e Produtos</Heading>
      <StepsComponent steps={steps} formik={formik} />
    </Flex>
  );
};
