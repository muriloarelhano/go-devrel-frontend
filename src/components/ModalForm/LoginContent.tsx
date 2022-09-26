import { Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, ModalBody, ModalFooter, ModalHeader, Text } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { LoginInfo } from "../../interfaces/loginInfo";
import { login } from "../../services/authService";

const schema = yup.object().shape({
  email: yup.string().email().required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
});

const LoginContent = () => {

  const [values, setValues] = useState<LoginInfo>();

  const {  register,  formState: { errors } } = useForm<LoginInfo>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = await login(values!);
    
    if(user){
    alert('Login efetuado com sucesso.')
    }
    else {
      alert('Erro ao efetuar o login.');
    }
    
  }

  function handleChange(event: { target: { value: any; name: any; }; } ) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues: any) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    })
      
  }

  return (
    <form onSubmit={onSubmitForm}>

      <ModalHeader fontSize='28' fontWeight='bold' pb='4'>Go DevRel</ModalHeader>
      <ModalBody pb='6'>
        <FormControl isInvalid={!!errors?.email?.message}>
          <FormLabel >E-mail</FormLabel>
          <Input value={values?.email} {...register('email')}  onChange={handleChange} required  type='email' placeholder='Digite seu e-mail' />
          <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl mt={4}  isInvalid={!!errors?.password?.message}>
          <FormLabel>Senha</FormLabel>
          <Input value={values?.password} {...register('password')}  onChange={handleChange} required type='password' placeholder='Digite sua senha' />
          <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>

        </FormControl>
      </ModalBody>
      <ModalFooter justifyContent='space-between' flexDir='column' pt='4'>
        <Button width='full' colorScheme='teal'  type='submit'>
          Confirmar
        </Button>
        <HStack width='full' justifyContent='space-between' py='4'>
          <Text color='blue.500' fontWeight='light' fontSize='small' cursor='pointer' >Esqueci minha senha</Text>
          <Text color='gray.500' fontWeight='light' fontSize='small' cursor='pointer'  >Não tenho conta</Text>
        </HStack>
      </ModalFooter>
      </form>

  )
}

export default LoginContent