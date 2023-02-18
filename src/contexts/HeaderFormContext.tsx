import { useDisclosure } from "@chakra-ui/react";
import React, { createContext } from "react";

export interface HeaderFormContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

//@ts-ignore
export const HeaderFormContext = createContext<HeaderFormContextProps>(null);

export const HeaderFormProvider: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HeaderFormContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </HeaderFormContext.Provider>
  );
};
