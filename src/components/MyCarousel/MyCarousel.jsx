import './MyCarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import { buildCloudinaryImageUrl } from '../../utils/buildCloudinaryImageUrl';

const MyCarousel = ({ obj }) => {
  return (
    <Box overflow='hidden'>
      {obj?.images && obj.images.length > 0 && (
        <Carousel
          key={obj.id || obj._id}
          useKeyboardArrows={true}
          statusFormatter={() => {
            return <></>;
          }}
          showThumbs={false}
        >
          {obj.images.map((img, index) => (
            <div key={index} className='carousel-img-container'>
              <img
                src={buildCloudinaryImageUrl(img.imgObj.url, window.innerWidth, window.innerHeight)}
                alt={img.imgObj.alt}
              />
            </div>
          ))}
        </Carousel>
      )}
    </Box>
  );
};

export default MyCarousel;
