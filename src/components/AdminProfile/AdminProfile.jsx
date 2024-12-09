import { Box, Button, Text, Flex } from '@chakra-ui/react';
import MyLink from '../../components/MyLink/MyLink';
import CardsList from '../../components/CardsList/CardsList';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchSetTours } from '../../services/fetchSetTours';
import { useContext } from 'react';
import { AllDestinationsContext } from '../../providers/AllDestinationsProvider';
import { getArticles } from '../../services/api/articles';

const AdminProfile = ({ user }) => {
  const { allDestinations, loading } = useContext(AllDestinationsContext);

  const [tours, setTours] = useState([]);
  const [loadingTours, setLoadingTours] = useState(true);

  const [articlesData, setArticlesData] = useState(null);

  useEffect(() => {
    fetchSetTours(setTours, setLoadingTours);
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = await getArticles();

        setArticlesData(articles);
      } catch (error) {
        console.error('Error al obtener el artículo:', error);
      }
    };

    fetchArticles();
  }, []);

  if (loading || loadingTours) {
    return <Text>Loading</Text>;
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

      <Flex direction='column' gap={6} borderWidth='1px' p={4}>
        <CardsList
          headingText={'Modificar Artículos'}
          descriptionText={'Selecciona el artículo que quieras modificar'}
          arrayToRender={articlesData}
          usingFor={'updateArticles'}
          loading={loading}
        />

        <MyLink to='/create-article'>
          <Button mt={4} colorScheme='teal' w={{ base: '100%', md: '300px' }} size='lg'>
            Crear Nuevo Articulo
          </Button>
        </MyLink>
      </Flex>

      <Flex direction='column' gap={6} borderWidth='1px' p={4}>
        <CardsList
          headingText={'Modificar Destinos'}
          descriptionText={'Selecciona el destino que quieras modificar'}
          arrayToRender={allDestinations}
          usingFor={'updateDestinations'}
          loading={loading}
        />

        <MyLink to='/create-destination'>
          <Button mt={4} colorScheme='teal' w={{ base: '100%', md: '300px' }} size='lg'>
            Crear Nuevo Destino
          </Button>
        </MyLink>
      </Flex>

      <Flex direction='column' gap={6} borderWidth='1px' p={4}>
        {loadingTours ? (
          <div>Loading...</div>
        ) : (
          <CardsList
            headingText={'Modificar Tours'}
            descriptionText={'Selecciona el tour que quieras modificar'}
            arrayToRender={tours}
            usingFor={'updateTours'}
          />
        )}

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
