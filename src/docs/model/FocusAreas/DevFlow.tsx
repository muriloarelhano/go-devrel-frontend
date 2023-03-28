import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { WikiImage } from "../../../components";
export const DevFlowDoc: React.FC = () => {
  return (
    <>
      <Heading id="flux">Fluxo de avanço do desenvolvedor</Heading>
      <Text>
        🔍 Esta área de foco tem como objetivo apoiar no acompanhamento e
        análise do avanço dos desenvolvedores dentro do ecossistema. Entender
        como os desenvolvedores estão se movimentando e gerando contribuições
        dentro do ecossistema é importante para uma organização direcionar suas
        estratégias de atuação para governá-los. De fato, se há muitos
        desenvolvedores com problemas para a entrada no ecossistema, a
        organização passará por problemas de ativação e retenção, por exemplo,
        estágios necessários para a geração de contribuições com qualidade. A
        Figura 20 apresenta os objetos que ajudam na transferência de valor
        nesta área de foco (os consumidos e os providos pela área).
      </Text>

      <WikiImage
        image={require("../../../assets/images/model/Figura20.png")}
        imageCaption={"Figura 20. Objetos de transferência de valor - Fluxo de Avanço do Desenvolvedor."}
      />
      
      <Text>
        Especificamente nesta área há um conjunto de fases, como explicado na
        estrutura do modelo (Figura 16), e que são descritos mais a frente. Há
        três fases para apoiar o progresso do desenvolvedor, essas fases
        consideram modelos de negócio e de gerenciamento de parceria. Tem-se,
        desta forma, as seguintes fases: Início, Crescimento e Maturidade.
      </Text>
    </>
  );
};
