import { Text, VStack } from "@chakra-ui/react";
import Zoom from "react-medium-image-zoom";

export interface WikiImageProps {
  image: any;
  imageCaption?: string;
  imageAlt?: string;
  width?: string;
}
export const WikiImage: React.FC<WikiImageProps> = ({
  image,
  imageCaption,
  imageAlt,
  width = "80%",
}) => {
  return (
    <VStack py={8} justify={"center"} align={"center"}>
      <Zoom>
        <img alt={imageAlt} height={"auto"} width={width} src={image} />
      </Zoom>
      <Text pt={4}>{imageCaption}</Text>
    </VStack>
  );
};
