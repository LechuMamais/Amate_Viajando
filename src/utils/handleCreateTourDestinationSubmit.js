import { createDestination } from "../services/api/destinations";
import { createImage } from "../services/api/images";
import { createTour } from "../services/api/tours";

export const handleCreateTourDestinationSubmit = async (data, token, toast, usingFor, navigate, reloadDestinations) => {
    try {
        const { images, ...formData } = data;
        let imageIds = [];

        for (const image of images) {
            const imageData = new FormData();
            imageData.append("name", image.name);
            imageData.append("url", image.url[0]);
            imageData.append("alt", image.alt);
            imageData.append("description", image.description);

            const uploadedImg = await createImage(imageData, token);
            imageIds.push({ order: image.order, imgObj: uploadedImg.element._id });
        }

        formData.images = imageIds;

        if (usingFor === "tour") {
            await createTour(formData, token);
        } else if (usingFor === "destination") {
            console.log("PATO");
            await createDestination(formData, token);
        }

        toast({
            title: `${usingFor==="destination"? "Destino":usingFor==="tour"? "Tour": usingFor} creado.`,
            description: `El ${usingFor==="destination"? "Destino":usingFor} ha sido creado exitosamente.`,
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        reloadDestinations();
        navigate("/profile");
    } catch (error) {
        toast({
            title: "Error",
            description: `Hubo un error al crear el ${usingFor==="destination"? "Destino":usingFor}.`,
            status: "error",
            duration: 5000,
            isClosable: true,
        });
    }
};
