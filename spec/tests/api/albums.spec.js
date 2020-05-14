import search from '../../../src/api/albums';
import genericSearch from '../../../src/api/index';

import mocks from '../../mocks/spotify-response.mocks';

describe('Albums', () => {
  describe('Smoke tests', () => {
    it('should exist the searchAlbums method', () => {
      expect(search.searchAlbums).toBeTruthy();
    });

    it('should be a function', () => {
      expect(search.searchAlbums).toBeInstanceOf(Function);
    });

    it('should exist the searchAlbums method', () => {
      expect(search.searchAlbumsById).toBeTruthy();
    });

    it('should be a function', () => {
      expect(search.searchAlbumsById).toBeInstanceOf(Function);
    });
  });

  describe('search albums', () => {
    let spySearch;

    beforeEach(() => {
      spySearch = spyOn(genericSearch, 'searchItems');
    });

    afterEach(() => {
      spySearch.calls.reset();
    });

    it('should call the search method', () => {
      spySearch.and.returnValue(mocks.responseSpotifyForAlbums);
      search.searchAlbums('Guns N Roses');
      expect(genericSearch.searchItems).toHaveBeenCalled();
    });

    it('should call the search method with de url', () => {
      spySearch.and.returnValue(mocks.responseSpotifyForAlbums);
      search.searchAlbums('Guns N Roses');
      expect(genericSearch.searchItems).toHaveBeenCalledWith('Guns N Roses', 'album');
    });

    it('should return a object receive by the search method', async () => {
      spySearch.and.returnValue(mocks.responseSpotifyForAlbums);
      expect(await search.searchAlbums('Guns N Roses')).toEqual(['Appetite For Destruction']);
    });

    it('should return a object receive by the search method', async () => {
      spySearch.and.returnValue({});
      expect(await search.searchAlbums('')).toEqual({});
    });
  });

  describe('Search albums by id', () => {
    let spySearchById;

    beforeEach(() => {
      spySearchById = spyOn(genericSearch, 'searchById').and.returnValue(
        mocks.responseSpotifyForAlbumsById
      );
    });

    afterEach(() => {
      spySearchById.calls.reset();
    });

    it('should call the searchById method', () => {
      search.searchAlbumsById('41MnTivkwTO3UUJ8DrqEJJ');
      expect(genericSearch.searchById).toHaveBeenCalled();
    });

    it('should call the search method with de url', () => {
      search.searchAlbumsById('41MnTivkwTO3UUJ8DrqEJJ');
      expect(genericSearch.searchById).toHaveBeenCalledWith('albums', '41MnTivkwTO3UUJ8DrqEJJ');
    });

    it('should return a object receive by the search method', async () => {
      expect(await genericSearch.searchById('41MnTivkwTO3UUJ8DrqEJJ')).toEqual(
        mocks.responseSpotifyForAlbumsById
      );
    });
  });
});
