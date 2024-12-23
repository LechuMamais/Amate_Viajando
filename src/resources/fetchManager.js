import { createArticle, deleteArticle, getArticleById, getArticles, updateArticle } from '../services/api/articles';
import { getDestinationById, getDestinations } from '../services/api/destinations';

export const fetchManager = {
    articles: { fetchFunction: getArticles, toastErrorMessage: { title: 'Error al obtener los artículos', content: 'Parece que tenemos problemas con las base de datos, por favor intenta nuevamente más tarde.' } },
    article: { fetchFunction: (id) => getArticleById(id), toastErrorMessage: { title: 'Error al obtener el artículo', content: 'Parece que tenemos problemas con las base de datos, por favor intenta nuevamente más tarde.' } },
    updateArticle: {
        fetchFunction: (id, data, token) => updateArticle(id, data, token),
        toastErrorMessage: { title: 'Error al actualizar el artículo', content: 'Hubo un error al actualizar el artículo.' },
        toastSuccessMessage: { title: 'Artículo actualizado.', content: 'El artículo ha sido actualizado exitosamente.' },
        navigateEndPoint: '/profile'
    },
    createArticle: {
        fetchFunction: (data, token) => createArticle(data, token),
        toastErrorMessage: { title: 'Error al crear el artículo', content: 'Hubo un error al crear el artículo.' },
        toastSuccessMessage: { title: 'Artículo creado.', content: 'El artículo ha sido creado exitosamente.' },
        navigateEndPoint: '/profile'
    },
    deleteArticle: {
        fetchFunction: (id, token) => deleteArticle(id, token),
        toastErrorMessage: { title: 'Error al eliminar el artículo', content: 'Hubo un error al eliminar el artículo.' },
        toastSuccessMessage: { title: 'Artículo eliminado.', content: 'El artículo ha sido eliminado exitosamente.' },
        navigateEndPoint: '/profile'
    },
    destinations: { fetchFunction: (language) => getDestinations(language), toastErrorMessage: { title: 'Error al obtener los destinos', content: 'Parece que tenemos problemas con las base de datos, por favor intenta nuevamente más tarde.' } },
    destination: { fetchFunction: (language, id) => getDestinationById(language, id), toastErrorMessage: { title: 'Error al obtener el destino', content: 'Parece que tenemos problemas con las base de datos, por favor intenta nuevamente más tarde.' } }
};