import { Box,  Flex, Heading, HStack, Button, Text, } from '@chakra-ui/react'
import SignUpImage from '../../assets/images/signUp.svg'

const SignUpCallToAction = () => {
  return (
      <Flex justifyItems='space-between' justifyContent='space-between' py='24' flexDirection='row'>
        <Box>
          <Box >
            <Heading fontSize='40' color='black' py='8' fontWeight='bold'>Nos ajude a melhorar<br></br>com o seu feedback </Heading>
          </Box>
          <Box fontSize='16' color='black' > Você pode contribuir com o avanço da pesquisa,<br></br>aperfeiçoamento e refinamento do conceito e ferramenta,<br></br>basta preencher os formulários! </Box>
          <HStack  py='6' >
            <Text fontSize='24' color='black' fontWeight='bold'>Cadastre-se e</Text>
            <Text fontSize='24' color='teal.500' fontWeight='bold'> Contribua</Text>
          </HStack>
          <Button colorScheme='teal'>Cadastrar-se</Button>
        </Box>
        <Box flex='0 0 45%' pt={{ base: '20', lg: '0' }}>
          <img src={SignUpImage} alt='' />
        </Box>
      </Flex>

  )
}

export default SignUpCallToAction