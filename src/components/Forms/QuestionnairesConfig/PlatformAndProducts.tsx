import { FormikProps } from "formik";
import {
  PlatProdFormStep1,
  PlatProdFormStep2,
  PlatProdFormStep3,
} from "../QuestionsConfig/PlatformAndProducts";
import { Questions } from "../Questions";
import {
  EFormIdentifiers,
  StageFormValues,
} from "../../../interfaces/interfaces";

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
    objectsConsume: {
      otherInformation: "",
      checked: [],
    },
    objectsProvide: {
      otherInformation: "",
      checked: [],
    },
  },
};

export const PlatProdFormSteps = (formik: FormikProps<any>) => [
  {
    label: "Objetivo",
    description: "Objetivo de plataformas e produtos",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={PlatProdFormStep1}
        responsesGroup={"goals"}
      />
    ),
  },
  {
    label: "Componentes",
    description: "Componente de plataformas e produtos",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={PlatProdFormStep2}
        responsesGroup={"components"}
      />
    ),
  },
  {
    label: "Consome",
    description: "Objetos de transferência e valor - CONSOME DE",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={PlatProdFormStep3}
        responsesGroup={"objectsConsume"}
      />
    ),
  },
  {
    label: "Provê",
    description: "Objetos de transferência e valor - Provê Para",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={PlatProdFormStep3}
        responsesGroup={"objectsProvide"}
      />
    ),
  },
];
