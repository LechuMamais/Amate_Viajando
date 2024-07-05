import "./Home.css";
import { useEffect } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { handleHomeScroll } from "../../handleScroll/handleHomeScroll";
import HeroText from "../../components/HeroText/HeroText";

const Home = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleHomeScroll);
    return () => {
      window.removeEventListener("scroll", handleHomeScroll);
    };
  }, []);

  const imageWidth = 720;
  const imageWidthPX = imageWidth + "px";

  return (
    <Box as="main" flex="1">
      <Flex
        direction="row"
        minH="calc(100vh - 72px)"
        className="hero-background"
      >
        <Box bgColor="#cfffda" w="calc(50vw - 360px)"></Box>
        <Box w={imageWidthPX} flex="1" className="hero">
          <Flex direction="column" alignItems="center">
            <Image
              src="/assets/background.png"
              alt="Travel"
              objectFit="cover"
              w="100%"
              mt={{base: 0, sm: 0, md: "-80px"}}
              zIndex="1"
              opacity="0.65"
            />
          </Flex>
        </Box>
        <Box bgColor="#95baff" w="calc(50vw - 360px)"></Box>
      </Flex>
      <HeroText />
    </Box>
  );
};

export default Home;
