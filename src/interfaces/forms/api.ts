import { ExportFormatTypes } from "../interfaces";


export interface ExportFormByDateDto{
    startDate: string;
    endDate: string;
    format: ExportFormatTypes;
}