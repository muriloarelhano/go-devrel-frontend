import {
  Button,
  Stack, useColorMode
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { HeaderFormContext } from "../../contexts/HeaderFormContext";
import ModalForm from "../ModalForm/ModalForm";
import { NavBarUserButtons } from "./UserMenu";

const NavBarItems: React.FunctionComponent<{
  menuIsOpen: boolean;
  toggle: any;
}> = ({ menuIsOpen, toggle }) => {
  const { isOpen, onOpen, onClose } = useContext(HeaderFormContext)
  const { colorMode, toggleColorMode } = useColorMode();
  const { authenticated, userInfo } = useContext(AuthContext);

  return (
    <Stack
      display={{ base: menuIsOpen ? "flex" : "none", lg: "flex" }}
      paddingY="15px"
      justify={'flex-end'}
      direction={{ base: "column", md: "row" }}
      flexBasis={{ base: "100%", lg: "50%" }}
      alignItems={{ base: "flex-start", md: "center" }}
      p={menuIsOpen ? "26px 12px" : "0"}
      spacing={{ base: 14, md: 10 }}
      wrap="wrap"
      fontWeight="semibold"
      fontSize={menuIsOpen ? "lg" : ""}
    >
      <Link to="/my-stage">Meu Estágio</Link>

      <Link to="/model" onClick={() => toggle()}>
        Modelo
      </Link>

      <Link to="/wiki">Wiki</Link>

      {authenticated && userInfo ? (
        <>
          <Link to="/forms">Formulários</Link>
        </>
      ) : (
        ""
      )}

      {authenticated && userInfo ? (
        <NavBarUserButtons />
      ) : (
        <Button variant="solid" onClick={onOpen} colorScheme="teal">
          Entrar
        </Button>
      )}

      <ModalForm onClose={onClose} isOpen={isOpen}></ModalForm>

      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </Button>
    </Stack>
  );
};

export default NavBarItems;
