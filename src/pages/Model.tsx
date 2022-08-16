import { Container } from "@chakra-ui/react";
import Footer from "../components/home/Footer";
import HeaderMenu from "../components/home/Header/Header";

function Model() {
  return (
    <>
      <HeaderMenu />
      <Container maxW="container.xl">
        <iframe
          src={"https://murilo-arelhano.gitbook.io/internal-wiki"}
        ></iframe>
      </Container>
      <Footer />
    </>
  );
}

export default Model;
