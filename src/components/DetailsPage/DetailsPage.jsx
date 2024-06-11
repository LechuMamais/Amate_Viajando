import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import MyCarousel from "../../components/DestinationCarousel/MyCarousel";
import CardsList from "../CardsList/CardsList";
import MyLink from "../MyLink/MyLink";
import { useContext } from "react";
import { DestinationContext } from "../../providers/DestinationProvider";

const DetailsPage = ({ obj, descriptionParagraphs, usingFor }) => {
  const { destination } = useContext(DestinationContext);
  return (
    <>
      <MyCarousel obj={obj} />
      <Container
        maxW="container.lg"
        px={{ base: 4, md: 6 }}
        py={{ base: 12, md: 24, lg: 32 }}
      >
        {usingFor == "destination" && (
          <MyLink to="/destinations">
            <Button
              size="lg"
              variant="link"
              p={6}
              pl={0}
              my={{ base: 2, md: 3, lg: 4 }}
              fontWeight={"light"}
            >
              Más Destinos
            </Button>
          </MyLink>
        )}
        <Flex direction="column" gap={6}>
          <Box>
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
          </Box>
          {usingFor == "destination" && (
            <CardsList
              headingText={`Tours en ${obj?.name}`}
              descriptionText={"Seleccionados para tí"}
              arrayToRender={obj?.tours}
            />
          )}
          {usingFor == "tour" && (
            <CardsList
              headingText={`Otros tours en ${destination?.name}`}
              descriptionText={"Seleccionados para tí"}
              arrayToRender={destination?.tours.filter((tour, index) =>tour._id !== obj?._id)}
            />
          )}
        </Flex>
      </Container>
    </>
  );
};

export default DetailsPage;
