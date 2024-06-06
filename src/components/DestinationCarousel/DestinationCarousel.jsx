import './DestinationCarousel.css'
import { Box } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';

const DestinationCarousel = ({destination}) => {
  return (
    <>
      <Box w="full">
          {destination?.images && destination.images.length > 0 && (
            <Carousel
              className="w-full h-full"
              useKeyboardArrows={true}
              statusFormatter={() => {
                return <></>;
              }}
              showThumbs={false}
              maxW="50vh"
            >
              {destination.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image.url}
                    alt={image.alt}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                  <p className="legend">{image.description}</p>
                </div>
              ))}
            </Carousel>
          )}

      </Box>
    </>
  );
};

export default DestinationCarousel;
