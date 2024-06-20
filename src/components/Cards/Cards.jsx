import "./Cards.css";
import { Box, Card, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import MyLink from "../MyLink/MyLink";
import { buildCardEndPoint } from "../../utils/buildCardEndPoint";

const Cards = ({ obj, usingFor }) => {
  const { heading, description, _id, images } = obj;
  const { destination_id } = useParams();

  return (
    <Card key={_id}>
      <MyLink to={buildCardEndPoint(usingFor, _id, destination_id)}>
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
