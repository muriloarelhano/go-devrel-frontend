
import { EFormIdentifiers, EStages } from "../../interfaces/interfaces";
import { Questionnaire } from "./Questionnaire";
import {
  DevFlowFormInitialValues,
  DevFlowFormSteps
} from "./Questionnaires/DevFlow";
import {
  PlatProdFormInitialValues,
  PlatProdFormSteps
} from "./Questionnaires/PlatformAndProducts";

export const prepareStageForms = (stage: EStages) => [
  {
    identifier: EFormIdentifiers.PLATFORM_AND_PRODUCTS,
    label: "Plataforma e Produtos",
    pageContentComponent: (
      <Questionnaire
        title={"Plataforma e Produtos"}
        formStage={stage}
        prepareSteps={PlatProdFormSteps}
        formikInitialValues={PlatProdFormInitialValues}
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
        formikInitialValues={DevFlowFormInitialValues}
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
        formikInitialValues={PlatProdFormInitialValues}
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
        formikInitialValues={PlatProdFormInitialValues}
      />
    ),
  },
];
