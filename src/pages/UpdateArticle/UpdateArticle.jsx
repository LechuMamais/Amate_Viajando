import { Button, Container, Flex, Text } from '@chakra-ui/react';
import ArticleEditor from '../../components/ArticleEditor/ArticleEditor';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { handleImageUpdate } from '../../services/handleImageUpdate';
import BackButton from '../../components/BackButton/BackButton';
import NotFound from '../NotFound/NotFound';
import { useFetch } from '../../customHooks/useFetch/useFetch';
import { useUpdateFetch } from '../../customHooks/useFetch/useUpdateFetch'; // Nuevo hook
import { fetchManager } from '../../resources/fetchManager';
import MyModal from '../../components/MyModal/MyModal';
import { deleteAllImages } from '../../services/deleteAllImages';

const UpdateArticle = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext);

  const { data: articleData, loading, articleNotFound } = useFetch(fetchManager.article, id);
  const { executeUpdate } = useUpdateFetch(fetchManager.updateArticle);
  const { executeUpdate: executeDelete } = useUpdateFetch(fetchManager.deleteArticle);

  const onSubmit = async (data) => {
    try {
      const { images, ...formData } = data;

      const imageIds = await handleImageUpdate(images, articleData, user.token);

      await executeUpdate(articleData._id, { ...formData, images: imageIds }, user.token);
    } catch (error) {
      console.error('Error en el manejo de imágenes o actualización:', error);
    }
  };

  const handleDeleteArticleButton = async () => {
    await executeDelete(articleData._id, user.token);
  };

  const handleDeleteAllClick = async () => {
    await deleteAllImages(articleData.images, user.token);
    await executeDelete(articleData._id, user.token);
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
                name: img.imgObj?.name,
                description: img.imgObj?.description,
                alt: img.imgObj?.alt,
                url: img.imgObj?.url,
                order: img.order,
                _id: img.imgObj?._id,
              })),
            }}
            title='Actualizar Artículo'
          />

          <MyModal
            heading='Confirmar eliminación'
            question='¿Estás seguro de que deseas eliminar este artículo?'
            text='¿Quieres eliminar también las imágenes de la base de datos?'
            onAcceptClick={handleDeleteArticleButton}
            buttonText='Eliminar destino'
            type='delete'
            modalMainButtonText='Eliminar sólo el destino'
          >
            <Button
              onClick={handleDeleteAllClick}
              mt={8}
              size='md'
              colorScheme='red'
              w={{ base: '100%', md: '280px' }}
              mb={8}
            >
              Borrar todo
            </Button>
          </MyModal>

          <BackButton to='/profile' />
        </Flex>
      )}
    </Container>
  );
};

export default UpdateArticle;
