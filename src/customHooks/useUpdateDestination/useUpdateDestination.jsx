import { useState, useContext, useMemo } from 'react';
import { useToast } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../providers/UserProvider';
import { AllDestinationsContext } from '../../providers/AllDestinationsProvider';
import { deleteAllImages } from '../../services/deleteAllImages';
import { handleDeleteDestination, submitHandler } from './useUpdateDestination.functions';
import { useFetch } from '../useFetch/useFetch';
import { fetchManager } from '../../resources/fetchManager';

export const useUpdateDestination = () => {
  const { user } = useContext(UserContext);
  const { reloadDestinations } = useContext(AllDestinationsContext);
  const navigate = useNavigate();
  const { destination_id } = useParams();
  const args = useMemo(() => [destination_id, 'all'], [destination_id]);
  const { data: destination } = useFetch(fetchManager.destination, args);
  const { data: allTours } = useFetch(fetchManager.tours, 'esp');
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const toast = useToast();

  const onSubmit = async (data, event) => {
    setLoadingSubmit(true);
    event.preventDefault();
    await submitHandler(data, destination, user.token, destination_id, toast, reloadDestinations, navigate);
    setLoadingSubmit(false);
  };

  const handleDeleteDestinationButton = async () => {
    setLoadingSubmit(true);
    handleDeleteDestination(destination_id, user.token, toast, reloadDestinations, navigate);
    setLoadingSubmit(false);
  };

  const handleDeleteAllClick = async () => {
    setLoadingSubmit(true);
    await deleteAllImages(destination.images, user.token);
    await handleDeleteDestinationButton();
    reloadDestinations();
    setLoadingSubmit(false);
  };

  return {
    destination,
    allTours,
    loadingSubmit,
    onSubmit,
    handleDeleteDestinationButton,
    handleDeleteAllClick,
  };
};
