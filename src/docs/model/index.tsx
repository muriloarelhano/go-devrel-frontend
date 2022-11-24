import { SidebarItem } from "../../components/Wiki/SidebarItem";
import { ConclusionModelDoc } from "./Conclusion";
import { GrowingPhaseModelDoc } from "./Fases/GrowingPhase";
import { MaturityPhaseModelDoc } from "./Fases/MaturityPhaseModelDoc";
import { PhaseModelDoc } from "./Fases/Phase";
import { StartPhaseModelDoc } from "./Fases/StartPhase";
import { DevFlowDoc } from "./FocusAreas/DevFlow";
import { DevrelDoc } from "./FocusAreas/Devrel";
import { MonitoringModelDoc } from "./FocusAreas/Monitoring";
import { PlatformAndProductsDoc } from "./FocusAreas/PlatformAndProducts";
import { ModelDoc } from "./Model";

export const modelPageItems: SidebarItem[] = [
  {
    identifier: "model",
    label: "Conhecendo o modelo",
    pageContentComponent: <ModelDoc />,
    children: [
      {
        label: "Plataforma e produtos",
        identifier: "plataform-and-products",
        pageContentComponent: <PlatformAndProductsDoc />,
      },
      {
        identifier: "devrel",
        label: "Devrel",
        pageContentComponent: <DevrelDoc />,
      },
      {
        identifier: "devflow",
        label: "Fluxo de desenvolvedores",
        pageContentComponent: <DevFlowDoc />,
      },
      {
        identifier: "monitoring",
        label: "Monitoramento",
        pageContentComponent: <MonitoringModelDoc />,
      },
    ],
  },
  {
    identifier: "phases",
    label: "Fases, estágios e facilitadores",
    pageContentComponent: <PhaseModelDoc />,
  },
  {
    identifier: "start-phase",
    label: "Fase de início",
    pageContentComponent: <StartPhaseModelDoc />,
  },
  {
    identifier: "growing-phase",
    label: "Fase de crescimento",
    pageContentComponent: <GrowingPhaseModelDoc />,
  },
  {
    identifier: "maturity-phase",
    label: "Fase de maturidade",
    pageContentComponent: <MaturityPhaseModelDoc />,
  },
  {
    identifier: "conclusion-phase",
    label: "Conclusão",
    pageContentComponent: <ConclusionModelDoc />,
  },
];
