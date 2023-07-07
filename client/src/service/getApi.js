import config from "../asest/config";
export const getApi = (urlRemaining) => {
    const url = `${config.url}${urlRemaining}`;
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error al obtener los datos');
            }
            return res.json()
        })
};
export const getApiUrl = (url) => {
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Error al obtener los datos');
            }
            return res.json()
        })
};