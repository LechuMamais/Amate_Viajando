import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../services/api/articles';
import { useEffect, useState } from 'react';
import ResponsiveCarousel from '../../components/ResponsiveCarousel/ResponsiveCarousel';
import { handleDetailsPageScroll } from '../../utils/handleDetailsPageScroll';
import BackButton from '../../components/BackButton/BackButton';

const ArticleDetail = () => {
  const articleID = useParams();
  const [articleData, setArticleData] = useState(null);
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const article = await getArticleById(articleID.id);
        setArticleData(article);
      } catch (error) {
        console.error('Error al obtener el artículo:', error);
      }
    };

    fetchArticle();
  }, [articleID]);

  useEffect(() => {
    window.addEventListener('scroll', handleDetailsPageScroll);
    return () => {
      window.removeEventListener('scroll', handleDetailsPageScroll);
    };
  }, []);

  return (
    <>
      <ResponsiveCarousel obj={articleData} />
      <Container maxW='928px' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
        {articleData ? (
          <>
            <BackButton to='/articles' />
            <Flex direction='column' gap={6}>
              <Heading size='xl'>{articleData.title}</Heading>
              <Text fontSize='lg' color='gray.600'>
                {articleData.subtitle}
              </Text>
              <Box dangerouslySetInnerHTML={{ __html: articleData.content }} />
            </Flex>
            <BackButton to='/articles' />
          </>
        ) : (
          <Text>Cargando...</Text>
        )}
      </Container>
    </>
  );
};

export default ArticleDetail;
