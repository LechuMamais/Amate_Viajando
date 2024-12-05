import { Box, Heading, Image, Text } from '@chakra-ui/react';

const ArticleDetail = ({ article }) => {
  return (
    <Box>
      <Heading size='xl'>{article.title}</Heading>
      <Text fontSize='lg' color='gray.600'>
        {article.subtitle}
      </Text>
      <Image src={article.image} alt={article.title} my={4} />
      <Box dangerouslySetInnerHTML={{ __html: article.content }} />
    </Box>
  );
};

export default ArticleDetail;
