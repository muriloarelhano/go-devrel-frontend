import { FormikProps } from "formik";
import { Questions } from "../Questions";
import { DevFlowStep1 } from "./Questions/DevFlow";

export const DevFlowFormSteps = (formik: FormikProps<any>) => [
  {
    label: "Objetivo",
    description: "Objetivo de plataforma e produtos",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={DevFlowStep1}
        responsesGroup={"goals"}
      />
    ),
  },
];
