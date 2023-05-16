import { FormikProps } from "formik";
import { Questions } from "../Questions";
import { MonitoringFormGoals } from "./Questions/Monitoring";

export const MonitoringFormSteps = (formik: FormikProps<any>) => [
  {
    label: "Objetivos",
    description: "Objetivo de plataforma e produtos",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={MonitoringFormGoals}
        responsesGroup={"goals"}
      />
    ),
  },
];
