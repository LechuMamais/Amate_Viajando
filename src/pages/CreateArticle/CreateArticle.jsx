import { Container, useToast } from '@chakra-ui/react';
import ArticleEditor from '../../components/ArticleEditor/ArticleEditor';
import { createArticle } from '../../services/api/articles';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

const CreateArticle = () => {
  const toast = useToast();
  const { user } = useContext(UserContext);

  const onSubmit = async (data) => {
    try {
      createArticle(data, user.token);

      toast({
        title: 'Artículo creado',
        description: 'El artículo se ha creado correctamente.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'Ocurrió un error al crear el artículo.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });

      console.error('Error al crear el artículo:', error);
    }
  };

  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
      <ArticleEditor onSubmit={onSubmit} title={'Crear Artículo'} />
    </Container>
  );
};

export default CreateArticle;
