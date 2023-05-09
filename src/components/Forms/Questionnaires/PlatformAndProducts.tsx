import { FormikProps } from "formik";
import { PlatProdFormStep1 } from "../Questions/PlatformAndProducts";
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
];
