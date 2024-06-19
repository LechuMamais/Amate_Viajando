import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const MyModal = ({buttonText,  heading, text, onAcceptClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAccept = () => {
    onAcceptClick();
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        mt={12}
        size="sm"
        colorScheme="red"
        w={{ base: "100%", md: "160px" }}
        variant="outline"
      >
        {buttonText}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{text}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAccept}>
              Aceptar
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyModal;
