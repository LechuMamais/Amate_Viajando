import { Flex, Button, useToast, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { addTourToFavorites, removeTourFromFavorites } from "../../services/api/users";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const AddAndRemoveFromFavoritesButton = ({ tour_id, destination_id, type = "icon" }) => {
  const { user } = useContext(UserContext);
  const toast = useToast();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log(user)
    console.log("FavouriteTours: "+user.favouriteTours)
    if (user && user.favouriteTours) {
      const found = user.favouriteTours.some(
        (favTour) => favTour.tourId._id === tour_id
      );
      setIsFavorite(found);
    }
  }, [user, tour_id]);

  const handleAddToFavoritesClick = async () => {
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

  const handleRemoveFromFavoritesClick = async () => {
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

  return (
    <Flex direction={{ base: "column", md: "row" }} gap={2}>
      {type === "icon" ? (
        <Button
          size="lg"
          className="w-full"
          onClick={isFavorite ? handleRemoveFromFavoritesClick : handleAddToFavoritesClick}
          leftIcon={isFavorite ? <FaHeart size="28px" /> : <FaRegHeart size="28px" />}
          color="red"
          variant="link"
          _hover={{ transform: "scale(1.05)" }}
        />
      ) : (
        <Button
          size="lg"
          className="w-full"
          onClick={isFavorite ? handleRemoveFromFavoritesClick : handleAddToFavoritesClick}
        >
          <Text>{isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}</Text>
        </Button>
      )}
    </Flex>
  );
};

export default AddAndRemoveFromFavoritesButton;