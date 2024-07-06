import React from "react";
import { Text, Flex, Button } from "@chakra-ui/react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactTourButtons = ({ tourName, destinationName }) => {
  const whatsappText = encodeURIComponent(
    `Hola, estoy interesado en el tour ${tourName} en ${destinationName} y quisiera más información.`
  );
  const emailText = encodeURIComponent(
    `Hola,\n\nEstoy interesado en el tour ${tourName} en ${destinationName} y quisiera más información.\n\nMuchas gracias.`
  );
  const emailSubject = encodeURIComponent(`Solicitud de infromación`);

  return (
    <>
      <Text
        px={{ base: 4, sm: 6, md: 0 }}
        textAlign="justify"
        color="gray.600"
        lineHeight="1.5em"
        letterSpacing={{ base: 0, md: "0.04em" }}
        fontSize="lg"
      >
        Si te interesa este tour y quieres más información, no dudes en ponerte
        en contacto con nosotros.
      </Text>
      <Flex direction={{ base: "column", md: "row" }} gap={2}>
        <Button
          as="a"
          href={`https://wa.me/5492942639282?text=${whatsappText}`}
          target="_blank"
          leftIcon={<FaWhatsapp size="24px" />}
          colorScheme="teal"
          variant="solid"
        >
          WhatsApp
        </Button>
        <Button
          as="a"
          href={`mailto:amateviajandoreservas@gmail.com?subject=${emailSubject}?body=${emailText}`}
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
