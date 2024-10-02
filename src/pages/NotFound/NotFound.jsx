import { Box, Text, Button, VStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      as='main'
      flex='1'
      textAlign='center'
      py={10}
      px={6}
      minH='100vh'
      //bgGradient="linear(to-r, teal.400, blue.500)"
      bgColor='#F8F8F8'
      //color="white"
    >
      <VStack spacing={6} alignItems='center'>
        {/*<Heading as="h1" fontSize="6xl">
          404
        </Heading>*/}

        <Image src='/assets/err_404.png' alt='ERROR 404 - Not found' maxW='300px' />

        <Text fontSize='2xl' mt={3}>
          Oops! Página no encontrada.
        </Text>
        <Text fontSize='lg' maxW='lg' mt={2}>
          Lo sentimos, pero la página que estás buscando no existe o ha sido movida. Por favor, verifica la URL o
          regresa al inicio.
        </Text>

        <Link to='/'>
          <Button colorScheme='teal' bg='teal.600' color='white' size='lg' px={8} _hover={{ bg: "teal.700" }}>
            Volver al inicio
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default NotFound;
