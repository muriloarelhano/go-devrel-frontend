import InputMask from "react-input-mask";

import { Button, HStack, FormControl, FormLabel, Input, ModalBody, ModalFooter } from "@chakra-ui/react"
import React, { useState } from "react";
import { CreateUser } from "../../../interfaces/createUser";
import http from "../../../services/axios";

const SignInContent = () => {
  const [name, setName] = useState<CreateUser["first_name"]>('');
  const [lastName, setLastName] = useState<CreateUser["last_name"]>('');
  const [phone, setPhone] = useState<CreateUser["phone"]>('');
  const [email, setEmail] = useState<CreateUser["email"]>('');
  const [password, setPassword] = useState<CreateUser["password"]>('');

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('first_name', name);
    formData.append('last_name', lastName);
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
    .catch((e )=> { 
      alert('Erro ao cadastrar o usuário.');
      console.log(e)});
  }


  return (
    <form onSubmit={onSubmitForm}>

      <ModalBody pb='6'>
        <HStack>
          <FormControl >
            <FormLabel >Nome</FormLabel>
            <Input value={name} onChange={(event: any) => setName(event.target.value)} required fontSize={14} type='text' placeholder='Digite seu nome' />
          </FormControl>
          <FormControl>
            <FormLabel >Sobrenome</FormLabel>
            <Input value={lastName} onChange={(event: any) => setLastName(event.target.value)} required fontSize={14} type='text' placeholder='Digite seu sobrenome' />
          </FormControl>
        </HStack>
        <FormControl mt={4}>
          <FormLabel >Telefone</FormLabel>
          <Input as={InputMask} value={phone} onChange={(event: any) => setPhone(event.target.value)} required fontSize={14} type='tel' mask="(**)*****-****" placeholder='Digite seu telefone' />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel >E-mail</FormLabel>
          <Input value={email} onChange={(event: any) => setEmail(event.target.value)} required fontSize={14} type='email' placeholder='Digite seu e-mail' />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Senha</FormLabel>
          <Input value={password} onChange={(event: any) => setPassword(event.target.value)} required fontSize={14} type='password' placeholder='Digite sua senha' />
        </FormControl>
      </ModalBody>

      <ModalFooter justifyContent='space-between' flexDir='column' py='4'>

        <Button width='full' colorScheme='teal' type='submit'>
          Cadastrar
        </Button>


      </ModalFooter>

    </form>
  )
}

export default SignInContent