import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { DateTime } from "luxon";
import githubIcon from "../../assets/icons/github.svg";

const Footer = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <VStack justify={"center"} position={"absolute"} w={"100%"} bottom={0}>
      <Divider />
      <HStack
        py={2}
        width={"100%"}
        align="center"
        maxW="container.xl"
        justify="space-between"
      >
        {" "}
        <Text fontSize="30" fontWeight="bold">
          Go DevRel
        </Text>
        <Text fontSize="16">
          Direitos reservados GoDevRel {DateTime.now().year}©
        </Text>
        <Box cursor="pointer">
          <img
            width="36"
            height="36"
            src={githubIcon}
            alt=""
            onClick={() =>
              openInNewTab(
                "https://github.com/muriloarelhano/go-devrel-frontend"
              )
            }
          />
        </Box>
      </HStack>
    </VStack>
  );
};

export default Footer;
