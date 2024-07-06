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
import MyCarousel from "../MyCarousel/MyCarousel";
import CardsList from "../CardsList/CardsList";
import MyLink from "../MyLink/MyLink";
import { useContext } from "react";
import { DestinationContext } from "../../providers/DestinationProvider";
import { AllDestinationsContext } from "../../providers/AllDestinationsProvider";
import { useEffect } from "react";
import { handleDetailsPageScroll } from "../../handleScroll/handleDetailsPageScroll";

const DetailsPage = ({ obj, descriptionParagraphs, usingFor, children }) => {
  const { destination } = useContext(DestinationContext);
  const { allDestinations } = useContext(AllDestinationsContext);

  useEffect(() => {
    window.addEventListener("scroll", handleDetailsPageScroll);
    return () => {
      window.removeEventListener("scroll", handleDetailsPageScroll);
    };
  }, []);

  return (
    <>
      <MyCarousel obj={obj} />
      <Container
        maxW="928px"
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
          <Box px={{ base: 4, sm: 6, md: 0 }}>
            <Heading size="xl" fontWeight="bold">
              {obj?.heading}
            </Heading>
            <Stack spacing={4} mt={6} mb={4}>
              {Array.isArray(descriptionParagraphs) &&
                descriptionParagraphs.map((paragraph, index) => (
                  <Text
                    key={index}
                    maxW="90ch"
                    textAlign="justify"
                    color="gray.600"
                    lineHeight="1.5em"
                    letterSpacing={{ base: 0, md: "0.04em" }}
                    fontSize="lg"
                  >
                    {paragraph}
                  </Text>
                ))}
            </Stack>
          </Box>
          {children}
          <CardsList
            headingText={`Otros destinos`}
            descriptionText={"De la Patagonia Argentina"}
            arrayToRender={allDestinations?.filter(
              (dest) => dest._id !== destination?._id
            )}
            usingFor={"destinations"}
          />
        </Flex>
      </Container>
    </>
  );
};

export default DetailsPage;
