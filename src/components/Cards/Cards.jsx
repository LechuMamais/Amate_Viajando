import { Box, Card, Heading, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import MyLink from '../MyLink/MyLink';
import { buildCardEndPoint } from '../../utils/buildCardEndPoint';
import { buildCloudinaryImageUrl } from '../../utils/buildCloudinaryImageUrl';
import { useCheckMobile } from '../../customHooks/useCheckMobile/useCheckMobile';

const Cards = ({ obj, usingFor, heading, description, destinationID = null }) => {
  const { _id, images } = obj;
  const { destination_id } = useParams();
  const isMobileDevice = useCheckMobile();
  const transformScaleFactor = isMobileDevice ? 1 : 1.02;
  const imageWidth = Math.ceil(736 * transformScaleFactor);

  return (
    <Card
      variant='elevated'
      borderRadius='xl'
      overflow='hidden'
      transition='box-shadow 400ms ease-in'
      _hover={{
        boxShadow: '2px 2px 8px 4px rgba(0,0,0,0.06)',
        '.chakra-link .card-image': {
          transform: `scale(${transformScaleFactor})`,
          transition: 'transform 1000ms ease',
        },
      }}
    >
      <MyLink to={buildCardEndPoint(usingFor, obj, _id, destination_id ? destination_id : destinationID)}>
        {images?.length > 0 ? (
          <Box overflow='hidden'>
            <Image
              className='card-image'
              src={buildCloudinaryImageUrl(images[0]?.imgObj?.url, imageWidth)}
              alt={images[0]?.imgObj?.alt}
              w='100%'
              height={{ base: '300', sm: '400' }}
              objectFit='cover'
              transition='transform 1600ms ease-in-out 400ms'
            />
          </Box>
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
      </MyLink>
    </Card>
  );
};

export default Cards;
