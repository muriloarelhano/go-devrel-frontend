import { Divider, HStack, List, ListItem } from "@chakra-ui/react";
export const Summary = () => {
  return (
    <HStack gap={5}>
      <Divider orientation="vertical" height={"8vh"} />
      <List>
        <ListItem>Lorem</ListItem>
        <ListItem>ipsum</ListItem>
      </List>
    </HStack>
  );
};
