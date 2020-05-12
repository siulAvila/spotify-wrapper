import searchAlbums from '../../../src/api/albums';
import genericSearch from '../../../src/api/index';

const responseSpotifyObject = {
  albums: {
    items: ['Appetite For Destruction'],
  },
};

describe('Albums', () => {
  describe('Smoke tests', () => {
    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).toBeTruthy();
    });

    it('should be a function', () => {
      expect(searchAlbums).toBeInstanceOf(Function);
    });
  });

  describe('searchAlbums', () => {
    let spySearch;

    beforeEach(() => {
      spySearch = spyOn(genericSearch, 'search').and.returnValue(responseSpotifyObject);
    });

    afterEach(() => {
      spySearch.calls.reset();
    });

    it('should call the search method', () => {
      searchAlbums('Guns N Roses');
      expect(genericSearch.search).toHaveBeenCalled();
    });

    it('should call the search method with de url', () => {
      searchAlbums('Guns N Roses');
      expect(genericSearch.search).toHaveBeenCalledWith('Guns N Roses', 'album');
    });

    it('should return a object receive by the search method', async () => {
      expect(await searchAlbums('Guns N Roses')).toEqual(['Appetite For Destruction']);
    });
  });
});
