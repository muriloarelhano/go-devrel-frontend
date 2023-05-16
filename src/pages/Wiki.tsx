/* eslint-disable jsx-a11y/iframe-has-title */
import { Container } from "@chakra-ui/react";
import HeaderMenu from "../components/Header/Header";
import Footer from "../components/home/Footer";
import { Wiki } from "../components/Wiki/Wiki";
import { wikiPageItems } from "../docs/wiki";

export function WikiPage() {
  return (
    <>
      <HeaderMenu />
      <Container maxW="container.2xl" pb={20}>
        <Wiki items={wikiPageItems} format={"wiki"} />
      </Container>
      <Footer />
    </>
  );
}
