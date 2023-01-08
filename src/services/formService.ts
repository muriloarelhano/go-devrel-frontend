import { UseToastOptions } from "@chakra-ui/react";
import axios from "axios";
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
        title: "Algo de errado não está certo",
        status: "error",
        isClosable: true,
      });
    }
    setOnError(true);
  }
};

export const exportAllForms = async (
  toast: (config: UseToastOptions) => void
) => {
  try {
    await http.get("/forms/export");
    toast({
      title: "Formulário enviado com sucesso",
      status: "success",
      isClosable: true,
    });
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
        title: "Algo de errado não está certo",
        status: "error",
        isClosable: true,
      });
    }
  }
};
