import genericSearch from './index';

const searchAlbums = async (query) => {
  const albums = await genericSearch.search(query, 'album');
  return albums.albums.items;
};

export default searchAlbums;
