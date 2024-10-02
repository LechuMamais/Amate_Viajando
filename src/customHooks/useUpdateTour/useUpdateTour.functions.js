import { deleteTour, getTourById, updateTour } from "../../services/api/tours";
import { handleImageUpdate } from "../../services/handleImageUpdate";
import { imagesArrayConstructor } from "../../utils/imagesArrayConstructor";
import { orderArray } from "../../utils/orderArray";

export const fetchTourAndSetValues = async (setTour, setValue, toast, tour_id, token) => {
  try {
    const response = await getTourById(tour_id, token);
    const imagesArray = imagesArrayConstructor(response);
    const orderedImagesArray = orderArray(imagesArray);

    setTour({ ...response, images: orderedImagesArray });

    setValue("name", response.name);
    setValue("heading", response.heading);
    setValue("description", response.description);
    setValue("longDescription", response.longDescription);
    setValue("images", imagesArray);
  } catch (error) {
    toast({
      title: "Error",
      description: "No se pudo cargar el tour.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};

export const submitHandler = async (data, token, tour, tour_id, toast, navigate) => {
  try {
    const { images, ...formData } = data;
    console.log("pato");
    const imageIds = await handleImageUpdate(images, tour, token);
    formData.images = imageIds;
    await updateTour(tour_id, formData, token);

    toast({
      title: "Tour actualizado.",
      description: "El tour ha sido actualizado exitosamente.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/profile");
  } catch (error) {
    toast({
      title: "Error",
      description: "Hubo un error al actualizar el tour.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};

export const handleDeteteTour = async (tour_id, token, toast, navigate) => {
  try {
    await deleteTour(tour_id, token);
    toast({
      title: "Tour eliminado.",
      description: "El tour ha sido eliminado exitosamente.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/profile");
  } catch (error) {
    toast({
      title: "Error",
      description: "Hubo un error al eliminar el tour.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};