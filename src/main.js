import interceptors from './utils/interceptor';
import SPOTIFY_SEARCH_URL from './configs/constants';

const search = {
  genericSearch: (query, type) =>
    fetch(`${SPOTIFY_SEARCH_URL}q=${query}&type=${type}`, interceptors.setHeaders())
      .then((response) => response.json())
      .catch((error) => error),

  searchAlbums: (query) => {
    search.genericSearch(query, 'albums');
  },

  searchArtists: (query) => {
    search.genericSearch(query, 'artists');
  },

  searchTracks: (query) => {
    search.genericSearch(query, 'tracks');
  },

  searchPlaylists: (query) => {
    search.genericSearch(query, 'playlists');
  },
};

export default search;
