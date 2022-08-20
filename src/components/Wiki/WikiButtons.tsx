import { Button, HStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SidebarItem } from "./SidebarItem";

export interface WikiButtonsProps {
  nextItem?: SidebarItem;
  previousItem?: SidebarItem;
  setCurrentPageComponent: any;
  setCurrentItemPath: any;
}

export const WikiButtons: React.FC<WikiButtonsProps> = ({
  nextItem,
  previousItem,
  setCurrentPageComponent,
  setCurrentItemPath,
}) => {
  function onClick(item: SidebarItem) {
    setCurrentPageComponent(item.pageContentComponent);
    setCurrentItemPath(item.identifier, "children");
  }

  return (
    <HStack
      justifyContent={
        previousItem && !nextItem
          ? "start"
          : !previousItem && nextItem
          ? "end"
          : "space-between"
      }
    >
      {previousItem ? (
        <Button
          leftIcon={<FaArrowLeft />}
          onClick={() => onClick(previousItem)}
        >
          {previousItem.label}
        </Button>
      ) : (
        ""
      )}

      {nextItem ? (
        <Button rightIcon={<FaArrowRight />} onClick={() => onClick(nextItem)}>
          {" "}
          {nextItem.label}
        </Button>
      ) : (
        ""
      )}
    </HStack>
  );
};
