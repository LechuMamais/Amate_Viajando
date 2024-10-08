import 'swiper/css';
import './MySwiper.css';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import Swiper from 'swiper';
import SwiperImage from '../SwiperImage/SwiperImage';

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
          <SwiperImage img={img} key={img._id} />
        ))}
      </Box>
    </Box>
  );
};

export default MySwiper;
