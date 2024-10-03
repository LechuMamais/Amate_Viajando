import { useBreakpointValue, Box } from '@chakra-ui/react';
import MySwiper from '../MySwpiper/MySwiper';
import MyCarousel from '../MyCarousel/MyCarousel';

const ResponsiveCarousel = ({ obj }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box w='100%' h='100%'>
      {isMobile ? <MySwiper obj={obj} /> : <MyCarousel obj={obj} />}
    </Box>
  );
};

export default ResponsiveCarousel;
