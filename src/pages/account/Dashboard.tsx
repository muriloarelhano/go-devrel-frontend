import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { AuthenticationWrapper } from "../../components/AuthenticationWrapper";
import HeaderMenu from "../../components/Header/Header";
import Footer from "../../components/home/Footer";
import { MyAccount } from "./MyAccount";

export const AccountDashboard: React.FC = () => {
  return (
    <AuthenticationWrapper>
      <HeaderMenu />
      <Container maxW={"container.lg"} my={10}>
        <Tabs>
          <TabList>
            <Tab>Minha Conta</Tab>
            <Tab>Senha</Tab>
            <Tab>Exportar Formulários</Tab>
            <Tab>Excluir Conta</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<MyAccount />}</TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer />
    </AuthenticationWrapper>
  );
};
