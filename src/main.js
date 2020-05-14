import albums from './api/albums';
import search from './api/index';

import SPOTIFY_API_URL from './config/constants';
import httpService from './config/http';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiUrl = options.apiUrl || SPOTIFY_API_URL;
    this.apiKey = options.apiKey;
    this.albums = albums.bind(this)();
    this.search = search.bind(this)();
    this.httpService = httpService.bind(this)();
  }
}
