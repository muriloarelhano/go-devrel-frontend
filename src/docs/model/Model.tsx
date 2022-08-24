import { Heading, Text } from "@chakra-ui/react";
import React from "react";
export const ModelDoc: React.FC = () => {
  return (
    <>
      <Heading id="model">🧐 De onde surgiu?</Heading>
      <Text>
        O modelo surge como forma de ajudar na identificação da estrutura que
        apoia a Governança de Desenvolvedores em um Ecosistema de Software e
        estágios do fluxo dos desenvolvedores.
      </Text>
      <Heading id="structure">✨ Estrutura do DEVGO</Heading>
      <Text>
        🔍 O DevGo (do inglês, Developer Governance) consiste em um modelo
        composto elementos estruturais e por um conjunto de lições aprendidas
        para a criação e manutenção de um SECO (Software Ecosystem) próspero
        para a organização central e para os desenvolvedores. As organizações
        centrais em SECO podem se beneficiar do DevGo para saber quais elementos
        da estrutura do modelo têm sido abordados, ajudando a identificar lições
        aprendidas e favorecendo a colaboração e a competitividade. Dessa forma,
        elas poderão obter uma visão sobre a adequação do seu modelo de
        governança de desenvolvedores.
      </Text>
      <Heading as="h3" size={"lg"} id="sub" >
        Sub Titulo
      </Heading>
      <Text>
        🔍 O DevGo (do inglês, Developer Governance) consiste em um modelo
        composto elementos estruturais e por um conjunto de lições aprendidas
        para a criação e manutenção de um SECO (Software Ecosystem) próspero
        para a organização central e para os desenvolvedores. As organizações
        centrais.
      </Text>
    </>
  );
};
