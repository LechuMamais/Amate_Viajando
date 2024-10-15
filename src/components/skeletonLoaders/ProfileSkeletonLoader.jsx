import { Box, Container } from '@chakra-ui/react';
import CardsList from '../CardsList/CardsList';

const ProfileSkeletonLoader = () => {
  return (
    <Box as='main' flex={1}>
      <Container maxW='container.lg' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
        <CardsList loading='true'></CardsList>
      </Container>
    </Box>
  );
};

export default ProfileSkeletonLoader;
