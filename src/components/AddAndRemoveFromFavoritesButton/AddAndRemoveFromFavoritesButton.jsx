import { Flex, Button, Text } from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import useFavoriteTour from '../../customHooks/useFavoriteTour/useFavoriteTour';

import React from 'react';
import { useTranslation } from 'react-i18next';

const AddAndRemoveFromFavoritesButton = React.memo(({ tour_id, destination_id, type = 'icon' }) => {
  const { isFavorite, handleAddToFavorites, handleRemoveFromFavorites } = useFavoriteTour(tour_id, destination_id);
  const { t } = useTranslation('AddAndRemoveFromFavoritesButton');

  return (
    <Flex my={4} mx={0} direction={{ base: 'column', md: 'row' }} gap={0}>
      {type === 'icon' ? (
        <Button
          size='lg'
          onClick={(e) => {
            e.preventDefault();
            isFavorite ? handleRemoveFromFavorites() : handleAddToFavorites();
          }}
          leftIcon={isFavorite ? <FaHeart size='28px' /> : <FaRegHeart size='28px' />}
          color='red'
          variant='link'
          _hover={{ transform: 'scale(1.05)' }}
        />
      ) : (
        <Button size='lg' onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}>
          <Text>{isFavorite ? t('delete') : t('add')}</Text>
        </Button>
      )}
    </Flex>
  );
});

AddAndRemoveFromFavoritesButton.displayName = 'AddAndRemoveFromFavoritesButton';

export default AddAndRemoveFromFavoritesButton;
