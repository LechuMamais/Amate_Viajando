import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';

const ArticleList = ({ articles, onSelectArticle }) => {
  return (
    <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
      {articles.map((article) => (
        <Box
          key={article._id}
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          onClick={() => onSelectArticle(article._id)}
          cursor='pointer'
        >
          <Image src={article.image} alt={article.title} />
          <Box p={4}>
            <Heading size='md'>{article.title}</Heading>
            <Text mt={2}>{article.subtitle}</Text>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default ArticleList;
