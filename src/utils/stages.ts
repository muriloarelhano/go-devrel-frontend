import { match } from "ts-pattern";
import { EPhasesIds, EStages } from "../interfaces/interfaces";

export function findPhaseByStage(stage: EStages) {
  return match<EStages>(stage)
    .with(EStages.AWARENESS, EStages.BEGINNING, () => EPhasesIds.START)
    .with(EStages.ACTIVATE, EStages.RETENTION, () => EPhasesIds.GROWING)
    .with(EStages.RECOGNITION, EStages.REFERENCE, () => EPhasesIds.MATURITY)
    .run();
}
