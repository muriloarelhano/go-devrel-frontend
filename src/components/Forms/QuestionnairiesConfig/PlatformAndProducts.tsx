import { FormikProps } from "formik";
import { EFormIdentifiers, StageFormValues } from "../../../interfaces";
import { step1, step2, step3 } from "../QuestionsConfig/PlatformAndProducts";
import { Questions } from "../Questions";

export const PlatProdFormInitialValues: Partial<StageFormValues> = {
  formIdentifier: EFormIdentifiers.PLATFORM_AND_PRODUCTS,
  responses: {
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
};

export const PlatProdFormSteps = (formik: FormikProps<any>) => [
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
