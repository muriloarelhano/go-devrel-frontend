import { Container } from "@chakra-ui/react";
import { FORMS } from "../components/Forms";
import HeaderMenu from "../components/Header/Header";
import Footer from "../components/home/Footer";
import { Wiki } from "../components/Wiki/Wiki";

const Forms = () => {
  return (
    <>
      <HeaderMenu />
      <Container maxW="container.xl">
        <Wiki items={FORMS} format={"forms"} />
      </Container>
      <Footer />
    </>
  );
};

export default Forms;
