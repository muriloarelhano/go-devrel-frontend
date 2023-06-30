import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AuthContext } from "../../contexts/AuthContext";
import { LoginInterface } from "../../interfaces/login";
import { ResetPasswordForm } from "./ResetPasswordForm";

const schema = yup.object().shape({
  email: yup.string().email().required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

const LoginContent: React.FC<{ onClose: any; goToSignIn: () => void }> = ({
  onClose,
  goToSignIn,
}) => {
  const { handleLogin } = useContext(AuthContext);
  
  const [values, setValues] = useState<LoginInterface>();
  const [loading, setLoading] = useState<boolean>(false);
  const { isOpen, onClose: onCloseResetPass, onOpen } = useDisclosure();

  const onClickResetPassword = () => {
    onOpen();
  };

  const {
    register,
    formState: { errors },
  } = useForm<LoginInterface>({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      await handleLogin(values!);
      setLoading(false);
      setTimeout(() => onClose(), 200);
    } catch (err: any) {
      setLoading(false);
    }
  };

  function handleChange(event: { target: { value: any; name: any } }) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues: any) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    });
  }

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <ModalHeader fontSize="28" fontWeight="bold" pb="4">
          Go DevRel
        </ModalHeader>
        <ModalBody pb="6">
          <FormControl isInvalid={!!errors?.email?.message}>
            <FormLabel>E-mail</FormLabel>
            <Input
              value={values?.email}
              {...register("email")}
              onChange={handleChange}
              required
              type="email"
              placeholder="Digite seu e-mail"
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl mt={4} isInvalid={!!errors?.password?.message}>
            <FormLabel>Senha</FormLabel>
            <Input
              value={values?.password}
              {...register("password")}
              onChange={handleChange}
              required
              type="password"
              placeholder="Digite sua senha"
            />
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>
        </ModalBody>
        <ModalFooter justifyContent="space-between" flexDir="column" pt="4">
          <Button
            isLoading={loading}
            width="full"
            colorScheme="teal"
            type="submit"
          >
            Entrar
          </Button>
          <HStack width="full" justifyContent="space-between" py="4">
            <Text
              color="blue.500"
              fontWeight="light"
              fontSize="small"
              cursor="pointer"
              onClick={onClickResetPassword}
            >
              Esqueci minha senha
            </Text>
            <Text
              color="gray.500"
              fontWeight="light"
              fontSize="small"
              cursor="pointer"
              onClick={goToSignIn}
            >
              Não tenho conta
            </Text>
          </HStack>
        </ModalFooter>
      </form>
      <ResetPasswordForm isOpen={isOpen} onClose={onCloseResetPass} />
    </>
  );
};

export default LoginContent;
