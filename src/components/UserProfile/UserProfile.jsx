import { Box, Button, Flex, Skeleton, Text } from '@chakra-ui/react';
import CardsList from '../CardsList/CardsList';
import MyLink from '../MyLink/MyLink';
import { useTranslation } from 'react-i18next';

const UserProfile = ({ user, loading }) => {
  const transformedFavouriteTours = user.favouriteTours?.map((favTour) => ({
    tour_id: favTour.tourId._id,
    destinationId: favTour.destinationId,
    ...favTour.tourId,
  }));
  const { t } = useTranslation('UserProfile');
  return (
    <Flex direction='column' gap={8}>
      <Skeleton height='40px' w='100%' isLoaded={!loading} fadeDuration={2}>
        <Box>
          <Text fontSize='xl' fontWeight='bold'>
            {user.userName}
          </Text>
        </Box>
      </Skeleton>
      <CardsList
        headingText={t('FavouriteTours')}
        descriptionText={''}
        arrayToRender={transformedFavouriteTours}
        usingFor={'favouriteTours'}
        loading={loading}
      />
      {user.favouriteTours.length === 0 && (
        <Flex direction='column' alignItems='center' gap={4}>
          <Text textAlign='center'>{t('NoFavouriteTours')}</Text>
          <MyLink to='/destinations'>
            <Button size='lg' p={6} mx='auto' my={{ base: 2, md: 3, lg: 4 }} fontWeight={'light'}>
              {t('SeeDestinations')}
            </Button>
          </MyLink>
        </Flex>
      )}
    </Flex>
  );
};

export default UserProfile;
