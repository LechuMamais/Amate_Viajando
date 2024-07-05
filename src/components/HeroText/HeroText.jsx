import "./HeroText.css";
import MyLink from "../../components/MyLink/MyLink";
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";

const HeroText = () => {
  return (
    <Box
      w="100vw"
      mx="auto"
      position="absolute"
      bottom={{ base: "144px", sm: "110px" }}
      zIndex="2"
      className="hero-text-container"
    >
      <Flex
        direction="column"
        textAlign="center"
        spacing={4}
        mx="auto"
        bgColor="rgba(255, 255, 255, 0.25)"
        px={6}
        py={4}
        borderRadius={{ base: "0", md: "16" }}
        w={{ base: "100vw", md: "700px", lg: "860px"}}
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
          lineHeight="tight"
          color="gray.800"
          mb={4}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        >
          Descubre tu propósito viajando
        </Heading>
        <Text
          className="yeseva-one-regular"
          color="gray.700"
          fontSize={{
            base: "0.8rem",
            sm: "md",
            md: "lg",
            lg: "base",
            xl: "lg",
          }}
          width={{
            base: "300px",
            sm: "450px",
            md: "660px",
            lg: "800x",
          }}
          lineHeight="relaxed"
          mx="auto"
          mb={6}
          letterSpacing="1.1px"
        >
          La naturaleza enciende nuestros sentidos, nos transporta a lugares
          mágicos dónde podremos escuchar nuestra voz interior para iluminar el
          destino correcto en ésta gran aventura.
          <br />
          Están listos?
        </Text>
        <MyLink to="/destinations">
          <Button
            size="lg"
            colorScheme="blackAlpha"
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
      </Flex>
    </Box>
  );
};

export default HeroText;
