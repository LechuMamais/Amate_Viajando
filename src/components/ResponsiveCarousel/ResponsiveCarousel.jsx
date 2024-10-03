import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import MySwiper from '../MySwpiper/MySwiper';
import MyCarousel from '../MyCarousel/MyCarousel';

const ResponsiveCarousel = ({ obj }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouchDevice();
  }, []);

  return (
    <Box w='100%' h='100%'>
      {isTouchDevice ? <MySwiper obj={obj} /> : <MyCarousel obj={obj} />}
    </Box>
  );
};

export default ResponsiveCarousel;
