import { Modal, ModalContent, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { memo, VFC } from "react";
import LoginContent from "./LoginContent";
import SignInContent from "./SignInContent";

type Props = {
  onClose: () => void;
  isOpen: boolean;

}

const LoginModal: VFC<Props> = memo((props) => {

  const { onClose, isOpen, } = props;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent >
          <Tabs isFitted>
            <TabList justifyContent='space-evenly'>
              <Tab py='4' >Entrar</Tab>
              <Tab  py='4' color='gray.600' >Cadastrar conta</Tab>
            </TabList>
            <TabPanels >
              <TabPanel px='12' py='8'>
                <LoginContent />
              </TabPanel>
              <TabPanel px='12' py='8'>
                <SignInContent />
              </TabPanel>

            </TabPanels>
          </Tabs>
        </ModalContent>
      </Modal>
    </>
  )
}
)
export default LoginModal