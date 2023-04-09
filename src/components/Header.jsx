import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <>
      <Heading color="white" marginBottom="2rem">
        AI Keyword Extractor <SearchIcon />
      </Heading>{" "}
      <Text fontSize={25} textAlign="center" opacity={0.9}>
        Paste in your text below and we'll extract the keywords for you.
      </Text>
    </>
  );
};

export default Header;
