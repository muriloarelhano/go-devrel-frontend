/* eslint-disable jsx-a11y/iframe-has-title */
import { Container } from "@chakra-ui/react";
import HeaderMenu from "../components/Header/Header";
import Footer from "../components/home/Footer";
import { Wiki } from "../components/Wiki/Wiki";
import { modelPageItems } from "../docs/model";

function Model() {
  return (
    <>
      <HeaderMenu />
      <Container maxW="container.xl">
        <Wiki items={modelPageItems} format={"wiki"}></Wiki>
      </Container>
      <Footer />
    </>
  );
}

export default Model;
