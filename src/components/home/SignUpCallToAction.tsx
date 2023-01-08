import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import SignUpImage from "../../assets/images/signUp.svg";
import { AuthContext } from "../../contexts/AuthContext";
import { HeaderFormContext } from "../../contexts/HeaderFormContext";

const SignUpCallToAction = () => {
  const { onOpen } = useContext(HeaderFormContext);
  const { authenticated } = useContext(AuthContext);
  return (
    <Flex
      justifyItems="space-between"
      justifyContent="space-between"
      py="24"
      flexDirection="row"
    >
      <Box>
        <Box>
          <Heading fontSize="40" py="8" fontWeight="bold">
            Nos ajude a melhorar<br></br>com o seu feedback{" "}
          </Heading>
        </Box>
        <Box fontSize="16">
          Você pode contribuir com o avanço da pesquisa,<br></br>aperfeiçoamento
          e refinamento do conceito e ferramenta,<br></br>basta preencher os
          formulários!{" "}
        </Box>
        <HStack py="6">
          <Text fontSize="24" fontWeight="bold">
            Cadastre-se e
          </Text>
          <Text fontSize="24" color="teal.500" fontWeight="bold">
            {" "}
            contribua
          </Text>
        </HStack>
        {authenticated ? (
          ""
        ) : (
          <Button colorScheme="teal" onClick={onOpen}>
            <Text fontFamily="Inter">Cadastrar-se</Text>
          </Button>
        )}
      </Box>
      <Box flex="0 0 45%" pt={{ base: "20", lg: "0" }}>
        <img src={SignUpImage} alt="" />
      </Box>
    </Flex>
  );
};

export default SignUpCallToAction;
