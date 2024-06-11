import "./CardsList.css";
import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";

import Cards from "../Cards/Cards";

const CardsList = ({ headingText, descriptionText, arrayToRender, usingFor }) => {
  return (
    <Box w="full" py={{ base: 12, md: 24, lg: 32 }}>
      <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
        <Box textAlign="center" mb={8}>
          <Heading
            as="h2"
            size="2xl"
            fontWeight="bold"
            lineHeight="tight"
            mb={4}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
          >
            {headingText}
          </Heading>
          <Text
            color="gray.500"
            fontSize={{ base: "md", md: "xl", lg: "base", xl: "xl" }}
            lineHeight="relaxed"
            maxW="700px"
            mx="auto"
          >
            {descriptionText}
          </Text>
        </Box>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={6}
        >
          {arrayToRender?.map((obj) => (
            <Cards key={obj._id} obj={obj} usingFor={usingFor}/>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CardsList;
