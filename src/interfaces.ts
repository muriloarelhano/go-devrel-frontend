export enum EStages {}
export enum EFormIdentifiers {
  PLATFORM_AND_PRODUCTS = "platform-and-products",
}

export interface FormResponse {
  [key: string]: {
    otherInformation: string;
    checked: string[];
  };
}

export interface StageFormValues {
  stage: EStages;
  formIdentifier: EFormIdentifiers;
  responses: FormResponse;
}
