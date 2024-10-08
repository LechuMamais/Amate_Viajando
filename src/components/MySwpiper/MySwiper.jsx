import 'swiper/css';
import { Box } from '@chakra-ui/react';
import SwiperImage from '../SwiperImage/SwiperImage';
import useSwiper from '../../customHooks/useSwiper/useSwiper';

const MySwiper = ({ obj }) => {
  useSwiper('.swiper', obj);

  return (
    <Box className='swiper' h='100%'>
      <Box className='swiper-wrapper' h='100%'>
        {obj?.images?.map((img) => (
          <SwiperImage img={img} key={img._id} />
        ))}
      </Box>
    </Box>
  );
};

export default MySwiper;
