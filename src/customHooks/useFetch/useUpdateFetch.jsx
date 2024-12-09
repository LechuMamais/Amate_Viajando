import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const useUpdateFetch = (fetchManager) => {
  const toast = useToast();
  const navigate = useNavigate();

  const executeUpdate = async (...args) => {
    try {
      await fetchManager.fetchFunction(...args);

      // Mostrar mensaje de éxito
      toast({
        title: fetchManager.toastSuccessMessage.title,
        description: fetchManager.toastSuccessMessage.content,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Redirigir si se proporciona un endpoint de navegación
      if (fetchManager.navigateEndPoint) {
        navigate(fetchManager.navigateEndPoint);
      }
    } catch (error) {
      console.error(fetchManager.toastErrorMessage.title, error);

      // Mostrar mensaje de error
      toast({
        title: fetchManager.toastErrorMessage.title,
        description: fetchManager.toastErrorMessage.content,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return { executeUpdate };
};
