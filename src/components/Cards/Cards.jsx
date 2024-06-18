import "./Cards.css";
import { Box, Card, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import MyLink from "../MyLink/MyLink";

const Cards = ({ obj, usingFor }) => {
  const { heading, description, _id, images } = obj;
  const { destination_id } = useParams();

  //console.log(obj)

  const buildCardLink = () => {
    if (usingFor === "destinations") {
      return `/destinations/${_id}`;
    } else if (usingFor === "tours") {
      return `/destinations/${destination_id}/tours/${_id}`;
    } else if (usingFor === "updateDestinations") {
      return `/update-destination/${_id}`;
    }else if (usingFor === "updateTours") {
      return `/update-tour/${_id}`;
    }
  };

  return (
    <Card key={_id}>
      <MyLink to={buildCardLink()}>
        <Box overflow="hidden" borderRadius="xl">
          {images &&<Image
            src={images[0]?.imgObj?.url}
            alt={images[0]?.imgObj?.alt}
            width={700}
            height={400}
            objectFit="cover"
          />}
          
          <Box p={{ base: 4, sm: 6 }}>
            <Heading as="h3" size="md" fontWeight="semibold">
              {heading}
            </Heading>
            <Text mt={2} color="gray.500">
              {description}
            </Text>
          </Box>
        </Box>
      </MyLink>
    </Card>
  );
};

export default Cards;
