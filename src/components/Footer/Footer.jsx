import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      as='footer'
      py={{ base: 6, md: 8 }}
      zIndex={300}
      bgColor='white'
      w='100%'
      //boxShadow='inset 0px 8px 24px 2px rgba(201,201,201,1)'
      bgImage='linear-gradient(
        0deg,
        hsl(0deg 0% 100%) 1%,
        hsl(0deg 0% 100%) 31%,
        hsl(0deg 0% 100%) 43%,
        hsl(0deg 0% 100%) 52%,
        hsl(0deg 0% 100%) 59%,
        hsl(0deg 0% 100%) 64%,
        hsl(0deg 0% 100%) 69%,
        hsl(0deg 0% 100%) 73%,
        hsl(0deg 0% 100%) 76%,
        hsl(0deg 0% 100%) 80%,
        hsl(0deg 0% 100%) 82%,
        hsl(0deg 0% 100%) 85%,
        hsl(0deg 0% 100%) 87%,
        hsl(0deg 0% 98%) 89%,
        hsl(0deg 0% 97%) 91%,
        hsl(0deg 0% 95%) 92%,
        hsl(0deg 0% 94%) 94%,
        hsl(0deg 0% 92%) 95%,
        hsl(0deg 0% 91%) 96%,
        hsl(0deg 0% 89%) 97%,
        hsl(0deg 0% 87%) 98%,
        hsl(0deg 0% 85%) 98%,
        hsl(0deg 0% 84%) 99%,
        hsl(0deg 0% 82%) 99%,
        hsl(0deg 0% 80%) 100%
      )'
    >
      <Flex justify='space-between' align='center' px='4' direction={{ base: 'column-reverse', sm: 'row' }} gap={4}>
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
