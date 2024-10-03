import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import './MySwiper.css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';

const MySwiper = ({ obj }) => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [],
      direction: 'horizontal', // Cambiado a horizontal para un mejor uso en pantallas touch
      loop: true,
      /*pagination: {
        el: '.swiper-pagination',
        clickable: true, // Hacer clic en los puntos de paginación
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },*/
    });

    return () => {
      swiper.destroy(); // Destruir la instancia de Swiper cuando el componente se desmonta
    };
  }, []);

  return (
    <Box className='swiper' h='100%'>
      <Box className='swiper-wrapper' h='100%'>
        {obj?.images?.map((img) => (
          <Box className='swiper-slide' key={img._id} minH='100%'>
            <img src={img.imgObj.url} alt={img.imgObj.alt} width={1920} height={1000} className='' />
          </Box>
        ))}
      </Box>
      <div className='swiper-pagination'></div>
    </Box>
  );
};

export default MySwiper;
