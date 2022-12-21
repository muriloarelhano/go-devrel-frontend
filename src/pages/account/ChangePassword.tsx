import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { resetPassword } from "../../services/userService";

export interface ResetPasswordValues {
  password: string;
  newPassword: string;
}

export const ChangePassword = () => {
  const formik = useFormik<ResetPasswordValues>({
    initialValues: {
      password: "",
      newPassword: "",
    },
    onSubmit: async (values: ResetPasswordValues) => {
      resetPassword(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack align={"flex-start"} gap={8} maxW={"xs"}>
        <Heading fontSize={"x-large"}>Mudar Senha</Heading>
        <FormControl>
          <FormLabel>Nova Senha</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Confirmação de Senha</FormLabel>
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
