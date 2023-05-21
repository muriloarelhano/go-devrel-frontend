/* eslint-disable jsx-a11y/iframe-has-title */
import { Container } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import HeaderMenu from "../components/Header/Header";
import Footer from "../components/home/Footer";
import { Wiki } from "../components/Wiki/Wiki";
import { modelPageItems } from "../docs/model";

function Model() {
  let [searchParams] = useSearchParams();
  const initialPage = searchParams.get("initialPage");
  const initialHeading = searchParams.get("initialHeading");
  console.log(initialPage, initialHeading);
  return (
    <>
      <HeaderMenu />
      <Container maxW="container.2xl " pb={20}>
        <Wiki
          items={modelPageItems}
          format={"wiki"}
          initialPage={initialPage ?? undefined}
          initialHeading={initialHeading ?? undefined}
        />
      </Container>
      <Footer />
    </>
  );
}

export default Model;
