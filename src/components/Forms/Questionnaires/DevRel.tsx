import { FormikProps } from "formik";
import {
  EFormIdentifiers,
  StageFormValues
} from "../../../interfaces/interfaces";
import { Questions } from "../Questions";
import { DevRelStep1 } from "../Questions/DeveloperRelations";

export const DevRelInitialValues: Partial<StageFormValues> = {
  formIdentifier: EFormIdentifiers.PLATFORM_AND_PRODUCTS,
  responses: {
    goals: {
      otherInformation: "",
      checked: [],
    },
  },
};

export const DevRelSteps = (formik: FormikProps<any>) => [
  {
    label: "Objetivo",
    description: "Objetivo de plataforma e produtos",
    questionsComponent: (
      <Questions
        formik={formik}
        questions={DevRelStep1}
        responsesGroup={"goals"}
      />
    ),
  },
];
