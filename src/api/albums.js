import genericSearch from './index';

const searchAlbums = async (query) => {
  const albums = await genericSearch.searchItems(query, 'album');
  if (albums.albums && albums.albums.items) {
    return albums.albums.items;
  }
  return albums;
};

const searchAlbumsById = async (id) => {
  const albums = await genericSearch.searchById('albums', id);
  return albums;
};

export default { searchAlbums, searchAlbumsById };
