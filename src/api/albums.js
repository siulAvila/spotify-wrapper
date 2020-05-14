export default function albums() {
  return {
    searchAlbum: async (query) => {
      const albumsList = await this.search.searchItems(query, 'album');
      if (albumsList.albums && albumsList.albums.items) {
        return albumsList.albums.items;
      }
      return albumsList;
    },

    searchAlbumsById: async (id) => {
      const albumsList = await this.search.searchById('albums', id);
      return albumsList;
    },
  };
}
