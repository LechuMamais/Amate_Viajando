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
  Text,
} from '@chakra-ui/react';

const MyModal = ({
  buttonText,
  heading = '',
  question = '',
  text = '',
  onAcceptClick,
  type = 'delete',
  modalMainButtonText = 'Aceptar',
  modalSecondaryButtonText = 'Cancelar',
  children,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAccept = () => {
    onAcceptClick();
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} mt={12} size='sm' colorScheme='red' w={{ base: '100%', md: '160px' }} variant='outline'>
        {buttonText}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {question != '' && (
              <Text fontSize='xl' mb={4}>
                {question}
              </Text>
            )}
            {text != '' && <Text>{text}</Text>}
            {children}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={type == 'delete' ? 'red' : 'blue'} mr={3} onClick={handleAccept}>
              {modalMainButtonText}
            </Button>
            <Button variant='ghost' onClick={onClose}>
              {modalSecondaryButtonText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyModal;
