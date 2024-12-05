import { Container, Text, useToast } from '@chakra-ui/react';
import ArticleEditor from '../../components/ArticleEditor/ArticleEditor';
import { useParams } from 'react-router-dom';
import { getArticleById, updateArticle } from '../../services/api/articles';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../providers/UserProvider';

const UpdateArticle = () => {
  const articleID = useParams();
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
    try {
      updateArticle(articleID.id, data, user.token);

      toast({
        title: 'Artículo actualizado',
        description: 'El artículo se ha actualizado correctamente.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'Ocurrió un error al actualizar el artículo.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });

      console.error('Error al actualizar el artículo:', error);
    }
  };

  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
      {articleData ? (
        <ArticleEditor onSubmit={onSubmit} articleData={articleData} title='Actualizar Artículo' />
      ) : (
        <Text>Cargando datos del artículo...</Text>
      )}
    </Container>
  );
};

export default UpdateArticle;
