import { useState, useEffect, useContext } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { AllDestinationsContext } from "../../providers/AllDestinationsProvider";
import { fetchSetTours } from "../../services/fetchSetTours";
import { deleteAllImages } from "../../services/deleteAllImages";
import {
  fetchDestinationAndSetValues,
  handleDeleteDestination,
  submitHandler,
} from "./useUpdateDestination.functions";

export const useUpdateDestination = (setValue) => {
  const { user } = useContext(UserContext);
  const { reloadDestinations } = useContext(AllDestinationsContext);
  const navigate = useNavigate();
  const { destination_id } = useParams();
  const [destination, setDestination] = useState(null);
  const [allTours, setAllTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const toast = useToast();

  useEffect(() => {
    fetchSetTours(setAllTours, setLoading);
  }, []);

  useEffect(() => {
    fetchDestinationAndSetValues(destination_id, setDestination, setValue, toast);
  }, [destination_id, setValue]);

  const onSubmit = async (data, event) => {
    setLoadingSubmit(true);
    event.preventDefault();
    await submitHandler(
      data,
      destination,
      user.token,
      destination_id,
      toast,
      reloadDestinations,
      navigate
    );
    setLoadingSubmit(false);
  };

  const handleDeleteDestinationButton = async () => {
    setLoadingSubmit(true);
    handleDeleteDestination(
      destination_id,
      user.token,
      toast,
      reloadDestinations,
      navigate
    );
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
    loading,
    loadingSubmit,
    onSubmit,
    handleDeleteDestinationButton,
    handleDeleteAllClick,
  };
};
