import { useState, useEffect, useContext, useCallback } from 'react';
import { useToast } from '@chakra-ui/react';
import { UserContext } from '../../providers/UserProvider';
import { isTourInFavorites, handleAddFavorite, handleRemoveFavorite } from './useFavoriteTour.functions';

const useFavoriteTour = (tour_id, destination_id) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const toast = useToast();

  useEffect(() => {
    setIsFavorite(isTourInFavorites(user, tour_id, destination_id));
  }, [user, tour_id, destination_id]);

  const handleAddToFavorites = useCallback(async () => {
    await handleAddFavorite({ user, tour_id, destination_id, setUser, toast, setIsFavorite });
  }, [user, tour_id, destination_id, setUser, toast]);

  const handleRemoveFromFavorites = useCallback(async () => {
    await handleRemoveFavorite({ user, tour_id, destination_id, setUser, toast, setIsFavorite });
  }, [user, tour_id, destination_id, setUser, toast]);

  return {
    isFavorite,
    handleAddToFavorites,
    handleRemoveFromFavorites,
  };
};

export default useFavoriteTour;
