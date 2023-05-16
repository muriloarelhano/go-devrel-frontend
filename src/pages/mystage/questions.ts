import { EStages } from "../../interfaces/interfaces";

export interface Answer {
  label: string;
  value: number;
  for: EStages;
}

export interface MyStageQuestion {
  title: string;
  answers: Answer[];
}

export const questions: MyStageQuestion[] = [
  {
    title:
      "Qual das afirmações a seguir parece se encaixar mais com seu contexto atual?",
    answers: [
      {
        label: "Mostrar aos desenvolvedores que meu ecossistema é atrativo.",
        for: EStages.AWARENESS,
        value: 2,
      },
      {
        label:
          "Focando em fazer os desenvolvedores que já tiveram contato com a plataforma, contribuírem e utilizarem meu ecossistema.",
        for: EStages.BEGINNING,
        value: 2,
      },
      {
        label:
          "Os desenvolvedores estão começando a gerar as primeiras contribuições para o projeto.",
        for: EStages.ACTIVATE,
        value: 2,
      },
      {
        label: `Estou focado em prover melhores funcionalidades e oportunidades,
           como certificações e portfólio para que eles possam de destacar e gerar retornos monetários.`,
        for: EStages.RETENTION,
        value: 2,
      },
      {
        label: `Estou separando os melhores desenvolvedores do projeto,
         que trouxeram mais benefícios e contribuições para minha plataforma.`,
        for: EStages.RECOGNITION,
        value: 2,
      },
      {
        label: `Estou selecionando desenvolvedores para lidarem os outros estágios de desenvolvimento, 
        pois já tenho um leque grande desenvolvedores com experiencia no ecossistema.`,
        for: EStages.REFERENCE,
        value: 2,
      },
    ],
  },
  {
    title:
      "Tente assinalar qual objetivo está mais proximo dos seus objetivos atuais.",
    answers: [
      {
        label:
          "Anunciar funcionalidades, roadmap e organizar eventos para atrair desenvolvedores.",
        for: EStages.AWARENESS,
        value: 1,
      },
      {
        label:
          "Estabelecer parcerias mais solidas com os desenvolvedores e ajudar na capacitação de desenvolvedores novos.",
        for: EStages.BEGINNING,
        value: 1,
      },
      {
        label:
          "Fornecer impulso para os desenvolvedores. Ajudar a gerenciar mudanças no ecossistema e apoio o desenvolvimento.",
        for: EStages.ACTIVATE,
        value: 2,
      },
      {
        label: `Garantir o interesse e bem estar dos desenvolvedores mais antigos no ecossistema, fornecer mais suporte 
        e melhorar mais o relacionamento com os desenvolvedores.`,
        for: EStages.RETENTION,
        value: 2,
      },
      {
        label: `Elevar mais o relacionamento com desenvolvedores chaves no projeto, organizar a comunidade e
        identificar lideres da comunidade, além de obter mais feedbacks do produto.`,
        for: EStages.RECOGNITION,
        value: 2,
      },
      {
        label: `Lidar com parcerias estratégicas, reconhecer pessoas especializadas para dimensionar mais as atividades do ecossistema 
        e capacitar mais os principais desenvolvedores e parceiros.`,
        for: EStages.REFERENCE,
        value: 2,
      },
    ],
  },
  {
    title:
      "Responda as perguntas sobre como seus desenvolvedores se encontram na plataforma.",
    answers: [
      {
        label:
          "Os desenvolvedores então se inscrevendo para receber novidades sobre a plataforma. ",
        for: EStages.AWARENESS,
        value: 1,
      },
      {
        label:
          "Alguns desenvolvedores já estão submento novos códigos relacionados com a plataforma.",
        for: EStages.BEGINNING,
        value: 1,
      },
      {
        label:
          "Os desenvolvedores já estão publicando aplicações funcionais no mercado com seu ecossistema.",
        for: EStages.ACTIVATE,
        value: 2,
      },
      {
        label: `Os desenvolvedores estão procurando se aprofundar mais em cursos e certificações de sua plataforma.`,
        for: EStages.RETENTION,
        value: 2,
      },
      {
        label: `Os desenvolvedores estão interessados de participar ativamente da plataforma, terem mais reconhecimento no ecossistema 
        e estão esperando com frequência novas noticias e eventos sobre o ecossistema. `,
        for: EStages.RECOGNITION,
        value: 2,
      },
      {
        label: `Alguns desenvolvedores estão se tornando especialistas 
        e são pontos de interesse para o ecossistema, podendo colaborar com outros desenvolvedores e ajudar o ecossistema como um todo`,
        for: EStages.REFERENCE,
        value: 2,
      },
    ],
  },
];
