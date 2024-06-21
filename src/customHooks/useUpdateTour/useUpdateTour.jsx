import { useState, useEffect, useContext } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteAllImages } from "../../services/deleteAllImages";
import { UserContext } from "../../providers/UserProvider";
import {
  fetchTourAndSetValues,
  handleDeteteTour,
  submitHandler,
} from "./useUpdateTour.functions";

export const useUpdateTour = (setValue) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { tour_id } = useParams();
  const [tour, setTour] = useState(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const toast = useToast();

  useEffect(() => {
    fetchTourAndSetValues(setTour, setValue, toast, tour_id, user.token);
  }, [tour_id, user.token, setValue, toast]);

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
    loadingSubmit,
    onSubmit,
    handleDeleteTourButton,
    handleDeleteAllClick,
  };
};
