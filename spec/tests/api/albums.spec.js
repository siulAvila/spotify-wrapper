import mocks from '../../mocks/spotify-response.mocks';
import SpotifyWrapper from '../../../src/main';

describe('Albums', () => {
  let spotifyWrapper;

  beforeAll(() => {
    spotifyWrapper = new SpotifyWrapper({ apiKey: 'foo' });
  });

  describe('Smoke tests', () => {
    it('should exist the searchAlbums method', () => {
      expect(spotifyWrapper.albums.searchAlbum).toBeTruthy();
    });

    it('should be a function', () => {
      expect(spotifyWrapper.albums.searchAlbum).toBeInstanceOf(Function);
    });

    it('should exist the searchAlbums method', () => {
      expect(spotifyWrapper.albums.searchAlbumsById).toBeTruthy();
    });

    it('should be a function', () => {
      expect(spotifyWrapper.albums.searchAlbumsById).toBeInstanceOf(Function);
    });
  });

  describe('search albums', () => {
    let spySearch;

    beforeEach(() => {
      spySearch = spyOn(spotifyWrapper.search, 'searchItems');
    });

    afterEach(() => {
      spySearch.calls.reset();
    });

    it('should call the search method', () => {
      spySearch.and.returnValue(mocks.responseSpotifyForAlbums);
      spotifyWrapper.albums.searchAlbum('Guns N Roses');
      expect(spotifyWrapper.search.searchItems).toHaveBeenCalled();
    });

    it('should call the search method with de url', () => {
      spySearch.and.returnValue(mocks.responseSpotifyForAlbums);
      spotifyWrapper.albums.searchAlbum('Guns N Roses');
      expect(spotifyWrapper.search.searchItems).toHaveBeenCalledWith('Guns N Roses', 'album');
    });

    it('should return a object receive by the search method', async () => {
      spySearch.and.returnValue(mocks.responseSpotifyForAlbums);
      expect(await spotifyWrapper.albums.searchAlbum('Guns N Roses')).toEqual([
        'Appetite For Destruction',
      ]);
    });

    it('should return a object receive by the search method', async () => {
      spySearch.and.returnValue({});
      expect(await spotifyWrapper.albums.searchAlbum('')).toEqual({});
    });
  });

  describe('Search albums by id', () => {
    let spySearchById;

    beforeEach(() => {
      spySearchById = spyOn(spotifyWrapper.search, 'searchById').and.returnValue(
        mocks.responseSpotifyForAlbumsById
      );
    });

    afterEach(() => {
      spySearchById.calls.reset();
    });

    it('should call the searchById method', () => {
      spotifyWrapper.albums.searchAlbumsById('41MnTivkwTO3UUJ8DrqEJJ');
      expect(spotifyWrapper.search.searchById).toHaveBeenCalled();
    });

    it('should call the search method with de url', () => {
      spotifyWrapper.albums.searchAlbumsById('41MnTivkwTO3UUJ8DrqEJJ');
      expect(spotifyWrapper.search.searchById).toHaveBeenCalledWith(
        'albums',
        '41MnTivkwTO3UUJ8DrqEJJ'
      );
    });

    it('should return a object receive by the search method', async () => {
      expect(await spotifyWrapper.search.searchById('41MnTivkwTO3UUJ8DrqEJJ')).toEqual(
        mocks.responseSpotifyForAlbumsById
      );
    });
  });
});
