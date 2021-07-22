import React from "react";
import { chakra, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  value: string;
}

const TextInfo: React.FC<Props> = ({ title, value }) => {
  return (
    <Text fontSize={{ base: "0.5rem", md: "1rem" }} fontWeight="bold">
      {title}:
      <chakra.span fontWeight="normal" marginLeft={3}>
        {value}
      </chakra.span>
    </Text>
  );
};

export default TextInfo;
