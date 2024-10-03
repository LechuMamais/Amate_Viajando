import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';

const CardSkeletonLoader = () => {
  return (
    <Box borderRadius='xl' overflow='hidden'>
      <Skeleton height={{ base: '300px', sm: '400px' }} width='100%' />
      <Box p={{ base: 4, sm: 6 }}>
        <Skeleton height='20px' width='60%' mb={4} />
        <SkeletonText noOfLines={3} spacing='4' skeletonHeight='16px' />
      </Box>
    </Box>
  );
};

export default CardSkeletonLoader;
