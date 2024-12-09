import { useEffect, useState } from 'react';
import { getArticleById, getArticles } from '../../services/api/articles';
import { useToast } from '@chakra-ui/react';
import { handleFetchError } from './useFetchArticles.functions';

export const useFetchArticles = () => {
  const toast = useToast();
  const [articlesData, setArticlesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchArticles = async () => {
      try {
        const articles = await getArticles();
        setArticlesData(articles);
      } catch (error) {
        handleFetchError(error, toast);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [toast]);

  return { articlesData, loading };
};

export const useFetchArticle = (id) => {
  const toast = useToast();
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [articleNotFound, setArticleNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchArticles = async () => {
      try {
        const article = await getArticleById(id);
        setArticleData(article);
      } catch (error) {
        setArticleNotFound(true);
        handleFetchError(error, toast);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [toast, id]);

  return { articleData, loading, articleNotFound };
};
