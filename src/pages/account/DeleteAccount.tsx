import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsFillCloudSlashFill } from "react-icons/bs";
import { deleteUser } from "../../services/userService";

export const DeleteAccount: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Box py={8}>
      {" "}
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
                  } catch (error: any) {
                    console.log(error)
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
  );
};
