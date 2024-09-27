import { useState, useEffect, useContext } from "react";
import { useToast } from "@chakra-ui/react";
import {
  addTourToFavorites,
  removeTourFromFavorites,
} from "../../services/api/users";
import { isTourInFavorites } from "./useFavoriteTour.functions";
import { UserContext } from "../../providers/UserProvider";

const useFavoriteTour = (tour_id, destination_id) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const toast = useToast();

  useEffect(() => {
    setIsFavorite(isTourInFavorites(user, tour_id, destination_id));
  }, [user, tour_id, destination_id]);

  const handleAddToFavorites = async () => {
    if (!user || !user._id || !user.token) {
      toast({
        title: "No has iniciado sesión",
        description: "Debes iniciar sesión para agregar tour a favoritos",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await addTourToFavorites(
        user._id,
        user.token,
        tour_id,
        destination_id
      );

      if (response.message === "Tour already in favorites") {
        toast({
          title: "Tour ya en favoritos",
          description: "El tour ya estaba en la lista de favoritos.",
          status: "info",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      const addedFavorite = response.addedFavorite;

      setUser((prevUser) => ({
        ...prevUser,
        favouriteTours: [...prevUser.favouriteTours, addedFavorite],
      }));

      setIsFavorite(true);

      toast({
        title: "Éxito",
        description: "El tour fue agregado a favoritos.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo agregar el tour a favoritos.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleRemoveFromFavorites = async () => {
    if (!user || !user._id || !user.token) {
      toast({
        title: "No has iniciado sesión",
        description: "Debes iniciar sesión para eliminar tour de favoritos",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await removeTourFromFavorites(
        user._id,
        user.token,
        tour_id,
        destination_id
      );

      if (response.message === "Tour not found in favorites") {
        toast({
          title: "Tour no encontrado",
          description: "El tour no estaba en la lista de favoritos.",
          status: "info",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      const removedTour = response.removedTour;

      setUser((prevUser) => ({
        ...prevUser,
        favouriteTours: prevUser.favouriteTours.filter(
          (favTour) =>
            favTour._id !== removedTour._id 
        ),
      }));

      setIsFavorite(false);

      toast({
        title: "Éxito",
        description: "El tour fue eliminado de favoritos.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo eliminar el tour de favoritos.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return {
    isFavorite,
    handleAddToFavorites,
    handleRemoveFromFavorites,
  };
};

export default useFavoriteTour;
