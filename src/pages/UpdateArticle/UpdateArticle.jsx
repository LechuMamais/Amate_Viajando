import { Button, Container, Flex, Text } from '@chakra-ui/react';
import ArticleEditor from '../../components/ArticleEditor/ArticleEditor';
import { useParams } from 'react-router-dom';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { handleImageUpdate } from '../../services/handleImageUpdate';
import BackButton from '../../components/BackButton/BackButton';
import NotFound from '../NotFound/NotFound';
import { useFetch } from '../../customHooks/useFetch/useFetch';
import { useUpdateFetch } from '../../customHooks/useFetch/useUpdateFetch'; // Nuevo hook
import { fetchManager } from '../../resources/fetchManager';
import MyModal from '../../components/MyModal/MyModal';
import { deleteAllImages } from '../../services/deleteAllImages';
import { useForm } from 'react-hook-form';
import { languagesAvailable } from '../../utils/languagesAvailable';
import { prevImagesArrayConstructor } from '../../utils/prevImagesArrayConstructor';

const UpdateArticle = () => {
  const { user } = useContext(UserContext);
  const { article_id } = useParams();
  const args = useMemo(() => ['all', article_id], [article_id]);
  const { data: articleData, loading, articleNotFound } = useFetch(fetchManager.article, args);
  const { executeUpdate } = useUpdateFetch(fetchManager.updateArticle);
  const { executeUpdate: executeDelete } = useUpdateFetch(fetchManager.deleteArticle);

  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (articleData) {
      languagesAvailable.map((lang) => {
        setValue(`${lang.iso3code}.title`, articleData[lang.iso3code]?.title || '');
        setValue(`${lang.iso3code}.subtitle`, articleData[lang.iso3code]?.subtitle || '');
        setValue(`${lang.iso3code}.content`, articleData[lang.iso3code]?.content || '');
      });
    }
  }, [articleData, setValue]);

  const onSubmit = useCallback(
    async (data) => {
      try {
        const { images, ...formData } = data;

        const imageIds = await handleImageUpdate(images, articleData, user.token);

        await executeUpdate(articleData._id, { ...formData, images: imageIds }, user.token);
      } catch (error) {
        console.error('Error en el manejo de imágenes o actualización:', error);
      }
    },
    [articleData, user.token, executeUpdate],
  );

  const handleDeleteArticleButton = async () => {
    await executeDelete(articleData._id, user.token);
  };

  const handleDeleteAllClick = async () => {
    await deleteAllImages(articleData.images, user.token);
    await executeDelete(articleData._id, user.token);
  };

  const prevImages = useMemo(() => prevImagesArrayConstructor(articleData?.images), [articleData?.images]);

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
            register={register}
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            title='Actualizar Artículo'
            prevImages={prevImages}
          />

          <MyModal
            heading='Confirmar eliminación'
            question='¿Estás seguro de que deseas eliminar este artículo?'
            text='¿Quieres eliminar también las imágenes de la base de datos?'
            onAcceptClick={handleDeleteArticleButton}
            buttonText='Eliminar artículo'
            type='delete'
            modalMainButtonText='Eliminar sólo el artículo'
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
