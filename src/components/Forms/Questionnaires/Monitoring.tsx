import { FormikProps } from "formik";
import { Questions } from "../Questions";
import {
  MonitoringFormComponents,
  MonitoringFormConsume,
  MonitoringFormGoals,
  MonitoringFormProvide,
} from "./Questions/Monitoring";

export const MonitoringFormSteps = (formik: FormikProps<any>) => [
  {
    label: "Objetivos",
    description: "Objetivos de plataformas e produtos",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={MonitoringFormGoals}
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
        questions={MonitoringFormComponents}
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
        questions={MonitoringFormConsume}
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
        questions={MonitoringFormProvide}
        responsesGroup={"components"}
      />
    ),
  },
];
