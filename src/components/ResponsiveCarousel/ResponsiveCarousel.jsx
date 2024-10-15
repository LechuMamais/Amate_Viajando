import MySwiper from '../MySwpiper/MySwiper';
import MyCarousel from '../MyCarousel/MyCarousel';
import { useCheckMobile } from '../../customHooks/useCheckMobile/useCheckMobile';
import { Box } from '@chakra-ui/react';

const ResponsiveCarousel = ({ obj }) => {
  const isMobileDevice = useCheckMobile();
  return <Box overflow='hidden'>{isMobileDevice ? <MySwiper obj={obj} /> : <MyCarousel obj={obj} />}</Box>;
};

export default ResponsiveCarousel;
