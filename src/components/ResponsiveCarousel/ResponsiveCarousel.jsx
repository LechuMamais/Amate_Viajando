import { useEffect, useState } from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import MySwiper from '../MySwpiper/MySwiper';
import MyCarousel from '../MyCarousel/MyCarousel';

const ResponsiveCarousel = ({ obj }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const isMobileViewport = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouchDevice();
  }, []);

  const shouldUseMobileComponent = isTouchDevice && isMobileViewport;

  return (
    <Box w='100%' h='100%'>
      {shouldUseMobileComponent ? <MySwiper obj={obj} /> : <MyCarousel obj={obj} />}
    </Box>
  );
};

export default ResponsiveCarousel;
