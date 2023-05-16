import { FormikProps } from "formik";
import { Questions } from "../Questions";
import {
  DevFlowFormComponents,
  DevFlowFormConsume,
  DevFlowFormGoals,
  DevFlowFormProvide,
} from "./Questions/DevFlow";

export const DevFlowFormSteps = (formik: FormikProps<any>) => [
  {
    label: "Objetivo",
    description: "Objetivo de plataforma e produtos",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={DevFlowFormGoals}
        responsesGroup={"goals"}
      />
    ),
  },

  {
    label: "Componentes",
    description: "Componentes",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={DevFlowFormComponents}
        responsesGroup={"components"}
      />
    ),
  },
  {
    label: "Consome",
    description: "Consome de...",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={DevFlowFormConsume}
        responsesGroup={"components"}
      />
    ),
  },
  {
    label: "Prove",
    description: "Prove para...",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={DevFlowFormProvide}
        responsesGroup={"components"}
      />
    ),
  },
];
