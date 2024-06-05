import { Box, Card, Heading, Image, Link, Text } from "@chakra-ui/react";

const DestinationCards = ({ destination }) => {
  const { name, heading, description, _id, images } = destination;

  return (
    <Card key={_id}>
      <Link href={`/destinations/${_id}`} _hover={{ textDecoration: "none" }}>
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
      </Link>
    </Card>
  );
};

export default DestinationCards;
