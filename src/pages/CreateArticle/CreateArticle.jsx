import { Container, useToast } from '@chakra-ui/react';
import ArticleEditor from '../../components/ArticleEditor/ArticleEditor';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import { handleCreateArticleSubmit } from '../../utils/handleCreateArticleSubmit';

const CreateArticle = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const onSubmit = async (data) => {
    await handleCreateArticleSubmit(data, user.token, toast, navigate);
  };

  return (
    <Container maxW='928px' px={{ base: 4, md: 6 }} py={{ base: 12, md: 24, lg: 32 }}>
      <ArticleEditor onSubmit={onSubmit} title={'Crear Artículo'} />
    </Container>
  );
};

export default CreateArticle;
