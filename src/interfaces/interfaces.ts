export enum EStages {
  AWARENESS = "awareness",
  BEGINNING = "beginning",
  ACTIVATE = "activate",
  RETENTION = "retention",
  RECOGNITION = "recognition",
  REFERENCE = "reference",
}
export enum EFormIdentifiers {
  PLATFORM_AND_PRODUCTS = "platform-and-products",
  DEVELOPER_FLOW = "developer-flow",
  MONITORING = "monitoring",
  DEVELOPER_RELATION = "developer-relation",
}

export enum ExportFormatTypes {
  CSV = "CSV",
  JSON = "JSON",
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

export enum UserRoles {
  User = "user",
  Admin = "admin",
}

export interface UserInfo {
  email: string;
  first_name: string;
  last_name: string;
  role: UserRoles;
  phone?: number;
  birthdate?: string;
  isEmailValidated: boolean;
  exp: number;
  iat: number;
  sub: string;
}
