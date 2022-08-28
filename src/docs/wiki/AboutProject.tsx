import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const AboutProject: React.FC = () => {
  return (
    <>
      <Heading>Conhecendo o projeto GoDevrel</Heading>
      <Text>
        Esse projeto foi inspirado pelo Professor e Dr. Awndren Fontão,
        baseando-se em sua tese para ajudar profissionais de{" "}
        <i>Developer Relations</i>.
      </Text>
      <Heading>Como tirar proveito da plataforma</Heading>
      <Text>
        Primeiramente começe a ler e aprender mais sobre o modelo a aba{" "}
        <Link to={"/model"}>`Modelos`</Link>.
      </Text>
    </>
  );
};
