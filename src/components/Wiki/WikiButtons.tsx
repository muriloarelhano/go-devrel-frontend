import { Button, HStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SidebarItem } from "./SidebarItem";

export interface WikiButtonsProps {
  nextItem?: SidebarItem;
  previousItem?: SidebarItem;
}

export const WikiButtons: React.FC<WikiButtonsProps> = ({
  nextItem,
  previousItem,
}) => {
  return (
    <>
      <HStack width={"100%"} justify={"space-between"}>
        {previousItem ? (
          <Button leftIcon={<FaArrowLeft />}>{previousItem.label}</Button>
        ) : (
          ""
        )}

        {nextItem ? (
          <Button rightIcon={<FaArrowRight />}> {nextItem.label}</Button>
        ) : (
          ""
        )}
      </HStack>
    </>
  );
};
