import { Container } from '@chakra-ui/react';
import ArticleEditor from '../../components/ArticleEditor/ArticleEditor';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { useUpdateFetch } from '../../customHooks/useFetch/useUpdateFetch';
import { fetchManager } from '../../resources/fetchManager';
import { handleImageUpdate } from '../../services/handleImageUpdate';
import { useForm } from 'react-hook-form';
import { defaultArticleLangValues } from '../../utils/defaultLangValues';

const CreateArticle = () => {
  const { user } = useContext(UserContext);
  const { executeUpdate } = useUpdateFetch(fetchManager.createArticle);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...defaultArticleLangValues,
      images: [{ name: '', alt: '', description: '', url: null }],
    },
  });

  const onSubmit = async (data) => {
    try {
      const { images, ...formData } = data;
      const imageIds = await handleImageUpdate(images, data, user.token);

      await executeUpdate({ ...formData, images: imageIds }, user.token);
    } catch (error) {
      console.error('Error al crear el artículo:', error);
    }
  };

  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
      <ArticleEditor
        onSubmit={onSubmit}
        title={'Crear Artículo'}
        register={register}
        handleSubmit={handleSubmit}
        control={control}
        errors={errors}
      />
    </Container>
  );
};

export default CreateArticle;
