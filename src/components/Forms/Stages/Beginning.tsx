import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export const BeginningStage: React.FC = () => {
  return (
    <>
      <Heading>Estágio de Entrada</Heading>
      <Text>
        Este estágio está relacionado ao objetivo do desenvolvedor de gerar
        alguma contribuição para o ecossistema ou para sua carreira
        profissional. Aqui o desenvolvedor passou pelo estágio de sensibilização
        e possui alguma motivação em atuar no SECO. Neste estágio o
        desenvolvedor é considerado novato em algum produto do ecossistema pois
        está iniciando sua possível contribuição. Desta forma é importante
        reduzir as barreiras para a participação deste desenvolvedor.
        <br />O profissional de DevRel pode se utilizar do seguinte conjunto de
        facilitadores: pacote de benefícios, taxas de parceria e suporte
        técnico.
      </Text>
    </>
  );
};
