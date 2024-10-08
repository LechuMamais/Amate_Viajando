import { useState } from 'react';
import { buildCloudinaryImageUrl } from '../../utils/buildCloudinaryImageUrl';
import { Box, Skeleton } from '@chakra-ui/react';

const SwiperImage = ({ img }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Skeleton className='swiper-slide' key={img._id} h='100%' w='100%' isLoaded={!loading} fadeDuration={1}>
      <Box>
        <img
          src={buildCloudinaryImageUrl(img.imgObj.url, window.innerWidth, window.innerHeight)}
          alt={img.imgObj.alt}
          onLoad={() => setLoading(false)}
        />
      </Box>
    </Skeleton>
  );
};

export default SwiperImage;
