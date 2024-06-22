import { useEffect } from 'react';
import MyLink from '../../components/MyLink/MyLink';
import'./Home.css';

import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxTranslateFactor = -1.5;
      const parallaxScaleFactor = 0.001
      const scrolled = window.scrollY;
      const heroElement = document.querySelector('.hero');
      if (heroElement) {
        heroElement.style.transform = `translateY(${scrolled * parallaxTranslateFactor}px)`;
        heroElement.style.transform = `scale(${1+ scrolled * parallaxScaleFactor})`;
      }
      console.log(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Box as="main" flex="1">
      <Box position="relative" w="full" h="calc(100vh - 72px)">
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
          <Box textAlign="center" spacing={4} className='hero'>
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
            <MyLink to="/destinations">
              <Button
                size="lg"
                colorScheme="whiteAlpha"
                px={16}
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
            </MyLink>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home
