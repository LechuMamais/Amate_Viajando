import MySwiper from '../MySwpiper/MySwiper';
import MyCarousel from '../MyCarousel/MyCarousel';
import { useCheckMobile } from '../../customHooks/useCheckMobile/useCheckMobile';

const ResponsiveCarousel = ({ obj }) => {
  const isMobileDevice = useCheckMobile();

  return <>{isMobileDevice ? <MySwiper obj={obj} /> : <MyCarousel obj={obj} />}</>;
};

export default ResponsiveCarousel;
