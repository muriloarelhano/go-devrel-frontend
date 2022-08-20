/* eslint-disable jsx-a11y/iframe-has-title */
import {
  Box,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Footer from "../components/home/Footer";
import HeaderMenu from "../components/home/Header/Header";
import { Sidebar } from "../components/model/Sidebar";
import { SidebarItem } from "../components/model/SidebarItem";

const items: SidebarItem[] = [
  {
    name: "model",
    label: "Conhecendo o modelo",
    children: [
      {
        label: "Plataforma e produtos",
        name: "plataform-and-products",
        link: "/plataform-and-products",
      },
      {
        label: "Devrel",
        name: "devrel",
        link: "/devrel",
      },
    ],
  },
];

function Model() {
  return (
    <>
      <HeaderMenu />
      <HStack gap={2} mt={10} justify={"center"} align={"start"} >
        <Box>
          <Sidebar items={items}></Sidebar>
        </Box>
        <Divider orientation="vertical" height={"70vh"} />
        <Container maxW={"container.xl"} height={"90vh"} overflowY={"auto"}>
          <Heading>Lorem</Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            voluptatum officia facere accusantium deserunt! Illo iste doloremque
            minima totam, consequuntur beatae dolor saepe? Earum nihil adipisci
            quas nemo. Qui, incidunt?
          </Text>
          <Heading>Lorem</Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            voluptatum officia facere accusantium deserunt! Illo iste doloremque
            minima totam, consequuntur beatae dolor saepe? Earum nihil adipisci
            quas nemo. Qui, incidunt?
          </Text>
          <Heading>Lorem</Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            voluptatum officia facere accusantium deserunt! Illo iste doloremque
            minima totam, consequuntur beatae dolor saepe? Earum nihil adipisci
            quas nemo. Qui, incidunt?
          </Text>
          <Heading>Lorem</Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            voluptatum officia facere accusantium deserunt! Illo iste doloremque
            minima totam, consequuntur beatae dolor saepe? Earum nihil adipisci
            quas nemo. Qui, incidunt?
          </Text>
        </Container>
      </HStack>

      <Footer />
    </>
  );
}

export default Model;
