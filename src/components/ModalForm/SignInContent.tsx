import React, { useState } from "react";
import { Button, HStack, FormControl, FormLabel, Input, ModalBody, ModalFooter, FormErrorMessage } from "@chakra-ui/react"
import { CreateUser } from "../../interfaces/createUser";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import InputMask from "react-input-mask";
import http from "../../services/axios";
import { validateCNPJ, validatePhone } from 'validations-br'
import * as yup from 'yup';

const schema = yup.object().shape({
  first_name: yup.string().required('Nome é obrigatório'),
  last_name: yup.string().required('Sobrenome é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório').test('is-phone', 'Telefone inválido', value => validatePhone(value!)),
  email: yup.string().email().required('E-mail é obrigatório'),
  password: yup.string().min(8, 'Mínimo de 8 caracteres').required('Senha é obrigatória'),
});


const SignInContent = () => {
  const [first_name, setName] = useState<CreateUser["first_name"]>('');
  const [last_name, setLastName] = useState<CreateUser["last_name"]>('');
  const [phone, setPhone] = useState<CreateUser["phone"]>('');
  const [email, setEmail] = useState<CreateUser["email"]>('');
  const [password, setPassword] = useState<CreateUser["password"]>('');



  const { handleSubmit, register,  formState: { errors } } = useForm<CreateUser>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('password', password);

    http.request({
      url: '/user',
      method: 'POST',
      headers: { 'Content-Type': "multipart/form-data" },
      data: formData
    })
      .then(() => alert('Usuário cadastrado com sucesso.'))
      .catch((e) => {
        alert('Erro ao cadastrar o usuário.');
        console.log(e)
      });
  }

  const onSubmit = (values: CreateUser) => console.log(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <ModalBody pb='6'>
        <HStack>
          <FormControl isInvalid={!!errors?.first_name?.message}>
            <FormLabel >Nome</FormLabel>
            <Input   value={first_name}   {...register('first_name')} onChange={(event: any) => setName(event.target.value)} required fontSize={14} type='text' placeholder='Digite seu nome' />
            <FormErrorMessage>{errors?.first_name?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors?.last_name?.message}>
            <FormLabel >Sobrenome</FormLabel>
            <Input value={last_name} {...register('last_name')}  onChange={(event: any) => setLastName(event.target.value)} required fontSize={14} type='text' placeholder='Digite seu sobrenome' />
            <FormErrorMessage>{errors?.last_name?.message}</FormErrorMessage>
          </FormControl>
        </HStack>

        <FormControl mt={4} isInvalid={!!errors?.phone?.message}>
          <FormLabel >Telefone</FormLabel>
          <Input as={InputMask} value={phone} {...register('phone')}  onChange={(event: any) => setPhone(event.target.value)} required fontSize={14} type='tel' mask="(**)*****-****" placeholder='Digite seu telefone' />
          <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>

        </FormControl>
        <FormControl mt={4} isInvalid={!!errors?.email?.message}>
          <FormLabel >E-mail</FormLabel >
          <Input value={email} {...register('email')}  onChange={(event: any) => setEmail(event.target.value)} required fontSize={14} type='email' placeholder='Digite seu e-mail' />
          <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>

        </FormControl>
        <FormControl mt={4} isInvalid={!!errors?.password?.message}>
          <FormLabel>Senha</FormLabel>
          <Input value={password} {...register('password')}  onChange={(event: any) => setPassword(event.target.value)} required fontSize={14} type='password' placeholder='Digite sua senha' />
          <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
        </FormControl>
      </ModalBody>

      <ModalFooter justifyContent='space-between' flexDir='column' py='4'>

        <Button width='full' colorScheme='teal' type='submit' >
          Cadastrar
        </Button>


      </ModalFooter>

    </form>
  )
}

export default SignInContent