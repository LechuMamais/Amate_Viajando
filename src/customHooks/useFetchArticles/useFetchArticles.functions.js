export const handleFetchError = (error, toast) => {
    console.error('Error al obtener el artículo:', error);
    toast({
        title: 'Error al cargar los artículos',
        description: 'Hubo un problema al obtener los datos. Por favor, inténtalo de nuevo más tarde.',
        status: 'error',
        duration: 5000,
        isClosable: true,
    });
};