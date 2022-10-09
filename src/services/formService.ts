import axios from "axios";
import http from "./axios";

export const sendFormResponse = async (
  formValues: any,
  toastFunc: any,
  setOnError: any
) => {
  try {
    await http.post("/forms", formValues);
    toastFunc({
      title: "Formulário enviado com sucesso",
      status: "success",
      isClosable: true,
    });
    setOnError(false);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data as any;
      toastFunc({
        title: `${error.response?.status} - ${errorData.description.message}`,
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
    setOnError(true);
  }
};
