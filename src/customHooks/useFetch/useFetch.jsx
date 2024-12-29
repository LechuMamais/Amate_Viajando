import { useEffect, useState, useCallback } from 'react';
import { useToast } from '@chakra-ui/react';

export const useFetch = (fetchManager, args = null, autoFetch = true) => {
  const toast = useToast();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedData = Array.isArray(args)
        ? await fetchManager.fetchFunction(...args)
        : await fetchManager.fetchFunction(args);
      setData(fetchedData);
      //console.log(args);
      //console.log('Fetched Data! correct');
      //console.log(fetchedData);
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
    if (autoFetch) {
      fetchData();
    }
  }, [fetchData, autoFetch]);

  return { data, loading, refetch: fetchData };
};
