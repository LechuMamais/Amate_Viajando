import { handleError } from '../../utils/handleError';
import { handleResponse } from '../../utils/handleResponse';

export const customFetch = async ({ url, method = 'GET', bodyContent = null, token = '', stringifyBody = true, contentType = 'application/json' }) => {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': contentType,
                'Authorization': token ? `Bearer ${token}` : '',
            },
            body: bodyContent && stringifyBody ? JSON.stringify(bodyContent) : bodyContent && !stringifyBody ? bodyContent : null,
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};

export const customFileFetch = async ({ url, method = 'GET', bodyContent = null, token = '', stringifyBody = true }) => {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Authorization': token ? `Bearer ${token}` : '',
            },
            body: bodyContent && stringifyBody ? JSON.stringify(bodyContent) : bodyContent && !stringifyBody ? bodyContent : null,
        });

        //console.log(response);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await handleResponse(response);
    } catch (error) {
        handleError(error);
    }
};