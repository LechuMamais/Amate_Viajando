import { Box, Button, Text, Flex } from '@chakra-ui/react';
import MyLink from '../../components/MyLink/MyLink';
import CardsList from '../../components/CardsList/CardsList';
import { useContext } from 'react';
import { AllDestinationsContext } from '../../providers/AllDestinationsProvider';
import { LanguageContext } from '../../providers/LanguageProvider';
import { fetchManager } from '../../resources/fetchManager';
import { useFetch } from '../../customHooks/useFetch/useFetch';

const AdminProfile = ({ user }) => {
  const { language } = useContext(LanguageContext);
  const { allDestinations, loading: loadingDestinations } = useContext(AllDestinationsContext);
  const { data: articlesData, loading: loadingArticles } = useFetch(fetchManager.articles, language.iso3code);
  const { data: toursData, loading: loadingTours } = useFetch(fetchManager.tours, language.iso3code);

  if (!language || loadingDestinations || loadingArticles || loadingTours) {
    return <Text>Loading...</Text>;
  }

  return (
    <Flex direction='column' gap={8}>
      <Box>
        <Text fontSize='xl' fontWeight='bold'>
          {user.userName}{' '}
          <Text as='span' fontSize='md'>
            (admin)
          </Text>
        </Text>
      </Box>

      {/* Articles Section */}
      <Flex direction='column' gap={6} borderWidth='1px' p={4}>
        <CardsList
          headingText='Modificar Artículos'
          descriptionText='Selecciona el artículo que quieras modificar'
          arrayToRender={articlesData}
          usingFor='updateArticles'
          loading={loadingArticles}
        />

        <MyLink to='/create-article'>
          <Button mt={4} colorScheme='teal' w={{ base: '100%', md: '300px' }} size='lg'>
            Crear Nuevo Artículo
          </Button>
        </MyLink>
      </Flex>

      {/* Destinations Section */}
      <Flex direction='column' gap={6} borderWidth='1px' p={4}>
        <CardsList
          headingText='Modificar Destinos'
          descriptionText='Selecciona el destino que quieras modificar'
          arrayToRender={allDestinations}
          usingFor='updateDestinations'
          loading={loadingDestinations}
        />

        <MyLink to='/create-destination'>
          <Button mt={4} colorScheme='teal' w={{ base: '100%', md: '300px' }} size='lg'>
            Crear Nuevo Destino
          </Button>
        </MyLink>
      </Flex>

      {/* Tours Section */}
      <Flex direction='column' gap={6} borderWidth='1px' p={4}>
        <CardsList
          headingText='Modificar Tours'
          descriptionText='Selecciona el tour que quieras modificar'
          arrayToRender={toursData}
          usingFor='updateTours'
          loading={loadingTours}
        />

        <MyLink to='/create-tour'>
          <Button mt={4} colorScheme='teal' w={{ base: '100%', md: '300px' }} size='lg'>
            Crear Nuevo Tour
          </Button>
        </MyLink>
      </Flex>
    </Flex>
  );
};

export default AdminProfile;
