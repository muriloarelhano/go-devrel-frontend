/* eslint-disable jsx-a11y/iframe-has-title */
import { Container } from "@chakra-ui/react";
import HeaderMenu from "../components/Header/Header";
import Footer from "../components/home/Footer";
import { Wiki } from "../components/Wiki/Wiki";
import { modelPageItems } from "../docs/model";
import { EPhasesIds } from "../interfaces/interfaces";

function Model() {
  return (
    <>
      <HeaderMenu />
      <Container maxW="container.2xl " pb={20}>
        <Wiki items={modelPageItems} format={"wiki"} initialIdentifier={EPhasesIds.MATURITY} />
      </Container>
      <Footer />
    </>
  );
}

export default Model;
