import React from "react";
import { Box, Image, Text, Flex, Link } from "@chakra-ui/react";
import logo from "../assets/open-ai.svg";

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} marginRight={4} height={8} />
        <Text>Powered by OpenAI |&nbsp;</Text>
        <Link href="https://boapos.xyz" target="_blank">
          Bruce Apos
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
