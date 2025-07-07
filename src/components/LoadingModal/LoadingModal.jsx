import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spinner,
  Center,
} from '@chakra-ui/react';


const LoadingModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay backdropFilter="blur(4px)" />
      <ModalContent bg="transparent" boxShadow="none">
        <ModalBody>
          <Center>
            <Spinner size="xl" thickness="4px" color="teal.400" />
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoadingModal;
