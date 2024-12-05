import { createArticle } from '../services/api/articles';
import { createImage } from '../services/api/images';

export const handleCreateArticleSubmit = async (data, token, toast, navigate) => {
    try {
        const { images, ...formData } = data; // Separar las imágenes de los datos del artículo
        let imageIds = [];

        //console.log(images);

        // Subir cada imagen y almacenar sus IDs
        for (const image of images) {
            console.log(image.url[0]);
            const imageData = new FormData();
            imageData.append('name', image.name);
            imageData.append('alt', image.alt);
            imageData.append('description', image.description);
            imageData.append('url', image.url[0]); // El archivo de la imagen

            const uploadedImg = await createImage(imageData, token);
            imageIds.push({ order: image.order, imgObj: uploadedImg.element._id });
        }

        // Añadir las imágenes al formulario del artículo
        formData.images = imageIds;

        console.log('Pato!!!');
        // Crear el artículo
        await createArticle(formData, token);

        // Mostrar notificación de éxito
        toast({
            title: 'Artículo creado.',
            description: 'El artículo ha sido creado exitosamente.',
            status: 'success',
            duration: 5000,
            isClosable: true,
        });

        // Navegar al perfil o a otra página
        navigate('/profile');
    } catch (error) {
        console.error('Error al crear el artículo:', error);

        // Mostrar notificación de error
        toast({
            title: 'Error',
            description: 'Hubo un error al crear el artículo.',
            status: 'error',
            duration: 5000,
            isClosable: true,
        });
    }
};
