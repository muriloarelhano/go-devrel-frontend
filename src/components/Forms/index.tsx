import { NoContent } from "../Wiki/NoContent";
import { SidebarItem } from "../Wiki/SidebarItem";
import { Questionnaire } from "./Questionnaire";
import {
  PlatProdFormInitialValues,
  PlatProdFormSteps,
} from "./QuestionnairiesConfig/PlatformAndProducts";
import { AwarenessStage } from "./Stages/Awareness";
import { StartPage } from "./Stages/StartPage";

export const FORMS: SidebarItem[] = [
  {
    identifier: "start",
    label: "Inicio",
    pageContentComponent: <StartPage />,
  },
  {
    identifier: "awareness",
    label: "Sensibilização",
    pageContentComponent: <AwarenessStage />,
    children: [
      {
        identifier: "platform-products-form",
        label: "Plataforma e Produtos",
        pageContentComponent: (
          <Questionnaire
            steps={PlatProdFormSteps}
            formikInitialValues={PlatProdFormInitialValues}
            formStage={"awareness"}
            title={"Plataforma e Produtos"}
          />
        ),
      },
      {
        identifier: "devrel-form",
        label: "Developer Relations",
        pageContentComponent: (
          <Questionnaire
            steps={PlatProdFormSteps}
            formikInitialValues={PlatProdFormInitialValues}
            formStage={"awareness"}
            title={"Developer Relations"}
          />
        ),
      },
      {
        identifier: "monitoring-form",
        label: "Monitoramento",
        pageContentComponent: (
          <Questionnaire
            steps={PlatProdFormSteps}
            formikInitialValues={PlatProdFormInitialValues}
            formStage={"awareness"}
            title={"Monitoramento"}
          />
        ),
      },
      {
        identifier: "devflow-form",
        label: "Fluxo do Desenvolvedor",
        pageContentComponent: (
          <Questionnaire
            steps={PlatProdFormSteps}
            formikInitialValues={PlatProdFormInitialValues}
            formStage={"awareness"}
            title={"Fluxo do Desenvolvedor"}
          />
        ),
      },
    ],
  },
  {
    identifier: "beginning",
    label: "Entrada",
    pageContentComponent: <NoContent />,
  },
  {
    identifier: "activate",
    label: "Ativação",
    pageContentComponent: <NoContent />,
  },
  {
    identifier: "retention",
    label: "Retenção",
    pageContentComponent: <NoContent />,
  },
  {
    identifier: "recognition",
    label: "Conhecimento",
    pageContentComponent: <NoContent />,
  },
  {
    identifier: "reference",
    label: "Referência",
    pageContentComponent: <NoContent />,
  },
];
