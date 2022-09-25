import React, { useState } from "react";
import { Button, HStack, FormControl, FormLabel, Input, ModalBody, ModalFooter, FormErrorMessage } from "@chakra-ui/react"
import { CreateUser } from "../../interfaces/createUser";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import InputMask from "react-input-mask";
import {  validatePhone } from 'validations-br'
import * as yup from 'yup';
import { createUser } from "../../services/userService";

const schema = yup.object().shape({
  first_name: yup.string().required('Nome é obrigatório'),
  last_name: yup.string().required('Sobrenome é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório').test('is-phone', 'Telefone inválido', value => validatePhone(value!)),
  email: yup.string().email().required('E-mail é obrigatório'),
  password: yup.string().min(8, 'Mínimo de 8 caracteres').required('Senha é obrigatória'),
});


const SignInContent = () => {
  const [values, setValues] = useState<CreateUser>();

  const {  register,  formState: { errors } } = useForm<CreateUser>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = await createUser(values!);
    
    if(user){
    alert('Usuário cadastrado com sucesso.')
    }
    else {
      alert('Erro ao cadastrar o usuário.');
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

      <ModalBody pb='6'>
        <HStack>
          <FormControl isInvalid={!!errors?.first_name?.message}>
            <FormLabel >Nome</FormLabel>
            <Input   value={values?.first_name}   {...register('first_name')} onChange={handleChange} required fontSize={14} type='text' placeholder='Digite seu nome' />
            <FormErrorMessage>{errors?.first_name?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors?.last_name?.message}>
            <FormLabel >Sobrenome</FormLabel>
            <Input value={values?.last_name} {...register('last_name')}  onChange={handleChange} required fontSize={14} type='text' placeholder='Digite seu sobrenome' />
            <FormErrorMessage>{errors?.last_name?.message}</FormErrorMessage>
          </FormControl>
        </HStack>

        <FormControl mt={4} isInvalid={!!errors?.phone?.message}>
          <FormLabel >Telefone</FormLabel>
          <Input as={InputMask} value={values?.phone} {...register('phone')}  onChange={handleChange} required fontSize={14} type='tel' mask="(**)*****-****" placeholder='Digite seu telefone' />
          <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>

        </FormControl>
        <FormControl mt={4} isInvalid={!!errors?.email?.message}>
          <FormLabel >E-mail</FormLabel >
          <Input value={values?.email} {...register('email')}  onChange={handleChange} required fontSize={14} type='email' placeholder='Digite seu e-mail' />
          <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>

        </FormControl>
        <FormControl mt={4} isInvalid={!!errors?.password?.message}>
          <FormLabel>Senha</FormLabel>
          <Input value={values?.password} {...register('password')}  onChange={handleChange} required fontSize={14} type='password' placeholder='Digite sua senha' />
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