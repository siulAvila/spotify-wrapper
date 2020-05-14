import { Headers } from 'node-fetch';

global.fetch = require('node-fetch');

export function SpotifyException(status, message) {
  this.message = message;
  this.status = status;
}

export const handleErrors = (response) => {
  if (response.error) {
    const { status, message } = response.error;
    throw new SpotifyException(status, message);
  } else {
    return response;
  }
};

const httpService = {
  setHeaders: () => {
    const options = {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `bear foo`,
      }),
    };
    return options;
  },

  httpRequest: (url) => {
    return fetch(url, httpService.setHeaders())
      .then((response) => response.json())
      .then((response) => handleErrors(response))
      .catch((error) => Promise.reject(error.message));
  },
};

export default httpService;
