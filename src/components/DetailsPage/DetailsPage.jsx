import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Link,
  Box,
} from "@chakra-ui/react";
import MyCarousel from "../../components/DestinationCarousel/MyCarousel";

const DetailsPage = ({obj, descriptionParagraphs}) => {
  return (
    <>
      <MyCarousel obj={obj} />
      <Box w="full" py={{ base: 12, md: 24, lg: 32 }}>
        <section w="full" py={{ base: 12, md: 24, lg: 32 }}>
          <Container maxW="container.lg" px={{ base: 4, md: 6 }}>
            <Link href="/destinations">
              <Button
                size="lg"
                variant="link"
                p={6}
                pl={0}
                my={{ base: 2, md: 3, lg: 4 }}
                fontWeight={"light"}
              >
                Otros Destinos
              </Button>
            </Link>
            <Flex direction="column" gap={6}>
              <div className="space-y-4">
                <Heading size="xl" fontWeight="bold">
                  {obj?.heading}
                </Heading>
                <Stack spacing={3} my={4}>
                  {Array.isArray(descriptionParagraphs) &&
                    descriptionParagraphs.map((paragraph, index) => {
                      return (
                        <Text key={index} color="gray.500">
                          {paragraph}
                        </Text>
                      );
                    })}
                </Stack>
              </div>
              <Flex direction={{ base: "column", md: "row" }} gap={2}>
                <Button size="lg" className="w-full">
                  Reservar Ahora
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Agregar al Carrito
                </Button>
              </Flex>
            </Flex>
          </Container>
        </section>
      </Box>
    </>
  );
};

export default DetailsPage;
