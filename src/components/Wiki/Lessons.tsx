import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React from "react";

export interface LessonsProps {
  title: string;
}

export const Lessons: React.FC<LessonsProps> = ({ title, children }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <Text>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel>{children}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
