import httpService from '../config/http';

import SPOTIFY_SEARCH_URL from '../config/constants';

const search = (query, type) =>
  httpService.httpRequest(`${SPOTIFY_SEARCH_URL}q=${query}&type=${type}`);

export default { search };
