import { FormikProps } from "formik";
import { Questions } from "../Questions";
import {
  DevRelFormComponents,
  DevRelFormConsume,
  DevRelFormGoals,
  DevRelFormProvide,
} from "./Questions/DeveloperRelations";

export const DevRelSteps = (formik: FormikProps<any>) => [
  {
    label: "Objetivos",
    description: "Objetivos de plataformas e produtos",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={DevRelFormGoals}
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
        questions={DevRelFormComponents}
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
        questions={DevRelFormConsume}
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
        questions={DevRelFormProvide}
        responsesGroup={"components"}
      />
    ),
  },
];
