import { Container, Text, useToast } from '@chakra-ui/react';
import ArticleEditor from '../../components/ArticleEditor/ArticleEditor';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticleById, updateArticle } from '../../services/api/articles';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { handleImageUpdate } from '../../services/handleImageUpdate';
//import { handleUpdateArticleSubmit } from '../../utils/handleCreateArticleSubmit';

const submitHandler = async (data, token, article, toast, navigate) => {
  console.log(article._id);
  try {
    // Separar imágenes del resto de los datos
    const { images, ...formData } = data;

    // Actualizar imágenes utilizando la función reutilizable
    const imageIds = await handleImageUpdate(images, article, token);

    // Añadir las imágenes actualizadas al formulario
    formData.images = imageIds;

    // Enviar solicitud para actualizar el artículo
    await updateArticle(article._id, formData, token);

    // Mostrar notificación de éxito
    toast({
      title: 'Artículo actualizado.',
      description: 'El artículo ha sido actualizado exitosamente.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    // Navegar al perfil u otra página
    navigate('/profile');
  } catch (error) {
    console.error('Error al actualizar el artículo:', error);

    // Mostrar notificación de error
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

  const [articleData, setArticleData] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const article = await getArticleById(articleID.id);
        setArticleData(article);
      } catch (error) {
        console.error('Error al obtener el artículo:', error);
      }
    };

    fetchArticle();
  }, [articleID]);

  const onSubmit = async (data) => {
    await submitHandler(data, user.token, articleData, toast, navigate);
  };

  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
      {articleData ? (
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
      ) : (
        <Text>Cargando datos del artículo...</Text>
      )}
    </Container>
  );
};

export default UpdateArticle;
