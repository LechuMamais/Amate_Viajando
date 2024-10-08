import { useEffect } from 'react';
import Swiper from 'swiper';

const useSwiper = (swiperContainerClass, obj) => {
  useEffect(() => {
    const swiper = new Swiper(swiperContainerClass, {
      modules: [],
      direction: 'horizontal',
      loop: true,
    });

    return () => {
      swiper.destroy();
    };
  }, [swiperContainerClass, obj]);
};

export default useSwiper;
