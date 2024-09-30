import "./Home.css";
import { useEffect } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Lumiflex } from "uvcanvas";
import { handleHomeScroll } from "../../handleScroll/handleHomeScroll";
import HeroText from "../../components/HeroText/HeroText";

const Home = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleHomeScroll);
    return () => {
      window.removeEventListener("scroll", handleHomeScroll);
    };
  }, []);

  const heroImageUrl = "/assets/LogoAmate_1024_ajustado_2.png";

  return (
    <Box as="main" flex="1" minHeight="calc(100vh-72px)">
      <Box
        minH="100vh"
        className="hero-background"
        w="100%"
        h="100px"
        position="absolute"
        top="0px"
        left="0px"
      >
        <Lumiflex />
      </Box>
      <Flex
        className="hero"
        direction="column"
        justifyContent="space-evenly"
        w="100%"
        minH="100vh"
        maxH="1400px"
        mt="-72px"
      >
        <Flex
          className="hero-wrapper"
          direction="column"
          gap="clamp(2rem, 8vh, 24rem)"
          w="clamp(80%, 90%, 1024px)"
          h="100%"
          alignItems="center"
          justifyContent="space-evenly"
          mx="auto"
        >
          <Flex
            direction="column"
            alignItems="center"
            justifyItems="center"
            w="clamp(320px, 75vmin, 1024px)"
          >
            <Image
              src={heroImageUrl}
              alt="Amate_Viajando_Logo"
              objectFit="cover"
              mt={{ base: 2}}
              zIndex="1"
            />
          </Flex>
          <HeroText/>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
