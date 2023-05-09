import { FormikProps } from "formik";
import {
  EFormIdentifiers,
  StageFormValues,
} from "../../../interfaces/interfaces";
import { Questions } from "../Questions";
import { DevFlowStep1 } from "../Questions/DevFlow";

export const DevFlowFormInitialValues: Partial<StageFormValues> = {
  formIdentifier: EFormIdentifiers.PLATFORM_AND_PRODUCTS,
  responses: {
    goals: {
      otherInformation: "",
      checked: [],
    },
  },
};

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