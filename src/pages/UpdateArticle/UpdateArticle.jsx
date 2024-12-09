import { Container, Flex, Text, useToast } from '@chakra-ui/react';
import ArticleEditor from '../../components/ArticleEditor/ArticleEditor';
import { useNavigate, useParams } from 'react-router-dom';
import { updateArticle } from '../../services/api/articles';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { handleImageUpdate } from '../../services/handleImageUpdate';
import BackButton from '../../components/BackButton/BackButton';
import { useFetchArticle } from '../../customHooks/useFetchArticles/useFetchArticles';
import NotFound from '../NotFound/NotFound';

const submitHandler = async (data, token, article, toast, navigate) => {
  try {
    const { images, ...formData } = data;

    const imageIds = await handleImageUpdate(images, article, token);

    formData.images = imageIds;

    await updateArticle(article._id, formData, token);

    toast({
      title: 'Artículo actualizado.',
      description: 'El artículo ha sido actualizado exitosamente.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    navigate('/profile');
  } catch (error) {
    console.error('Error al actualizar el artículo:', error);

    toast({
      title: 'Error',
      description: 'Hubo un error al actualizar el artículo.',
      status: 'error',
      duration: 5000,
      isClosable: true,
    });
  }
};

const UpdateArticle = () => {
  const articleID = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const toast = useToast();

  const { articleData, loading, articleNotFound } = useFetchArticle(articleID.id);

  const onSubmit = async (data) => {
    await submitHandler(data, user.token, articleData, toast, navigate);
  };

  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
      {loading ? (
        <Text>Cargando datos del artículo...</Text>
      ) : articleNotFound ? (
        <NotFound />
      ) : (
        <Flex direction='column' gap={6}>
          <BackButton to='/profile' />
          <ArticleEditor
            onSubmit={onSubmit}
            articleData={{
              ...articleData,
              images: articleData.images.map((img) => ({
                name: img.imgObj.name,
                description: img.imgObj.description,
                alt: img.imgObj.alt,
                url: img.imgObj.url,
                order: img.order,
                _id: img.imgObj._id,
              })),
            }}
            title='Actualizar Artículo'
          />
          <BackButton to='/profile' />
        </Flex>
      )}
    </Container>
  );
};

export default UpdateArticle;
