import { Container } from '@chakra-ui/react';
import CardsList from '../../components/CardsList/CardsList';
import { getArticles } from '../../services/api/articles';
import { useEffect, useState } from 'react';

const ArticleList = () => {
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
    <Container maxW='928px' px={{ base: 4, md: 6 }}>
      <CardsList
        headingText={'Reflexiones del viaje de la vida'}
        descriptionText={'Seleccionados para tí'}
        arrayToRender={articlesData}
        usingFor={'articles'}
        loading={loading}
      />
    </Container>
  );
};

export default ArticleList;
