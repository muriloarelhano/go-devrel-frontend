import { FormikProps } from "formik";
import { Questions } from "../Questions";
import { DevRelStep1 } from "./Questions/DeveloperRelations";

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
