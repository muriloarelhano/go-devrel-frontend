import axios from "axios";
import http from "./axios";

export const sendFormResponse = async (formValues: any, toastFunc: any) => {
  try {
    const response = await http.post("/forms", formValues);
    toastFunc({
      title: "Formulário enviado com sucesso",
      status: "success",
      isClosable: true,
    });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      toastFunc({
        title: error.response?.status,
        status: "error",
        isClosable: true,
      });
    } else {
      toastFunc({
        title: "Algo de errado não está certo",
        status: "error",
        isClosable: true,
      });
    }
  }
};
