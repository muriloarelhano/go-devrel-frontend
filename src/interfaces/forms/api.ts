import { ExportFormatTypes } from "../interfaces";

export interface ExportFormByDateDto {
  startDate: string;
  endDate: string;
  format: ExportFormatTypes;
}

export interface GetFormsByDateDto {
  startDate: string;
  endDate: string;
}
