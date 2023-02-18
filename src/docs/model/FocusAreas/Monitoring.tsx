import { Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
export const MonitoringModelDoc: React.FC = () => {
  return (
    <>
      <Heading id="flux">Fluxo de avanço do desenvolvedor</Heading>
      <Text>
        🔍 Esta área de foco tem como objetivo servir como uma estratégia para
        monitorar o engajamento do desenvolvedor, dando suporte à transparência
        tanto para a organização quanto para os desenvolvedores. Desta forma é
        possível garantir que todos tenham a chance de entender e fornecer
        feedback. Além disso, apresenta mecanismos para armazenar dados sobre as
        contribuições e interações dos desenvolvedores. Isto ajuda a promover o
        ciclo de feedback para adaptar as estratégias de governança do
        desenvolvedor na área de foco da Plataforma e Produtos e na DevRel
        (Evangelismo e Advocacia).
      </Text>
      <Text>
        Na Tabela 25, são apresentadas as categorias, descrição e exemplo de
        repositórios que podem ser utilizados, pelos profissionais de DevRel,
        dentro da área de foco de monitoramento.
      </Text>
      <Text>
        Os repositórios (p.ex.: Loja de Apps, Questões e Respostas, Relatórios
        de Defeitos e Projeto de Software) armazenam dados gerados a partir do
        uso de recursos e objetivos fornecidos por uma organização central para
        ajudar na expansão do ecossistema. Esta área de foco permite com que o
        DevGo possua um canal de comunicação bidirecional, fornecendo
        informações sobre conhecimento e experiência a partir das direções
        bottom-up e top-down (alimentando todas as áreas de foco). Os
        repositórios suportam o alinhamento entre os ecossistemas locais (p.ex.:
        uma comunidade específica na África do Sul) e o ecossistema global de
        desenvolvedores.
      </Text>
      <Text>
        Os objetos de transferência de valor para esta área de foco, que consume
        e provê valor para todas outras áreas de foco, são descritos na Figura
        21.
      </Text>
      <Text>
        Especificamente, nesta tese, analisamos um repositório da categoria
        Perguntas e Repostas, o Stack Overflow, como forma de obter insights
        para o monitoramento a partir desta categoria. Esta análise de insights
        é baseadaa em mineração de repositórios de software como forma de obter
        informações que ajudem na governança de desenvolvedores. Os insights são
        os seguintes:
      </Text>
      <Text>
        <UnorderedList>
          <ListItem>
            📢Insight #1: os tópicos podem indicar as barreiras mais frequentes
            enfrentadas por desenvolvedores dispostos a participar de um SECO.
            Esse cenário pode servir como uma estratégia de monitoramento para
            apoiar a organização central no recrutamento e no treinamento de
            desenvolvedores. Do ponto de vista do custo operacional, de
            manutenção e a competividades, os tópicos comuns: vinculação de
            dados, programação de UI e infraestrutura de desenvolvimento, ajudam
            na análise;
          </ListItem>
          <ListItem>
            📢Insight #2: as emoções primárias além de serem úteis pra obter a
            satisfação do desenvolvedor, também cobrem, aspectos de custo,
            competitividade e manutenção de produtos. A tristeza se relaciona a
            produtos como os emuladores e dispositivos, assim como, a
            manipulação de elementos de UI. A raiva está associada a
            indisponibilidade de recursos. E a alegria, pode impactar na
            competitividade do produto, pois há relação com as melhores práticas
            para gerar uma contribuição e a implementação de recursos avançados;
          </ListItem>
        </UnorderedList>
      </Text>
    </>
  );
};
