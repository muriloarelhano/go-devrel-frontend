import { Button, FormControl, FormLabel, HStack, Input, ModalBody, ModalFooter, ModalHeader, Text } from "@chakra-ui/react"

const LoginContent = () => {

  return (
    <>
      <ModalHeader fontSize='28' fontWeight='bold' pb='4'>Go DevRel</ModalHeader>
      <ModalBody pb='6'>
        <FormControl>
          <FormLabel >E-mail</FormLabel>
          <Input type='email' placeholder='Digite seu e-mail' />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Senha</FormLabel>
          <Input type='password' placeholder='Digite sua senha' />
        </FormControl>
      </ModalBody>
      <ModalFooter justifyContent='space-between' flexDir='column' pt='4'>
        <Button width='full' colorScheme='teal'>
          Confirmar
        </Button>
        <HStack width='full' justifyContent='space-between' py='4'>
          <Text color='blue.500' fontWeight='light' fontSize='small' cursor='pointer' >Esqueci minha senha</Text>
          <Text color='gray.500' fontWeight='light' fontSize='small' cursor='pointer'  >Não tenho conta</Text>
        </HStack>
      </ModalFooter>
    </>
  )
}

export default LoginContent