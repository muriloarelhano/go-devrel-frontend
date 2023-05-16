import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export const ActivateStage: React.FC = () => {
  return (
    <>
      <Heading>Estágio de Ativação</Heading>
      <Text>
        Este estágio funciona como um gatilho que indica se o desenvolvedor
        gerou sua primeira contribuição para o ecossistema, por exemplo, por
        meio da publicação de uma aplicação móvel. Neste estágio, desenvolvedor
        está projetando, desenvolvendo e submetendo sua primeira contribuição.
        Os seguintes facilitadores podem ser utilizados por profissionais de
        DevRel: portfólio de dispositivos e aplicações móveis, certificação de
        contribuição e acordos de níveis de qualidade.
      </Text>
    </>
  );
};
