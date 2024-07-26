import "./HeroText.css";
import MyLink from "../../components/MyLink/MyLink";
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";

const HeroText = () => {
  return (
    <Box
      className="hero-text-wrapper"
      w="100lvw"
      position="absolute"
      bottom={{ base: "111px", sm: "71px", md: "110px" }}
      zIndex="2"
      overflow="hidden"
    >
      <Box
        className="hero-text-parallax-effect"
        w={{ base: "100%", md: "min(800px, 90%)" }}
        mx="auto"
      >
        <Flex
          direction="column"
          textAlign="center"
          spacing={4}
          mx="auto"
          bgColor="rgba(255, 255, 255, 0.25)"
          px={2}
          py={4}
          borderRadius={{ base: "0", md: "16" }}
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
            maxW={{
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
            mágicos dónde podremos escuchar nuestra voz interior para iluminar
            el destino correcto en ésta gran aventura.
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
    </Box>
  );
};

export default HeroText;
