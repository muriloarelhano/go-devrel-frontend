import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import NotifyImage from "../../assets/images/notify.svg";

const NotifyCallToAction = () => {
  return (
    <Flex
      justifyContent="space-between"
      align="center"
      pb="24"
      flexDirection="row"
    >
      <Box flex="0 0 35%" pt={{ base: "20", lg: "0" }}>
        <img src={NotifyImage} alt="" />
      </Box>
      <Flex textAlign="right" flexDir="column" alignItems="end">
        <Box>
          <Heading fontSize="40" py="8" fontWeight="bold">
            Seja notificado e <br></br>continue estudando
          </Heading>
          <Text fontSize="16">
            Seja notificado sempre que houver novidades e atualização<br></br>
            dos modelos, para que você possa continuar sempre<br></br>
            aprimorando seu conhecimento
          </Text>
        </Box>
        <InputGroup maxW="80" py="8">
          <Input borderRadius="6" placeholder="Deixe seu e-mail" />
          <InputRightAddon
            cursor="pointer"
            borderRadius="6"
            children="Cadastrar"
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default NotifyCallToAction;
