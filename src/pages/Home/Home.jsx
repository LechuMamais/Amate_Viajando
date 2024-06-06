import'./Home.css';

import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box as="main" flex="1">
      <Box position="relative" w="full" h="100vh">
        <Image
          src="/assets/background.jpg"
          alt="Travel"
          objectFit="cover"
          w="full"
          h="full"
          position="absolute"
        />
        <Flex
          position="absolute"
          inset="0"
          bg="blackAlpha.500"
          align="center"
          justify="center"
          px={{ base: 4, md: 6 }}
        >
          <Box textAlign="center" spacing={4}>
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              lineHeight="tight"
              color="white"
              mb={4}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            >
              Descubre el mundo con nosotros
            </Heading>
            <Text className='yeseva-one-regular'
              color="gray.200"
              fontSize={{ base: "md", md: "xl", lg: "base", xl: "xl" }}
              lineHeight="relaxed"
              maxW="600px"
              mx="auto"
              mb={4}
            >
              Explora una amplia variedad de paquetes de viaje diseñados para satisfacer tus necesidades y hacer realidad tus sueños de aventura.
            </Text>
            <Link href="/destinations" _hover={{ textDecoration: "none" }}>
              <Button
                size="lg"
                colorScheme="gray"
                bg="gray.900"
                color="gray.100"
                _hover={{ bg: "gray.800", color: "gray.50" }}
                _focus={{
                  outline: "none",
                  ring: 1,
                  ringColor: "gray.950",
                  color: "gray.100"
                }}
                isDisabled={false}
              >
                Explorar
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home
