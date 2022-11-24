import { Heading, Text } from "@chakra-ui/react";
import React from "react";
export const PhaseModelDoc: React.FC = () => {
  return (
    <>
      <Heading id="phase">Fases, estágios e facilitadores</Heading>
      <Text>
        🔍 Cada fase compreende um conjunto de Estágios de Avanço do
        Desenvolvedor. Cada um destes estágios colabora para um laço de feedback
        que aumenta tanto o conhecimento da organização sobre o SECO quanto dos
        desenvolvedores. Este laço de feedback apoia a organização central,
        assim como os desenvolvedores por meio da solução de problemas e da
        redução de riscos (situação de cooperação). O laço de feedback consiste
        no exercício contínuo de colher as percepções/expectativas dos
        desenvolvedores e facilitar com que sejam respondidas. Esta resposta
        pode ser tanto pela organização central, por meio dos profissionais de
        DevRel, quanto pela comunidade desenvolvedores.
      </Text>
      <Text>
        Cada um dos estágios está associado a um conjunto de facilitadores. Os
        Facilitadores são mecanismos da organização associados a cada estágio do
        progresso do desenvolvedor para ajudar os desenvolvedores a alcançarem
        seus próprios objetivos. O treinamento é um facilitador comum a todos os
        estágios que compõem o DevGo, uma vez que é um dos mecanismos principais
        de formação de desenvolvedores e de troca de conhecimento entre os
        profissionais de DevRel e os desenvolvedores. A cada um dos estágios
        ainda há um marco que pode ser uma das indicações de que o desenvolvedor
        já passou por um determinado estágio e avançará para o próximo.
      </Text>
    </>
  );
};
