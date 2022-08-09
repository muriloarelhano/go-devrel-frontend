import InputMask from "react-input-mask";

import { Button, FormControl, FormLabel, Input, ModalBody, ModalFooter } from "@chakra-ui/react"

const SignInContent = () => {

  return (
    <>
      <ModalBody pb='6'>
        <FormControl>
          <FormLabel >Nome</FormLabel>
          <Input type='text' placeholder='Digite seu nome completo' />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel >Telefone</FormLabel>
          <Input as={InputMask} type='tel' mask="(**)*****-****" placeholder='Digite seu telefone' />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel >E-mail</FormLabel>
          <Input type='email' placeholder='Digite seu e-mail' />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Senha</FormLabel>
          <Input type='password' placeholder='Digite sua senha' />
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