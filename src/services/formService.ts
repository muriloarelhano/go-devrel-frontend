import { UseToastOptions } from "@chakra-ui/react";
import axios from "axios";
import { ExportFormByDateDto, GetFormsByDateDto } from "../interfaces/forms/api";
import http from "./axios";

export const sendFormResponse = async (
  formValues: any,
  toast: (config: UseToastOptions) => void,
  setOnError: (state: any) => void
) => {
  try {
    await http.post("/forms", formValues);
    toast({
      title: "Formulário enviado com sucesso",
      status: "success",
      isClosable: true,
    });
    setOnError(false);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data as any;
      toast({
        title: `${error.response?.status} - ${errorData.description.message}`,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Ocorreu algum problema com sua requisição",
        status: "error",
        isClosable: true,
      });
    }
    setOnError(true);
  }
};

export const exportByDate = async (
  payload: ExportFormByDateDto,
  toast: (config: UseToastOptions) => void
) => {
  try {
    const forms = (await http.get("/forms/export", { params: payload })).data;
    toast({
      title: "Exportação concluída",
      status: "success",
      isClosable: true,
    });
    return forms;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data as any;
      toast({
        status: "error",
        description: errorData.description.message,
        title: `${error.response?.status}`,
        isClosable: true,
      });
    } else {
      toast({
        title: "Ocorreu algum problema com sua requisição",
        status: "error",
        isClosable: true,
      });
    }
  }
};

export const exportAllByDate = async (
  payload: GetFormsByDateDto,
  toast: (config: UseToastOptions) => void
) => {
  try {
    const forms = (await http.get("forms/admin/export", { params: payload })).data;
    toast({
      title: "Busca efetuada com sucesso",
      status: "success",
      isClosable: true,
    });
    return forms;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data as any;
      toast({
        status: "error",
        description: errorData.description.message,
        title: `${error.response?.status}`,
        isClosable: true,
      });
    } else {
      toast({
        title: "Ocorreu algum problema com sua requisição",
        status: "error",
        isClosable: true,
      });
    }
  }
};
