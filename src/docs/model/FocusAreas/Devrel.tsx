import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { WikiImage } from "../../../components";
export const DevrelDoc = () => {
  return (
    <>
      <Heading id="dev-rel">Devrel (Evangelismo e advocacia) </Heading>
      <Text>
        🔍 Esta área de foco tem como objetivo ajudar a incorporar contribuições
        com potencial (ou seja, produtos complementares, serviços e inovações)
        que surgem dos desenvolvedores para a plataforma do ecossistema na área
        de foco da Plataforma e Produtos. Isto ajuda a manter o equilíbrio entre
        as expectativas dos desenvolvedores e as necessidades da organização
        central. Incluindo o balanceamento entre o roadmap interno da
        organização com as necessidades dos desenvolvedores.
      </Text>
      <Text>
        Esta área é composta por evangelismo e advocacia. A parte de advocacia
        trabalha com desenvolvedores existentes, ou seja, com o ganho de
        interesse e a fidelização de potenciais desenvolvedores. Isto se dá por
        meio de conteúdo de qualidade e específico para esses desenvolvedores. A
        parte de advocacia está relacionada aos estágios de retenção,
        reconhecimento e referência dentro do DevGo. O evangelismo foca na
        divulgação da “palavra” da organização, ou seja, na prospecção de
        desenvolvedores, na influência de desenvolvedores externos. A parte de
        evangelismo está associada aos estágios de sensibilização, entrada e
        ativação do DevGo. Como característica comum, tanto advocacia quanto o
        evangelismo devem construir confiança entre os setores da organização
        central e os desenvolvedores.
      </Text>
      <Text>
        Nesta área de foco são fornecidos os recursos apropriados, como
        componentes e ferramentas de código aberto, para dar suporte aos
        desenvolvedores, dividindo as metas de uma organização de acordo com
        vários públicos-alvo. Estes recursos e ferramentas são desenvolvidos com
        base em diretrizes organizacionais que incluem especificação de
        plataforma, ideias emergentes, melhores práticas, tecnologias,
        ferramentas de desenvolvimento e marketing, critérios de qualidade e
        projeto de interface com o usuário. Os objetos de transferência de valor
        que são consumidos e providos por esta área de foco são apresentados na
        Figura 19
      </Text>

      <WikiImage
        image={require("../../../assets/images/model/Figura19.png")}
        imageCaption={
          "Figura 19. Objetos de transferência de valor - DevRel (Evangelismo e Advocacia)."
        }
      />
    </>
  );
};
