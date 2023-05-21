import {
  ExportFormByDateDto,
  GetFormsByDateDto,
} from "../interfaces/forms/api";
import http from "./axios";

export const sendFormResponse = async (formValues: any) => {
  await http.post("/forms", formValues);
};

export const exportByDate = async (payload: ExportFormByDateDto) => {
  return (await http.get("/forms/export", { params: payload })).data;
};

export const exportAllByDate = async (payload: GetFormsByDateDto) => {
  const forms = (await http.get("forms/admin/export", { params: payload }))
    .data;

  return forms;
};
