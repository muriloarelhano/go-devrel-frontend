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
import { useFormik } from "formik";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { UpdateUser } from "../../interfaces/user/UpdateUser";
import { updateUser } from "../../services/userService";

export const MyAccount: React.FC = () => {
  const { userInfo } = useContext(AuthContext);

  const formik = useFormik<UpdateUser>({
    initialValues: {
      first_name: userInfo ? userInfo.first_name : "",
      last_name: userInfo ? userInfo.last_name : "",
      phone: userInfo ? (userInfo.phone ? String(userInfo.phone) : "") : "",
      birthdate: userInfo ? (userInfo.birthdate ? userInfo.birthdate : "") : "",
    },
    onSubmit: (values: UpdateUser) => {
      console.log(values);
      updateUser(values);
    },
  });

  return (
    <VStack maxW={"container.sm"} align={"start"} gap={8}>
      <Heading fontSize={"x-large"}>Dados da conta</Heading>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          gridGap={8}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
        >
          <GridItem>
            <FormControl>
              <FormLabel>Primeiro Nome</FormLabel>
              <Input
                id="first_name"
                name="first_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.first_name}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Ultimo Nome</FormLabel>
              <Input
                id="last_name"
                name="last_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.last_name}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Telefone</FormLabel>
              <Input
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Data de Nascimento</FormLabel>
              <Input
                id="birthdate"
                name="birthdate"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.birthdate}
              />
            </FormControl>
          </GridItem>
        </Grid>
        <Button type="submit" mt={8}>
          Salvar
        </Button>
      </form>
    </VStack>
  );
};
