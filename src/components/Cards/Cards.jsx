import './Cards.css'
import { Box, Card, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyLink from "../MyLink/MyLink";

const Cards = ({ obj }) => {
  const { heading, description, _id, images } = obj;
  const { destination_id } = useParams();
  const [url, setUrl] = useState('');

  const buildCardLink = () => {
    let link = '';
    if (!destination_id) {
      link = `/destinations/${_id}`;
    } else if (destination_id) {
      link = `/destinations/${destination_id}/tours/${_id}`;
    }
    return link;
  };

  useEffect(() => {
    setUrl(buildCardLink());
  }, [_id, destination_id]);

  return (
    <Card key={_id}>
      <MyLink
        to={url}
      >
        <Box overflow="hidden" borderRadius="xl">
          <Image
            src={images[0].url}
            alt={images[0].alt}
            width={600}
            height={400}
            objectFit="cover"
            transition="all 0.3s"
            _groupHover={{ transform: "scale(1.05)" }}
          />
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
