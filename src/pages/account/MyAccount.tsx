import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { DateTime } from "luxon";
import React, { useContext, useEffect } from "react";
import ReactInputMask from "react-input-mask";
import { AuthContext } from "../../contexts/AuthContext";
import { UpdateUser } from "../../interfaces/user/UpdateUser";
import { updateUser } from "../../services/userService";

function normalizePhone(phone: string) {
  try {
    return phone.replace(/[^0-9]/g, "");
  } catch (e) {
    console.error("error to normalizer phone number");
  }
}

export const MyAccount: React.FC = () => {
  const { userInfo, refresh } = useContext(AuthContext);
  const toast = useToast();

  useEffect(()=>{
    console.log(userInfo)
  }, [userInfo])

  const formik = useFormik<UpdateUser>({
    initialValues: {
      first_name: userInfo ? userInfo.first_name : "",
      last_name: userInfo ? userInfo.last_name : "",
      phone: userInfo ? (userInfo.phone ? String(userInfo.phone) : "") : "",
      birthdate: userInfo
        ? userInfo.birthdate
          ? DateTime.fromISO(userInfo.birthdate).setZone('utc').toISODate()
          : ""
        : "",
    },
    onSubmit: async (values: UpdateUser) => {
      if (values.phone) {
        values.phone = normalizePhone(values.phone);
      }

      try {
        await updateUser(values);
        toast({
          status: "success",
          title: "Dados atualizados com sucesso",
        });
        refresh()
      } catch (error) {
        toast({
          status: "error",
          title: "Ocorreu um erro ao atualizar os dados",
          description: "tente contatar o suporte da plataforma",
        });
      }
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
                as={ReactInputMask}
                mask={"(**)*****-****"}
                id="phone"
                name="phone"
                type="tel"
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
