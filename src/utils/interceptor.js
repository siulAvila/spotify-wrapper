import { Headers } from 'node-fetch';

require('dotenv/config');

const inteceptors = {
  setHeaders: () => {
    const options = {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SPOTIFY_API_KEY}`,
      }),
    };
    return options;
  },
};

export default inteceptors;
