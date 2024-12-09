import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';

export const useFetch = (fetchManager, args = null) => {
  const toast = useToast();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedData = args ? await fetchManager.fetchFunction(args) : await fetchManager.fetchFunction();
        setData(fetchedData);
      } catch (error) {
        console.error(fetchManager.toastErrorMessage.title, error);
        toast({
          title: fetchManager.toastErrorMessage.title,
          description: fetchManager.toastErrorMessage.content,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast, fetchManager, args]);

  return { data, loading };
};
