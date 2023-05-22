import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Alert,
  AlertIcon,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import HeaderMenu from "../../components/Header/Header";
import Footer from "../../components/home/Footer";
import { EStages } from "../../interfaces/interfaces";
import { findPhaseByStage } from "../../utils/stages";
import { Answer, questions } from "./questions";

const LAST_STAGE_STORAGE_KEY = "lastMyStageResult";

function calcStageValue(array: Answer[], stage: EStages) {
  let acc = 0;
  for (const answer of array) {
    if (answer.for === stage) {
      acc += answer.value;
    }
  }
  return acc;
}

function checkCurrentState(obj: any): any {
  let bigger = 0;
  let stage = "";

  for (const key in obj) {
    if (obj[key] > bigger) {
      bigger = obj[key];
      stage = key;
    }
  }

  return stage;
}

export const MyStage: React.FC = () => {
  const { t } = useTranslation();
  const [myStageResult, setMyStageResult] = useState<EStages>();
  const [lastStage, setLastStage] = useState<string>(
    localStorage.getItem(LAST_STAGE_STORAGE_KEY) ?? ""
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<any>();
  const { fields, append } = useFieldArray({
    control,
    name: "answers",
    rules: {
      required: true,
    },
  });

  useEffect(() => {
    questions.forEach(() => {
      append({});
    });
  }, [append]);

  function onSubmitForm(values: { answers: string[] }) {
    try {
      const answers = values.answers.map((value): Answer => JSON.parse(value));

      const result = {
        [EStages.ACTIVATE]: calcStageValue(answers, EStages.ACTIVATE),
        [EStages.AWARENESS]: calcStageValue(answers, EStages.AWARENESS),
        [EStages.BEGINNING]: calcStageValue(answers, EStages.BEGINNING),
        [EStages.RECOGNITION]: calcStageValue(answers, EStages.RECOGNITION),
        [EStages.REFERENCE]: calcStageValue(answers, EStages.REFERENCE),
        [EStages.RETENTION]: calcStageValue(answers, EStages.RETENTION),
      };

      const finalStageResult = checkCurrentState(result);

      setMyStageResult(finalStageResult);
      onOpen();
      localStorage.setItem(LAST_STAGE_STORAGE_KEY, finalStageResult);
      setLastStage(finalStageResult);
    } catch (error) {
      setError("answers", {
        type: "required",
        message: "Todos os campos precisam estar preenchidos",
      });
      console.log(error);
    }
  }

  return (
    <>
      <HeaderMenu />
      <Container maxW={"container.lg"} mt={10} pb={20}>
        {isEmpty(lastStage) ? (
          <Alert status="error">
            <AlertIcon />
            Você ainda não respondeu nenhuma pesquisa
          </Alert>
        ) : (
          <Alert status="success">
            <AlertIcon />
            Seu ultimo resultado do formulário foi - {t(`stages.${lastStage}`)}
          </Alert>
        )}
        <Box mb={4} />
        <form id="my-stage-form" onSubmit={handleSubmit(onSubmitForm)}>
          {fields.map((field, index) => (
            <Accordion allowMultiple key={index}>
              <AccordionItem rounded={"lg"} border={"1px solid gray"} mb={6}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {questions[index].title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <FormControl>
                    <FormLabel>Escolha apenas uma resposta:</FormLabel>
                    <Controller
                      name={`answers[${index}]`}
                      control={control}
                      render={({ field: { onBlur, ref, value } }) => {
                        return (
                          <RadioGroup
                            key={field.id}
                            ref={ref}
                            onBlur={onBlur}
                            onChange={(value) =>
                              setValue(`answers[${index}]`, value)
                            }
                            value={value}
                          >
                            <VStack align={"start"} justify={"start"}>
                              {questions[index].answers.map((answer) => (
                                <Radio value={JSON.stringify(answer)}>
                                  {answer.label}
                                </Radio>
                              ))}
                            </VStack>
                          </RadioGroup>
                        );
                      }}
                    />
                  </FormControl>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </form>
        <Text size={"lg"} color={"red"} mb={4}>
          {errors?.answers && errors?.answers?.message}
        </Text>
        <Button type="submit" form="my-stage-form">
          Descobrir meu estágio
        </Button>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Parabéns, esse é o seu estagio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading textAlign={"center"}>
              {t(`stages.${myStageResult}`)}
            </Heading>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                window.location.replace(
                  `/model?initialPage=${findPhaseByStage(myStageResult!)}`
                );
              }}
            >
              Ir para o Modelo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </>
  );
};
