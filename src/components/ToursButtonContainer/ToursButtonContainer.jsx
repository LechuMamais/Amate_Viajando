import { Flex, Button, useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { addTourToCart, addTourToFavorites } from "../../services/api/users";

const ToursButtonContainer = ({tour_id}) => {
  const { user } = useContext(UserContext);
  const toast = useToast();

  const handleAddToFavoritesClick = async (user, tour_id) => {
    console.log('user id',user._id);
    console.log('tour id',tour_id);
    console.log('token',user.token);
    try {
      const updatedUser = await addTourToFavorites(
        user._id,
        user.token,
        tour_id
      );
      console.log("Tour agregado a favoritos:", updatedUser);
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

  const handleAddToCartClick = async (user, tour_id) => {
    try {
      const updatedUser = await addTourToCart(user._id, user.token, tour_id);
      console.log("Tour agregado al carrito:", updatedUser);
    } catch (error) {
      toast({
        title: "Error al agregar al carrito.",
        description: error.message || "Algo salió mal. Inténtalo de nuevo.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} gap={2}>
      <Button
        size="lg"
        className="w-full"
        onClick={() => handleAddToFavoritesClick(user, tour_id)}
      >
        Agregar a Favoritos
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="w-full"
        onClick={() => handleAddToCartClick(user, tour_id)}
      >
        Agregar al Carrito
      </Button>
    </Flex>
  );
};

export default ToursButtonContainer;
