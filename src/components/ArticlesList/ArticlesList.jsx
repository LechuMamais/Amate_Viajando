import { useTranslation } from 'react-i18next';
import CardsList from '../../components/CardsList/CardsList';
import { useFetch } from '../../customHooks/useFetch/useFetch';
import { fetchManager } from '../../resources/fetchManager';

const ArticlesList = () => {
  const { data, loading } = useFetch(fetchManager.articles);
  const { t } = useTranslation('ArticlesList');

  return (
    <CardsList
      headingText={t('ArticlesListHeading')}
      descriptionText={t('ArticlesListSubHeading')}
      arrayToRender={data}
      usingFor={'articles'}
      loading={loading}
    />
  );
};

export default ArticlesList;
