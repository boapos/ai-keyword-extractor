import React from "react";
import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");
  const toast = useToast();
  const submitText = () => {
    if (text === "") {
      toast({
        title: "Text field is empty.",
        description: "Please enter some text to extract keywords.",
        status: "error",
        duration: 2000,
        isClosable: false,
      });
    } else {
      extractKeywords(text);
    }
  };

  return (
    <>
      <Textarea
        bg="gray.800"
        color="white"
        padding={4}
        marginTop={6}
        height={250}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        bg="purple.500"
        color="white"
        marginTop={4}
        width="100%"
        _hover={{ bg: "purple.700" }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
