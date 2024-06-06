import "./Footer.css";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Box py="4">
        <Flex justify="space-between" align="center" px="6">
          <Text>&copy; {new Date().getFullYear()} Amate Viajando. Todos los derechos reservados.</Text>
          <Flex>
            <Link href="https://www.instagram.com/amateviajando/" isExternal aria-label="Instagram" mx="2">
              <FaInstagram size="24px" />
            </Link>
            <Link href="https://www.facebook.com" isExternal aria-label="Facebook" mx="2">
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://wa.me/5492942639282" isExternal aria-label="WhatsApp" mx="2">
              <FaWhatsapp size="24px" />
            </Link>
            <Link href="mailto:amateviajandoreservas@gmail.com" aria-label="Email" mx="2">
              <FaEnvelope size="24px" />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </footer>
  );
};

export default Footer;
