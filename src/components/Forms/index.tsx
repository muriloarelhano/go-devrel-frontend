import { EStages } from "../../interfaces/interfaces";
import { SidebarItem } from "../Wiki/SidebarItem";
import { ActivateStage } from "./Stages/Activate";
import { AwarenessStage } from "./Stages/Awareness";
import { BeginningStage } from "./Stages/Beginning";
import { RecognitionStage } from "./Stages/Recognition";
import { ReferenceStage } from "./Stages/Reference";
import { RetentionStage } from "./Stages/Retention";
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
    pageContentComponent: <BeginningStage />,
    children: prepareStageForms(EStages.BEGINNING),
  },
  {
    identifier: "activate",
    label: "Ativação",
    pageContentComponent: <ActivateStage />,
    children: prepareStageForms(EStages.ACTIVATE),
  },
  {
    identifier: "retention",
    label: "Retenção",
    pageContentComponent: <RetentionStage />,
    children: prepareStageForms(EStages.RETENTION),
  },
  {
    identifier: "recognition",
    label: "Conhecimento",
    pageContentComponent: <RecognitionStage />,
    children: prepareStageForms(EStages.RECOGNITION),
  },
  {
    identifier: "reference",
    label: "Referência",
    pageContentComponent: <ReferenceStage />,
    children: prepareStageForms(EStages.REFERENCE),
  },
];
