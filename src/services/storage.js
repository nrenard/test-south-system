const resource = 'favorites';

export const getFavorites = () => JSON.parse(localStorage.getItem(resource));

export const setFavorites = data => localStorage.setItem(resource, JSON.stringify(data));
