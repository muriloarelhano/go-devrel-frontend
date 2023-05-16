import { FormikProps } from "formik";
import { Questions } from "../Questions";
import {
  PlatProdFormComponents,
  PlatProdFormConsume,
  PlatProdFormGoals,
  PlatProdFormProvide,
} from "./Questions/PlatformAndProducts";

export const PlatProdFormSteps = (formik: FormikProps<any>) => [
  {
    label: "Objetivos",
    description: "Objetivos de plataformas e produtos",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={PlatProdFormGoals}
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
        questions={PlatProdFormComponents}
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
        questions={PlatProdFormConsume}
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
        questions={PlatProdFormProvide}
        responsesGroup={"components"}
      />
    ),
  },
];
