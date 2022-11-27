import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const MyAccount: React.FC = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <VStack maxW={"container.sm"} align={"start"} gap={8}>
      <Heading fontSize={"x-large"}>Dados da conta</Heading>
      <Grid
        gridGap={8}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
      >
        <GridItem>
          <FormControl>
            <FormLabel>Primeiro Nome</FormLabel>
            <Input type="text" value={userInfo ? userInfo.first_name : ""} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel>Ultimo Nome</FormLabel>
            <Input type="text" value={userInfo ? userInfo.last_name : ""} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel>Telefone</FormLabel>
            <Input type="text" value={userInfo ? userInfo.phone : ""} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel>Data de Nascimento</FormLabel>
            <Input type="date" value={userInfo ? userInfo.first_name : ""} />
          </FormControl>
        </GridItem>
      </Grid>
      <Button>Salvar</Button>
    </VStack>
  );
};
