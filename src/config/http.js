import { Headers } from 'node-fetch';

import keys from './keys';

global.fetch = require('node-fetch');

const httpService = {
  setHeaders: () => {
    const options = {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `${keys.spotifyAuthorization}`,
      }),
    };
    return options;
  },

  httpRequest: (url) => {
    return fetch(url, httpService.setHeaders())
      .then((response) => response.json())
      .catch((error) => error);
  },
};

export default httpService;
