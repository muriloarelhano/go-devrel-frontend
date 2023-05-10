import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { AuthenticationWrapper } from "../../components/AuthenticationWrapper";
import HeaderMenu from "../../components/Header/Header";
import Footer from "../../components/home/Footer";
import { AuthContext } from "../../contexts/AuthContext";
import { UserRoles } from "../../interfaces/interfaces";
import { AdminFormsExport } from "./admin/AdminFormsExport";
import { ChangePassword } from "./ChangePassword";
import { DeleteAccount } from "./DeleteAccount";
import { FormsExporting } from "./FormsExporting";
import { MyAccount } from "./MyAccount";

export const AccountDashboard: React.FC = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <AuthenticationWrapper>
      <HeaderMenu />
      <Container maxW={"container.lg"} my={10}>
        <Tabs>
          <TabList>
            <Tab>Minha Conta</Tab>
            <Tab>Senha</Tab>
            <Tab>Exportar Formulários</Tab>
            {userInfo?.role === UserRoles.Admin && (
              <Tab>
                <MdAdminPanelSettings
                  fontSize={25}
                  style={{ marginRight: 5 }}
                />
                Exportar Formulários
              </Tab>
            )}

            <Tab>Excluir Conta</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<MyAccount />}</TabPanel>
            <TabPanel>{<ChangePassword />}</TabPanel>
            <TabPanel>{<FormsExporting />}</TabPanel>
            {userInfo?.role === UserRoles.Admin && (
              <TabPanel>{<AdminFormsExport />}</TabPanel>
            )}
            <TabPanel>{<DeleteAccount />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer />
    </AuthenticationWrapper>
  );
};
