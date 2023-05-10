import { Box, Container, Stack, Text, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";
import NavBarItems from "./NavBarItems";
export interface MenuLinks {
  name?: string;
  link?: string;
  children?: Array<MenuLinks>;
}

export interface MenuOptions {
  links?: Array<MenuLinks>;
}

const HeaderMenu: React.FunctionComponent<MenuOptions> = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const toggle = () =>
    window.innerWidth < 996 ? setMenuIsOpen(!menuIsOpen) : "";
  const resetIsOpen = () =>
    window.innerWidth > 996 ? setMenuIsOpen(false) : "";
  const { colorMode } = useColorMode();

  useEffect(() => {
    window.addEventListener("resize", resetIsOpen);
    return () => window.removeEventListener("resize", resetIsOpen);
  }, []);

  return (
    <Container
      id="header"
      maxW="full"
      zIndex="99"
      transition="all 0.5s"
      paddingBottom={{ base: "2" }}
      shadow={menuIsOpen ? "lg" : "none"}
      position={menuIsOpen ? "absolute" : "relative"}
      borderBottomRadius={menuIsOpen ? "3xl" : "none"}
      bg={menuIsOpen ? (colorMode === "dark" ? "gray.700" : "white") : ""}
    >
      <Container maxW="container.xl">
        <Stack
          py="2"
          as="header"
          wrap="wrap"
          align="center"
          direction="row"
          justify="space-between"
        >
          <Box display={{ lg: "none" }} onClick={toggle} cursor="pointer">
            <CgMenu fontSize="25" />
          </Box>
          <Link to={"/"}>
            <Text fontSize="30" fontWeight="bold">
              Go DevRel
            </Text>
          </Link>
          <NavBarItems toggle={toggle} menuIsOpen={menuIsOpen || false} />
        </Stack>
      </Container>
    </Container>
  );
};

export default HeaderMenu;
