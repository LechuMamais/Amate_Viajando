import { Button, Container, Flex, Heading, Text, Stack, Box } from '@chakra-ui/react';
import CardsList from '../CardsList/CardsList';
import MyLink from '../MyLink/MyLink';
import { useContext } from 'react';
import { DestinationContext } from '../../providers/DestinationProvider';
import { AllDestinationsContext } from '../../providers/AllDestinationsProvider';
import { useEffect } from 'react';
import { handleDetailsPageScroll } from '../../utils/handleDetailsPageScroll';
import AddAndRemoveFromFavoritesButton from '../AddAndRemoveFromFavoritesButton/AddAndRemoveFromFavoritesButton';
import { useParams } from 'react-router-dom';
import ResponsiveCarousel from '../ResponsiveCarousel/ResponsiveCarousel';
import ArticlesList from '../ArticlesList/ArticlesList';
import { useTranslation } from 'react-i18next';

const DetailsPage = ({ obj, descriptionParagraphs, usingFor, children }) => {
  const { destination } = useContext(DestinationContext);
  const { tour_id } = useParams();
  const { allDestinations, loading } = useContext(AllDestinationsContext);
  const { t } = useTranslation('DetailsPage');

  useEffect(() => {
    window.addEventListener('scroll', handleDetailsPageScroll);
    return () => {
      window.removeEventListener('scroll', handleDetailsPageScroll);
    };
  }, []);

  return (
    <>
      <ResponsiveCarousel obj={obj} />

      <Container maxW='928px' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
        {usingFor == 'destination' && (
          <MyLink to='/destinations'>
            <Button size='lg' variant='link' p={6} pl={0} my={{ base: 2, md: 3, lg: 4 }} fontWeight={'light'}>
              {t('MoreDestinationsButton')}
            </Button>
          </MyLink>
        )}
        <Flex direction='column' gap={6}>
          <Box px={{ base: 4, sm: 6, md: 0 }}>
            <Heading size='xl' fontWeight='bold'>
              {obj?.heading}
            </Heading>
            {usingFor === 'tour' && (
              <AddAndRemoveFromFavoritesButton tour_id={tour_id} destination_id={destination?._id} />
            )}
            <Stack spacing={4} mt={6} mb={4}>
              {Array.isArray(descriptionParagraphs) &&
                descriptionParagraphs.map((paragraph, index) => (
                  <Text
                    key={index}
                    maxW='90ch'
                    textAlign='justify'
                    color='gray.600'
                    lineHeight='1.5em'
                    letterSpacing={{ base: 0, md: '0.04em' }}
                    fontSize='lg'
                  >
                    {paragraph}
                  </Text>
                ))}
            </Stack>
          </Box>
          {children}
          <CardsList
            headingText={t('OtherDestinationsHeading')}
            descriptionText={t('OtherDestinationsSubHeading')}
            arrayToRender={allDestinations?.filter((dest) => dest._id !== destination?._id)}
            usingFor={'destinations'}
            loading={loading}
          />
          <ArticlesList></ArticlesList>
        </Flex>
      </Container>
    </>
  );
};

export default DetailsPage;
