import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { addTourToFavorites, removeTourFromFavorites } from "../../services/api/users";
import { isTourInFavorites } from "./useFavoriteTour.functions";

const useFavoriteTour = (user, tour_id, destination_id) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (user && user.favouriteTours) {
      setIsFavorite(isTourInFavorites(user, tour_id, destination_id));
    }
  }, [user, tour_id]);

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
      const updatedUser = await addTourToFavorites(
        user._id,
        user.token,
        tour_id,
        destination_id
      );
      if (updatedUser.message === "Tour already in favorites") {
        toast({
          title: "Tour ya en favoritos",
          description: "El tour ya se encontraba en la lista de favoritos.",
          status: "info",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      toast({
        title: "Éxito",
        description: "El tour fue agregado a favoritos.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setIsFavorite(true);
    } catch (error) {
      toast({
        title: "Error al agregar a favoritos.",
        description: error.message || "Algo salió mal. Inténtalo de nuevo.",
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
      const updatedUser = await removeTourFromFavorites(
        user._id,
        user.token,
        tour_id,
        destination_id
      );

      if (updatedUser.message === "Tour not found in favorites") {
        toast({
          title: "Tour no encontrado",
          description: "El tour no se encontraba en la lista de favoritos.",
          status: "info",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      toast({
        title: "Éxito",
        description: "El tour fue eliminado de favoritos.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setIsFavorite(false);
    } catch (error) {
      toast({
        title: "Error al eliminar de favoritos.",
        description: error.message || "Algo salió mal. Inténtalo de nuevo.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return {
    isFavorite,
    handleAddToFavorites,
    handleRemoveFromFavorites
  };
};

export default useFavoriteTour;
