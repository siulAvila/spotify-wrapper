import { Headers } from 'node-fetch';

global.fetch = require('node-fetch');

export const handleErrors = (response) => {
  if (response.error) {
    const { status, message } = response.error;
    throw new Error(message, status);
  } else {
    return response;
  }
};

export default function httpService() {
  return {
    setHeaders: () => {
      const options = {
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        }),
      };
      return options;
    },

    httpRequest: (url) => {
      return fetch(url, this.httpService.setHeaders())
        .then((response) => response.json())
        .then((response) => handleErrors(response))
        .catch((error) => Promise.reject(error.message));
    },
  };
}
