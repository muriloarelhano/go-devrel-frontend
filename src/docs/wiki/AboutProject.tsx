import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const AboutProject: React.FC = () => {
  return (
    <>
      <Heading>Conhecendo o projeto</Heading>
      <Text>
        Esse projeto foi inspirado pelo Professor e Dr. Awndren Fontão,
        baseando-se em sua tese para ajudar profissionais de{" "}
        <i>Developer Relations</i>.
      </Text>
      <Text>
        Primeiramente comece a ler e aprender mais sobre o modelo na aba{" "}
        <Link style={{ color: "lightblue" }} to={"/model"}>
          Modelos
        </Link>
        , após isso juntando o conhecimento aprendido com sua experiencia, dê um
        feedback na aba de formulários, para que possamos melhor continuamente o
        modelo.
      </Text>
    </>
  );
};
