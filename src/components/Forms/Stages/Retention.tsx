import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export const RetentionStage: React.FC = () => {
  return (
    <>
      <Heading>Estágio de Retenção</Heading>
      <Text>
        Neste estágio um desenvolvedor continua a usar a plataforma, bem como
        recursos novos/adicionais e fornece novas contribuições. Porém o
        desenvolvedor conta com outras oportunidades em concorrentes, desta
        forma, neste estágio é importante valorizar o desenvolvedor para retê-lo
        em relação a monetização e oportunidades de benefícios e a própria
        cultura dentro do SECO. São alguns facilitadores que ajudam o
        profissional de DevRel neste estágio: portfólio de dispositivos e
        aplicações móveis, certificação de contribuição, plano de negócios,
        modelo de geração de renda, acordos de níveis de qualidade e colaboração
        social.
      </Text>
    </>
  );
};
