import { Box, Container, Flex, Heading, Skeleton, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ResponsiveCarousel from '../../components/ResponsiveCarousel/ResponsiveCarousel';
import { handleDetailsPageScroll } from '../../utils/handleDetailsPageScroll';
import BackButton from '../../components/BackButton/BackButton';
import './ArticleDetails.css';
import NotFound from '../NotFound/NotFound';
import { useFetchArticle } from '../../customHooks/useFetchArticles/useFetchArticles';

const ArticleDetail = () => {
  const articleID = useParams();
  const { articleData, loading, articleNotFound } = useFetchArticle(articleID.id);

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
