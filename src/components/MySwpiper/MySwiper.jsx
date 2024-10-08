import 'swiper/css';
import './MySwiper.css';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import Swiper from 'swiper';
import { buildCloudinaryImageUrl } from '../../utils/buildCloudinaryImageUrl';

const MySwiper = ({ obj }) => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [],
      direction: 'horizontal',
      loop: true,
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <Box className='swiper carousel' h='100%'>
      <Box className='swiper-wrapper' h='100%'>
        {obj?.images?.map((img) => (
          <Box className='swiper-slide' key={img._id} minH='100%'>
            <img
              src={buildCloudinaryImageUrl(img.imgObj.url, window.innerWidth, window.innerHeight)}
              alt={img.imgObj.alt}
              width={1920}
              height={1000}
              className=''
            />
          </Box>
        ))}
      </Box>
      <div className='swiper-pagination'></div>
    </Box>
  );
};

export default MySwiper;
