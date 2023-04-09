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
  CircularProgress,
} from "@chakra-ui/react";

const KeywordsModal = ({ keywords, loading, isOpen, closeModal }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Keywords</ModalHeader>
            <ModalBody
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {loading ? (
                <CircularProgress isIndeterminate color="purple.300" />
              ) : (
                <Text>{keywords}</Text>
              )}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="purple" onClick={closeModal}>
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
