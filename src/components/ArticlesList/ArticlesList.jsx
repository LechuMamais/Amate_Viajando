import CardsList from '../../components/CardsList/CardsList';
import { useFetch } from '../../customHooks/useFetch/useFetch';
import { fetchManager } from '../../resources/fetchManager';

const ArticlesList = () => {
  const { data, loading } = useFetch(fetchManager.articles);
  console.log(data);
  return (
    <CardsList
      headingText={'Reflexiones del viaje de la vida'}
      descriptionText={'El viaje es hacia adentro'}
      arrayToRender={data}
      usingFor={'articles'}
      loading={loading}
    />
  );
};

export default ArticlesList;
