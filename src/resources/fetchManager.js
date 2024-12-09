import { getArticleById, getArticles, updateArticle } from '../services/api/articles';

export const fetchManager = {
    articles: { fetchFunction: getArticles, toastErrorMessage: { title: 'Error al obtener los artículos', content: 'Parece que tenemos problemas con las base de datos, por favor intenta nuevamente más tarde.' } },
    article: { fetchFunction: (id) => getArticleById(id), toastErrorMessage: { title: 'Error al obtener el artículo', content: 'Parece que tenemos problemas con las base de datos, por favor intenta nuevamente más tarde.' } },
    updateArticle: {
        fetchFunction: (id, data, token) => updateArticle(id, data, token),
        toastErrorMessage: { title: 'Error al actualizar el artículo', content: 'Hubo un error al actualizar el artículo.' },
        toastSuccessMessage: { title: 'Artículo actualizado.', content: 'El artículo ha sido actualizado exitosamente.' },
        navigateEndPoint: '/profile'
    }
};