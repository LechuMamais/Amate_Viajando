import "./Home.css";
import { useEffect } from "react";
import MyLink from "../../components/MyLink/MyLink";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { handleHomeScroll } from "../../handleScroll/handleHomeScroll";

const Home = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleHomeScroll);
    return () => {
      window.removeEventListener("scroll", handleHomeScroll);
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
          <Box textAlign="center" spacing={4} className="hero" >
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              lineHeight="tight"
              color="white"
              mb={4}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            >
              Descubre tu propósito viajando
            </Heading>
            <Text
              className="yeseva-one-regular"
              color="gray.200"
              fontSize={{ base: "0.8rem",sm: "md",  md: "xl", lg: "base", xl: "xl" }}
              width={{
                base: "300px",
                sm: "450px",
                md: "700px",
                lg: "800px",
              }}
              lineHeight="relaxed"
              mx="auto"
              mb={6}
              letterSpacing="1.1px"
            >
              La naturaleza enciende nuestros sentidos, nos transporta a lugares
              mágicos dónde podremos escuchar a nuestra voz interior para
              iluminar el destino correcto en ésta gran aventura.
              <br />
              Están listos?
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
                  color: "gray.100",
                }}
                isDisabled={false}
              >
                Vamos
              </Button>
            </MyLink>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
