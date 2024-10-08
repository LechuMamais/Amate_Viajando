import { useState } from 'react';
import { buildCloudinaryImageUrl } from '../../utils/buildCloudinaryImageUrl';
import { Box, Image, Skeleton } from '@chakra-ui/react';

const SwiperImage = ({ img }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Skeleton
      className='swiper-slide'
      key={img._id}
      h='calc(100lvh - 72px)'
      w='100%'
      isLoaded={!loading}
      fadeDuration={1}
      overflow='hidden'
    >
      <Box>
        <Image
          src={buildCloudinaryImageUrl(img.imgObj.url, window.innerWidth, window.innerHeight)}
          alt={img.imgObj.alt}
          onLoad={() => setLoading(false)}
        />
      </Box>
    </Skeleton>
  );
};

export default SwiperImage;
