import {
  Heading,
  ListItem,
  OrderedList,
  Text
} from "@chakra-ui/react";
import React from "react";
export const ConclusionModelDoc: React.FC = () => {
  return (
    <>
      <Heading id="model">Conclusões e Implicações do DEVGO</Heading>
      <Text>
        🔍 O DevGo descreve como as relações ganha-ganha entre os
        desenvolvedores e uma organização central podem favorecer a
        sustentabilidade do ecossistema por meio dos desenvolvedores e da
        organização, representada pela equipe de profissionais de DevRel. Esse
        cenário ganha-ganha é percebido no DevGo por meio do loop de feedback
        envolvendo repositórios de dados dentro da área de foco “Monitoramento”
        que contêm a “voz dos desenvolvedores” e os objetivos da organização
        central. O uso de repositórios de dados no modelo pode formar a base sob
        mecanismos e ferramentas de avaliação maduros para grandes ecossistemas.
      </Text>
      <Text>
        O DevGo pode suportar demandas do setor, tais como: ROI (Retorno sobre o
        Investimento, do inglês Return On Investment) em atividades de relações
        com desenvolvedores; efeitos na experiência do desenvolvedor; e
        identificação de barreiras para a participação do desenvolvedor. O uso
        do DEVGO também pode contribuir para ampliar os esforços nas equipes de
        DevRel. O uso do modelo do DEVGO pode ajudar quando:
      </Text>
      <Text>
        <OrderedList>
          <ListItem>
            <strong>Não há programa de DevRel:</strong> conhecimento das áreas
            essenciais para planejar e iniciar um programa de governança de
            desenvolvedores por meio de DevRel;
          </ListItem>
          <ListItem>
            <strong>
              Estratégias de DevRel em nível básico, documentado e definido:
            </strong>
            identificação de onde a organização está e onde ela pode ir;
          </ListItem>
          <ListItem>
            <strong>Estratégias próprias de DevRel:</strong> guia em decisões
            envolvendo riscos e tendências para manter a competitividade em
            relação a outras organizações;
          </ListItem>
          <ListItem>
            <strong>Monitoramento e controle:</strong> uso mais focado na área
            de Monitoramento para formar uma base sólida de mecanismos de
            avaliação e ferramentas para SECOs com base mais extensa de
            desenvolvedores;
          </ListItem>
          <ListItem>
            <strong>
              Introdução de estratégias inovadoras para melhor atender às metas
              da organização:
            </strong>{" "}
            apoio às organizações na evolução das estratégias de governança do
            desenvolvedor, dimensionar esforços e formar equipes internas.
          </ListItem>
        </OrderedList>
      </Text>
    </>
  );
};
