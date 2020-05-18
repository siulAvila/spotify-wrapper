const SpotifyWrapper = require('../src/main');

const spotify = new SpotifyWrapper({
  apiKey: 'key',
});

spotify.albums
  .searchAlbum('Guns')
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

spotify.search
  .searchItems('Albums', 'Guns')
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
