import { useEffect, useState } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';

export const useCheckMobile = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const isMobileViewport = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkTouchDevice();
  }, []);

  return isTouchDevice && isMobileViewport;
};
