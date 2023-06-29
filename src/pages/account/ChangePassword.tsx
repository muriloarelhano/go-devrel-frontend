import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
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
            description: (error.response?.data as any).description.message.map((error: string) => (<Text>{error}</Text>)),

          });
        }
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack align={"flex-start"} gap={8} maxW={"xs"}>
        <Heading fontSize={"x-large"}>Mudar Senha</Heading>
        <FormControl isInvalid={!!formik.errors.password}>
          <FormLabel>Senha Antiga</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!formik.errors.newPassword}>
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
