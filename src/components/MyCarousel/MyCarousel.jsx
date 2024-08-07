import './MyCarousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = ({obj}) => {
  return (
      <Box w="full" overflow="hidden">
          {obj?.images && obj.images.length > 0 && (
            <Carousel
             className="w-full"
              useKeyboardArrows={true}
              statusFormatter={() => {
                return <></>;
              }}
              showThumbs={false}
            >
              {obj.images.map((image, index) => (
                <div key={index} className='carousel-img-container'>
                  <img
                    src={image.imgObj.url}
                    alt={image.imgObj.alt}
                    width={1920}
                    height={1000}
                    className="w-full  object-cover"
                  />
                  {/*<p className="legend">{image.description}</p>*/}
                </div>
              ))}
            </Carousel>
          )}

      </Box>
  );
};

export default MyCarousel;
