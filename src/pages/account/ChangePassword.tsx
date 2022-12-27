import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { resetPassword } from "../../services/userService";

export interface ResetPasswordValues {
  password: string;
  newPassword: string;
}

export const ChangePassword = () => {
  const toast = useToast();
  const formik = useFormik<ResetPasswordValues>({
    initialValues: {
      password: "",
      newPassword: "",
    },
    onSubmit: async (values: ResetPasswordValues) => {
      try {
        await resetPassword(values);
        toast({
          isClosable: true,
          status: "success",
          title: "Senha alterada com sucesso",
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast({
            isClosable: true,
            status: "error",
            title: "Erro ao alterar a senha",
            description: (error.response?.data as any).description.message,
          });
        }
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack align={"flex-start"} gap={8} maxW={"xs"}>
        <Heading fontSize={"x-large"}>Mudar Senha</Heading>
        <FormControl>
          <FormLabel>Senha Antiga</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Nova Senha</FormLabel>
          <Input
            id="newPassword"
            name="newPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
          />
          <FormErrorMessage>{formik.errors.newPassword}</FormErrorMessage>
        </FormControl>
        <Button type={"submit"} minW={"fit-content"}>
          Alterar Senha
        </Button>
      </VStack>
    </form>
  );
};
