import React from "react";
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
} from "@chakra-ui/react";

const KeywordsModal = ({ keywords, loading, isOpen, closeModal }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Keywords</ModalHeader>
            <ModalCloseButton />
            <ModalBody
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {loading ? (
                <CircularProgress isIndeterminate color="blue.300" />
              ) : (
                <Text>{keywords}</Text>
              )}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={closeModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default KeywordsModal;
