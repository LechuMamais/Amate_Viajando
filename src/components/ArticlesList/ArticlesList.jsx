import CardsList from '../../components/CardsList/CardsList';
import { useFetchArticles } from '../../customHooks/useFetchArticles/useFetchArticles';

const ArticlesList = () => {
  const { articlesData, loading } = useFetchArticles();
  return (
    <CardsList
      headingText={'Reflexiones del viaje de la vida'}
      descriptionText={'El viaje es hacia adentro'}
      arrayToRender={articlesData}
      usingFor={'articles'}
      loading={loading}
    />
  );
};

export default ArticlesList;
