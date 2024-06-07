import './MyCarousel.css'
import { Box } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = ({obj}) => {
  return (
    <>
      <Box w="full">
          {obj?.images && obj.images.length > 0 && (
            <Carousel
              className="w-full h-full"
              useKeyboardArrows={true}
              statusFormatter={() => {
                return <></>;
              }}
              showThumbs={false}
            >
              {obj.images.map((image, index) => (
                <div key={index} className='carousel-img-container'>
                  <img
                    src={image.url}
                    alt={image.alt}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                  {/*<p className="legend">{image.description}</p>*/}
                </div>
              ))}
            </Carousel>
          )}

      </Box>
    </>
  );
};

export default MyCarousel;
