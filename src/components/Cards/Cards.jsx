import { Box, Card, Heading, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import MyLink from '../MyLink/MyLink';
import { buildCardEndPoint } from '../../utils/buildCardEndPoint';

const Cards = ({ obj, usingFor }) => {
  const { heading, description, _id, images } = obj;
  const { destination_id } = useParams();

  return (
    <Card
      variant='elevated'
      borderRadius='xl'
      overflow='hidden'
      transition='all 400ms ease-in'
      _hover={{ boxShadow: '2px 2px 8px 4px rgba(0,0,0,0.06)' }}
    >
      <MyLink to={buildCardEndPoint(usingFor, obj, _id, destination_id)}>
        <Box>
          {images?.length > 0 ? (
            <Image
              src={images[0]?.imgObj?.url}
              alt={images[0]?.imgObj?.alt}
              w='100%'
              height={{ base: '300', sm: '400' }}
              objectFit='cover'
            />
          ) : (
            <Box bg='gray.100' height={{ base: '300', sm: '400' }}></Box>
          )}

          <Box p={{ base: 4, sm: 6 }}>
            <Heading as='h3' size='md' fontWeight='semibold'>
              {heading}
            </Heading>
            <Text mt={2} color='gray.500'>
              {description}
            </Text>
          </Box>
        </Box>
      </MyLink>
    </Card>
  );
};

export default Cards;
