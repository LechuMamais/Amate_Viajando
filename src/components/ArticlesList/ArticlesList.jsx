import { useTranslation } from 'react-i18next';
import CardsList from '../../components/CardsList/CardsList';
import { useFetch } from '../../customHooks/useFetch/useFetch';
import { fetchManager } from '../../resources/fetchManager';
import { useContext } from 'react';
import { LanguageContext } from '../../providers/LanguageProvider';

const ArticlesList = () => {
  const { language } = useContext(LanguageContext);
  const { data, loading } = useFetch(fetchManager.articles, language?.iso3code);
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
