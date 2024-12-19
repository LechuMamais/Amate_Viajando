import { useEffect, useState, useCallback } from 'react';
import { useToast } from '@chakra-ui/react';

export const useFetch = (fetchManager, args = null) => {
  const toast = useToast();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
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
  }, [fetchManager, args, toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, refetch: fetchData };
};
