import { useState, useContext, useMemo } from 'react';
import { useToast } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteAllImages } from '../../services/deleteAllImages';
import { UserContext } from '../../providers/UserProvider';
import { handleDeteteTour, submitHandler } from './useUpdateTour.functions';
import { useFetch } from '../useFetch/useFetch';
import { fetchManager } from '../../resources/fetchManager';

export const useUpdateTour = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { tour_id } = useParams();
  const args = useMemo(() => [tour_id, 'all'], [tour_id]);
  const { data: tour, loading } = useFetch(fetchManager.tour, args);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const toast = useToast();

  const onSubmit = async (data) => {
    setLoadingSubmit(true);
    await submitHandler(data, user.token, tour, tour_id, toast, navigate);
    setLoadingSubmit(false);
  };

  const handleDeleteTourButton = async () => {
    setLoadingSubmit(true);
    await handleDeteteTour(tour_id, user.token, toast, navigate);
    setLoadingSubmit(false);
  };

  const handleDeleteAllClick = async () => {
    setLoadingSubmit(true);
    await deleteAllImages(tour.images, user.token);
    await handleDeteteTour(tour_id, user.token, toast, navigate);
    setLoadingSubmit(false);
  };

  return {
    tour,
    loading,
    loadingSubmit,
    onSubmit,
    handleDeleteTourButton,
    handleDeleteAllClick,
  };
};
