import {
  Modal,
  ModalContent,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { memo, useState, VFC } from "react";
import LoginContent from "./LoginContent";
import SignInContent from "./SignInContent";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const LoginModal: VFC<Props> = memo((props) => {
  const { onClose, isOpen } = props;

  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabsChange = (index: any) => {
    setTabIndex(index);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Tabs index={tabIndex} onChange={handleTabsChange} isFitted>
            <TabList justifyContent="space-evenly">
              <Tab py="4">Entrar</Tab>
              <Tab py="4" color="gray.600">
                Cadastrar conta
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel px="12" py="8">
                <LoginContent
                  onClose={onClose}
                  goToSignIn={() => setTabIndex(1)}
                />
              </TabPanel>
              <TabPanel px="12" py="8">
                <SignInContent />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalContent>
      </Modal>
    </>
  );
});
export default LoginModal;
