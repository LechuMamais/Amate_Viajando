import React from 'react';
import { Text, Flex, Button } from '@chakra-ui/react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactTourButtons = ({tourName, destinationName}) => {
  const whatsappText = encodeURIComponent(`Hola, estoy interesado en el tour ${tourName} en ${destinationName} y quisiera más información.`);
  const emailText = encodeURIComponent(`Hola,\n\nEstoy interesado en el tour ${tourName} en ${destinationName} y quisiera más información.\n\nMuchas gracias.`);

  return (
    <>
      <Text color="gray.500">
        Si te interesa este tour y quieres más información, no dudes en ponerte en
        contacto con nosotros.
      </Text>
      <Flex direction={{ base: "column", md: "row" }} gap={2}>
        <Button
          as="a"
          href={`https://wa.me/?text=${whatsappText}`}
          target="_blank"
          leftIcon={<FaWhatsapp size="24px" />}
          colorScheme="teal"
          variant="solid"
        >
          WhatsApp
        </Button>
        <Button
          as="a"
          href={`mailto:?body=${emailText}`}
          target="_blank"
          leftIcon={<FaEnvelope size="24px" />}
          colorScheme="teal"
          variant="outline"
        >
          Email
        </Button>
      </Flex>
    </>
  );
};

export default ContactTourButtons;
