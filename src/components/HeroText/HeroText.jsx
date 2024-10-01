import MyLink from "../../components/MyLink/MyLink";
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";

const HeroText = () => {
  return (
    <Box
    flex={{base: "0", md: "1"}}
      className="hero-text-wrapper"
      zIndex="2"
      overflow="hidden"
      w={{ base: "100vw", md: "min(960px, 90svw)" }}
    >
      <Box
        className={{base: "", md: "hero-text-parallax-effect"}}
        mx="auto"
      >
        <Flex
          direction="column"
          textAlign="center"
          spacing={4}
          w="100%"
          bgColor="rgba(255, 255, 255, 0.4)"
          px={{ base: 4, sm: 8, md: 16 }}
          py={4}
          borderRadius={{ base: "0", md: "16" }}
        >
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            lineHeight="tight"
            color="gray.800"
            mb={{ base: 4, md: 6 }}
            fontSize={{ base: "2xl", sm: "2xl", md: "3xl" }}
          >
            Descubre tu propósito viajando
          </Heading>
          <Text
            className="yeseva-one-regular"
            color="gray.700"
            fontSize={{
              base: "0.8rem",
              sm: "md",
            }}
            maxW={{
              base: "300px",
              sm: "450px",
              md: "660px",
              lg: "800x",
            }}
            lineHeight="relaxed"
            mx="auto"
            mb={{ base: 4, md: 6 }}
            letterSpacing="1.1px"
          >
            La naturaleza enciende nuestros sentidos, nos transporta a lugares
            mágicos donde podremos escuchar nuestra voz interior para iluminar
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
