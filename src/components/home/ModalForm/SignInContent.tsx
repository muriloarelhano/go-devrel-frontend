import InputMask from "react-input-mask";

import { Button, HStack, FormControl, FormLabel, Input, ModalBody, ModalFooter } from "@chakra-ui/react"

const SignInContent = () => {

  return (
    <>
      <ModalBody pb='6'>
        <HStack>

        <FormControl >
          <FormLabel >Nome</FormLabel>
          <Input fontSize={14} type='text' placeholder='Digite seu nome' />
        </FormControl>
        <FormControl>
          <FormLabel >Sobrenome</FormLabel>
          <Input fontSize={14} type='text' placeholder='Digite seu sobrenome' />
        </FormControl>
        </HStack>
        <FormControl mt={4}>
          <FormLabel >Telefone</FormLabel>
          <Input  as={InputMask} fontSize={14} type='tel' mask="(**)*****-****" placeholder='Digite seu telefone' />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel >E-mail</FormLabel>
          <Input fontSize={14} type='email' placeholder='Digite seu e-mail' />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Senha</FormLabel>
          <Input fontSize={14} type='password' placeholder='Digite sua senha' />
        </FormControl>
      </ModalBody>

      <ModalFooter justifyContent='space-between' flexDir='column' py='4'>

        <Button width='full' colorScheme='teal'>
          Cadastrar
        </Button>


      </ModalFooter>
    </>
  )
}

export default SignInContent