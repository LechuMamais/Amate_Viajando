import { Box, Container, Grid, Heading, Text } from '@chakra-ui/react';
import Cards from '../Cards/Cards';
import CardSkeletonLoader from '../skeletonLoaders/CardSkeletonLoader';

const CardsList = ({ headingText, descriptionText, arrayToRender, usingFor, loading, destinationID = '' }) => {
  const skeletonLoaders = Array(4)
    .fill()
    .map((_, index) => <CardSkeletonLoader key={index} />);
  if (loading || !usingFor) return;
  return (
    <Box py={usingFor.includes('update') ? { base: 12 } : { base: 12, md: 24, lg: 32 }}>
      <Container maxW='container.lg' px={0}>
        <Box textAlign='center' mb={8}>
          <Heading
            as='h2'
            size='2xl'
            fontWeight='bold'
            lineHeight='tight'
            mb={4}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          >
            {headingText}
          </Heading>
          <Text
            color='gray.500'
            fontSize={{ base: 'md', md: 'xl', lg: 'base', xl: 'xl' }}
            lineHeight='relaxed'
            maxW='700px'
            mx='auto'
          >
            {descriptionText}
          </Text>
        </Box>

        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
          }}
          gap={6}
        >
          {loading
            ? skeletonLoaders
            : arrayToRender?.map((obj) => (
                <Cards
                  key={obj._id}
                  obj={obj}
                  usingFor={usingFor}
                  heading={usingFor == 'articles' || usingFor == 'updateArticles' ? obj.title : obj.heading}
                  description={usingFor == 'articles' || usingFor == 'updateArticles' ? obj.subtitle : obj.description}
                  destinationID={destinationID}
                />
              ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CardsList;
