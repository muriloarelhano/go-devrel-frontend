import { FormikProps } from "formik";
import {
  EFormIdentifiers,
  StageFormValues,
} from "../../../interfaces/interfaces";
import { Questions } from "../Questions";
import { MonitoringFormStep1 } from "../Questions/Monitoring";

export const MonitoringFormInitialValues: Partial<StageFormValues> = {
  formIdentifier: EFormIdentifiers.PLATFORM_AND_PRODUCTS,
  responses: {
    goals: {
      otherInformation: "",
      checked: [],
    },
  },
};

export const MonitoringFormSteps = (formik: FormikProps<any>) => [
  {
    label: "Objetivo",
    description: "Objetivo de plataforma e produtos",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={MonitoringFormStep1}
        responsesGroup={"goals"}
      />
    ),
  },
];
