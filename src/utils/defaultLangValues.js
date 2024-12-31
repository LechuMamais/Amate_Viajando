import { languagesAvailable } from './languagesAvailable';

export const defaultLangValues = languagesAvailable.reduce((acc, lang) => {
    acc[lang.iso3code] = {
        name: '',
        heading: '',
        description: '',
        longDescription: '',
    };
    return acc;
}, {});

export const defaultArticleLangValues = languagesAvailable.reduce((acc, lang) => {
    acc[lang.iso3code] = {
        title: '',
        subtitle: '',
        content: '',
    };
    return acc;
}, {});