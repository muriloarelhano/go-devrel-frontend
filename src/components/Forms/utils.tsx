import { EFormIdentifiers, EStages } from "../../interfaces";
import { Questionnaire } from "./Questionnaire";
import {
  DevFlowFormInitialValues,
  DevFlowFormSteps,
} from "./QuestionnairesConfig/DevFlow";
import {
  PlatProdFormInitialValues,
  PlatProdFormSteps,
} from "./QuestionnairesConfig/PlatformAndProducts";

export const prepareStageForms = (stage: EStages) => [
  {
    identifier: EFormIdentifiers.PLATFORM_AND_PRODUCTS,
    label: "Plataforma e Produtos",
    pageContentComponent: (
      <Questionnaire
        title={"Plataforma e Produtos"}
        formStage={stage}
        steps={PlatProdFormSteps}
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
        steps={DevFlowFormSteps}
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
        steps={PlatProdFormSteps}
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
        steps={PlatProdFormSteps}
        formikInitialValues={PlatProdFormInitialValues}
      />
    ),
  },
];
