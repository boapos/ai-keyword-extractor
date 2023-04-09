import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from "../assets/open-ai.svg";

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} marginRight={4} height={8} />
        <Text>Powered by Open AI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
