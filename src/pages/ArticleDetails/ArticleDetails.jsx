import { Box, Container, Flex, Heading, Skeleton, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../services/api/articles';
import { useEffect, useState } from 'react';
import ResponsiveCarousel from '../../components/ResponsiveCarousel/ResponsiveCarousel';
import { handleDetailsPageScroll } from '../../utils/handleDetailsPageScroll';
import BackButton from '../../components/BackButton/BackButton';
import './ArticleDetails.css';
import NotFound from '../NotFound/NotFound';

const ArticleDetail = () => {
  const articleID = useParams();
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [articleNotFound, setArticleNotFound] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const article = await getArticleById(articleID.id);
        setArticleData(article);
        setLoading(false);
        if (!article._id) {
          setArticleNotFound(true);
          setLoading(false);
        }
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
    <Skeleton isLoaded={!loading} fadeDuration={2} width='100lvw' minHeight='calc(100lvh - 72px)' overflow='hidden'>
      {articleNotFound ? (
        <NotFound />
      ) : (
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
                  <Box className='article-content' dangerouslySetInnerHTML={{ __html: articleData.content }} />
                </Flex>
                <BackButton to='/articles' />
              </>
            ) : (
              <Text>Cargando...</Text>
            )}
          </Container>
        </>
      )}
    </Skeleton>
  );
};

export default ArticleDetail;
