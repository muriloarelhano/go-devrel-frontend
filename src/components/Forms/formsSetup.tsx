import {
  EFormIdentifiers,
  EStages,
  StageFormValues,
} from "../../interfaces/interfaces";
import { Questionnaire } from "./Questionnaire";
import { DevFlowFormSteps } from "./Questionnaires/DevFlow";
import { PlatProdFormSteps } from "./Questionnaires/PlatformAndProducts";

export const FormInitialValues = (
  stage: EFormIdentifiers
): Partial<StageFormValues> => {
  return {
    formIdentifier: stage,
    responses: {
      goals: {
        otherInformation: "",
        checked: [],
      },
      components: {
        otherInformation: "",
        checked: [],
      },
      consume: {
        otherInformation: "",
        checked: [],
      },
      provide: {
        otherInformation: "",
        checked: [],
      },
    },
  };
};

export const prepareStageForms = (stage: EStages) => [
  {
    identifier: EFormIdentifiers.PLATFORM_AND_PRODUCTS,
    label: "Plataforma e Produtos",
    pageContentComponent: (
      <Questionnaire
        title={"Plataforma e Produtos"}
        formStage={stage}
        prepareSteps={PlatProdFormSteps}
        formikInitialValues={FormInitialValues(
          EFormIdentifiers.PLATFORM_AND_PRODUCTS
        )}
      />
    ),
  },
  {
    identifier: EFormIdentifiers.DEVELOPER_RELATION,
    label: "Developer Relations",
    pageContentComponent: (
      <Questionnaire
        title={"Developer Relations"}
        formStage={stage}
        prepareSteps={DevFlowFormSteps}
        formikInitialValues={FormInitialValues(EFormIdentifiers.DEVELOPER_FLOW)}
      />
    ),
  },
  {
    identifier: EFormIdentifiers.MONITORING,
    label: "Monitoramento",
    pageContentComponent: (
      <Questionnaire
        title={"Monitoramento"}
        formStage={stage}
        prepareSteps={PlatProdFormSteps}
        formikInitialValues={FormInitialValues(EFormIdentifiers.MONITORING)}
      />
    ),
  },
  {
    identifier: EFormIdentifiers.DEVELOPER_FLOW,
    label: "Fluxo do Desenvolvedor",
    pageContentComponent: (
      <Questionnaire
        title={"Fluxo do Desenvolvedor"}
        formStage={stage}
        prepareSteps={PlatProdFormSteps}
        formikInitialValues={FormInitialValues(EFormIdentifiers.DEVELOPER_FLOW)}
      />
    ),
  },
];
