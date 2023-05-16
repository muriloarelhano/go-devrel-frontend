import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const StartPage: React.FC = () => {
  return (
    <>
      <Heading>Inicio</Heading>
      <Text>
        Esses formulários servem para nos ajudar a melhor o modelo se baseando
        em sua experiencia, dessa forma toda a comunidade pode colaborar e se
        beneficiar. Tente responder o formulário com calma e adicionar sempre
        comentários a mais que possam colaborar ainda mais com o desenvolvimento
        da plataforma.
      </Text>
      <Text>
        Selecione o formulário referente a um estágio, ao responder todas as
        questões clique em enviar.
      </Text>

      <Alert status="warning">
        <AlertIcon />
        <VStack align={"start"}>
          <AlertTitle>Atenção ao enviar os formulários!</AlertTitle>
          <AlertDescription>
            Cada formulário deve ser enviado apenas uma vez, ao dia. Nada
            limitado o envio dos formulários novamente, mas tente não enviar mais de uma
            vez.
          </AlertDescription>
        </VStack>
      </Alert>
    </>
  );
};
