import { Container } from '@chakra-ui/react';
import ArticlesList from '../../components/ArticlesList/ArticlesList';

const Articles = () => {
  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }}>
      <ArticlesList />
    </Container>
  );
};

export default Articles;
