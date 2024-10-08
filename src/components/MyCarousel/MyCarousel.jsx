import './MyCarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Box, Skeleton } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import { buildCloudinaryImageUrl } from '../../utils/buildCloudinaryImageUrl';
import { useEffect, useState } from 'react';

const MyCarousel = ({ obj }) => {
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    if (obj?.images) {
      setLoading(true);
    }
  }, [obj]);

  return (
    <Box overflow='hidden'>
      {obj?.images && obj.images.length > 0 && (
        <Skeleton height='calc(100vh-72px)' width='100%' isLoaded={!loading} fadeDuration={1}>
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
                  onLoad={() => {
                    setLoading(false);
                  }}
                />
              </div>
            ))}
          </Carousel>
        </Skeleton>
      )}
    </Box>
  );
};

export default MyCarousel;
