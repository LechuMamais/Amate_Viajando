import { Flex, Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useFavoriteTour from "../../customHooks/useFavoriteTour/useFavoriteTour";

const AddAndRemoveFromFavoritesButton = ({ tour_id, destination_id, type = "icon" }) => {
  const { user } = useContext(UserContext);
  const { isFavorite, handleAddToFavorites, handleRemoveFromFavorites } = useFavoriteTour(user, tour_id, destination_id);

  return (
    <Flex my={4} mx={0} direction={{ base: "column", md: "row" }} gap={0}>
      {type === "icon" ? (
        <Button
          size="lg"
          className="w-full"
          onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}
          leftIcon={isFavorite ? <FaHeart size="28px" /> : <FaRegHeart size="28px" />}
          color="red"
          variant="link"
          _hover={{ transform: "scale(1.05)" }}
        />
      ) : (
        <Button
          size="lg"
          className="w-full"
          onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}
        >
          <Text>{isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}</Text>
        </Button>
      )}
    </Flex>
  );
};

export default AddAndRemoveFromFavoritesButton;
