
import { EStages } from "../../interfaces/interfaces";
import { NoContent } from "../Wiki/NoContent";
import { SidebarItem } from "../Wiki/SidebarItem";
import { AwarenessStage } from "./Stages/Awareness";
import { StartPage } from "./Stages/StartPage";
import { prepareStageForms } from "./utils";

export const FORMS: SidebarItem[] = [
  {
    identifier: "start",
    label: "Inicio",
    pageContentComponent: <StartPage />,
  },
  {
    identifier: EStages.AWARENESS,
    label: "Sensibilização",
    pageContentComponent: <AwarenessStage />,
    children: prepareStageForms(EStages.AWARENESS),
  },
  {
    identifier: "beginning",
    label: "Entrada",
    pageContentComponent: <NoContent />,
    children: prepareStageForms(EStages.BEGINNING),
  },
  {
    identifier: "activate",
    label: "Ativação",
    pageContentComponent: <NoContent />,
    children: prepareStageForms(EStages.ACTIVATE),
  },
  {
    identifier: "retention",
    label: "Retenção",
    pageContentComponent: <NoContent />,
    children: prepareStageForms(EStages.RETENTION),
  },
  {
    identifier: "recognition",
    label: "Conhecimento",
    pageContentComponent: <NoContent />,
    children: prepareStageForms(EStages.RECOGNITION),
  },
  {
    identifier: "reference",
    label: "Referência",
    pageContentComponent: <NoContent />,
    children: prepareStageForms(EStages.REFERENCE),
  },
];
