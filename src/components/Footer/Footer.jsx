import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as='footer' py={{ base: 6, md: 8 }} zIndex={300} bgColor='white' w='100%'>
      <Flex justify='space-between' align='center' px='4' direction={{ base: "column-reverse", sm: "row" }} gap={4}>
        <Text>&copy; {new Date().getFullYear()} Amate Viajando ®</Text>
        <Flex>
          <Link href='https://www.instagram.com/amateviajando/' isExternal aria-label='Instagram' mx='2'>
            <FaInstagram size='24px' />
          </Link>
          <Link href='https://www.facebook.com' isExternal aria-label='Facebook' mx='2'>
            <FaFacebook size='24px' />
          </Link>
          <Link href='https://wa.me/5492942639282' isExternal aria-label='WhatsApp' mx='2'>
            <FaWhatsapp size='24px' />
          </Link>
          <Link href='mailto:amateviajandoreservas@gmail.com' aria-label='Email' mx='2'>
            <FaEnvelope size='24px' />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
