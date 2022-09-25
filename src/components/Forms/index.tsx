import { NoContent } from "../Wiki/NoContent";
import { SidebarItem } from "../Wiki/SidebarItem";
import { DevFlowForm } from "./Questionnaires/DevFlowForm";
import { DevRelForm } from "./Questionnaires/DevrelForm";
import { MonitoringForm } from "./Questionnaires/MonitoringFom";
import { PlatformAndProductsForm } from "./Questionnaires/PlatformAndProducts";
import { AwarenessStage } from "./Stages/Awareness";

export const FORMS: SidebarItem[] = [
  {
    identifier: "start",
    label: "Inicio",
    pageContentComponent: <NoContent />,
  },
  {
    identifier: "awareness",
    label: "Sensibilização",
    pageContentComponent: <AwarenessStage />,
    children: [
      {
        identifier: "platform-products-form",
        label: "Plataforma e Produtos",
        pageContentComponent: <PlatformAndProductsForm />,
      },
      {
        identifier: "devrel-form",
        label: "Developer Relations",
        pageContentComponent: <DevRelForm />,
      },
      {
        identifier: "monitoring-form",
        label: "Monitoramento",
        pageContentComponent: <MonitoringForm />,
      },
      {
        identifier: "devflow-form",
        label: "Fluxo do Desenvolvedor",
        pageContentComponent: <DevFlowForm />,
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
