import { Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { isArray } from "lodash";

export function useCustomToastError() {
  const toast = useToast();

  return (error: any) => {
    const title = `Ocorreu um erro com a requisição`;
    toast({
      title,
      status: "error",
      isClosable: true,
      description: axios.isAxiosError(error)
        ? isArray((error.response?.data as any).description.message)
          ? (error.response?.data as any).description.message.map(
            (message: string) => <Text>{message}</Text>
          )
          : (error.response?.data as any).description.message
        : error.description.message,
    });
  };
}
