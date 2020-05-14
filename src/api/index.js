import httpService from '../config/http';

import SPOTIFY_SEARCH_URL from '../config/constants';

export const searchItems = (query, type) => {
  return httpService.httpRequest(`${SPOTIFY_SEARCH_URL}search?q=${query}&type=${type}`);
};

const searchById = (type, id) => httpService.httpRequest(`${SPOTIFY_SEARCH_URL}/${type}/${id}`);

export default { searchItems, searchById };
