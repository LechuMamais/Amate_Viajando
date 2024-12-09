import CardsList from '../../components/CardsList/CardsList';
import { getArticles } from '../../services/api/articles';
import { useEffect, useState } from 'react';

const ArticlesList = () => {
  const [articlesData, setArticlesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchArticles = async () => {
      try {
        const articles = await getArticles();

        setArticlesData(articles);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener el artículo:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <CardsList
      headingText={'Reflexiones del viaje de la vida'}
      descriptionText={'El viaje es hacia adentro'}
      arrayToRender={articlesData}
      usingFor={'articles'}
      loading={loading}
    />
  );
};

export default ArticlesList;
