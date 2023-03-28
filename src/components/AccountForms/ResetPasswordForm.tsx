import React from "react";

import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UseModalProps,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const ResetPasswordForm: React.FC<UseModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { register, reset, handleSubmit } = useForm<{ email: string }>();

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        reset({});
      }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Recuperação de senha</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            id="reset-password-form"
            onSubmit={handleSubmit(({ email }) => {
              alert("Desculpe essa função ainda não foi implementada");
            })}
          >
            <FormControl>
              <Input placeholder={"Digite seu e-mail"} {...register("email")} />{" "}
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button mr={4} onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" form="reset-password-form" colorScheme={"teal"}>
            Enviar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
