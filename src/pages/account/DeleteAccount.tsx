import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Heading,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { BsFillCloudSlashFill } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthContext";
import { deleteUser } from "../../services/userService";

export const DeleteAccount: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);
  const toast = useToast();
  const { handleDeleteAccount } = useContext(AuthContext);

  return (
    <>
      <Heading fontSize={"x-large"}>Excluir Conta Permanentemente</Heading>
      <Box py={8}>
        <Button
          colorScheme={"red"}
          leftIcon={<BsFillCloudSlashFill />}
          onClick={onOpen}
        >
          Deletar Conta
        </Button>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Confirmação de deleção de conta
              </AlertDialogHeader>

              <AlertDialogBody>
                Você tem certeza disso? Essa ação é irreversível e todos seus
                dados serão perdido.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  colorScheme="red"
                  onClick={async () => {
                    try {
                      await deleteUser();
                      toast({
                        status: "success",
                        title: "Conta deletada com sucesso",
                        description:
                          "Até mais, obrigado por participar do projeto!",
                      });
                      setTimeout(() => {
                        handleDeleteAccount();
                      }, 3000);
                    } catch (error: any) {
                      toast({
                        status: "error",
                        title: "Erro ao deletar a conta",
                        description:
                          "Não foi possível realizar essa ação no momento, tente mais tarde" +
                          error.message,
                      });
                      console.log(error);
                    }
                  }}
                  ml={3}
                >
                  Deletar
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </>
  );
};
