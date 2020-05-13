import httpService from '../config/http';

import SPOTIFY_SEARCH_URL from '../config/constants';

const searchItems = (query, type) => {
  return httpService.httpRequest(`${SPOTIFY_SEARCH_URL}search?q=${query}&type=${type}`);
};

const searchById = async (type, id) =>
  httpService.httpRequest(`${SPOTIFY_SEARCH_URL}/${type}/${id}`);

export default { searchItems, searchById };
