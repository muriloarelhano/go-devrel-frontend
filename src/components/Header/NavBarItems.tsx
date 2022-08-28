import { Button, Stack, useColorMode, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import ModalForm from "../ModalForm/ModalForm";
import { FaMoon, FaSun } from "react-icons/fa";

const NavBarItems: React.FunctionComponent<{
  menuIsOpen: boolean;
  toggle: any;
}> = ({ menuIsOpen, toggle }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      display={{ base: menuIsOpen ? "flex" : "none", lg: "flex" }}
      paddingY="15px"
      direction={{ base: "column", md: "row" }}
      flexBasis={{ base: "100%", lg: "40%" }}
      alignItems={{ base: "flex-start", md: "center" }}
      p={menuIsOpen ? "26px 12px" : "0"}
      justify="space-between"
      spacing={{ base: 14, md: 0 }}
      wrap="wrap"
      fontWeight="semibold"
      fontSize={menuIsOpen ? "lg" : ""}
    >
      <Link to="/model" onClick={() => toggle()}>
        Modelo
      </Link>

      <Link to="/my-stage">Meu Estágio</Link>

      <Link to="/forms">Formulários</Link>

      <Link to="/wiki">Wiki</Link>

      <Button variant="solid" onClick={onOpen} colorScheme="teal">
        Entrar
      </Button>

      <ModalForm onClose={onClose} isOpen={isOpen}></ModalForm>

      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <FaMoon /> : <FaSun />}
      </Button>
    </Stack>
  );
};

export default NavBarItems;
