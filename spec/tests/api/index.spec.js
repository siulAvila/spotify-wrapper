import search from '../../../src/api/index';
import httpService from '../../../src/config/http';

import mocks from '../../mocks/spotify-response.mocks';
import SPOTIFY_SEARCH_URL from '../../../src/config/constants';
import SpotifyWrapper from '../../../src/main';

describe('API', () => {
  let spyHttpRequest;
  let spotifyWrapper;
  beforeAll(() => {
    spotifyWrapper = new SpotifyWrapper({ apiKey: 'foo' });
  });

  describe('Smoke tests', () => {
    describe('Search items', () => {
      it('should exist the search method', () => {
        expect(spotifyWrapper.search.searchItems).toBeTruthy();
      });

      it('should be a function', () => {
        expect(spotifyWrapper.search.searchItems).toBeInstanceOf(Function);
      });
    });

    describe('Search by Id', () => {
      it('should existe the search by id method', () => {
        expect(spotifyWrapper.search.searchById).toBeTruthy();
      });

      it('should be a function', () => {
        expect(spotifyWrapper.search.searchById).toBeTruthy();
      });
    });
  });

  beforeEach(() => {
    spyHttpRequest = spyOn(spotifyWrapper.httpService, 'httpRequest');
  });
  afterEach(() => {
    spyHttpRequest.calls.reset();
  });

  describe('Search items', () => {
    it('should call the http request method', () => {
      spotifyWrapper.search.searchItems('Guns N Roses', 'album');
      expect(spotifyWrapper.httpService.httpRequest).toHaveBeenCalled();
    });

    it('should call the httpRequest method with right params', () => {
      spotifyWrapper.search.searchItems('Guns N Roses', 'album');
      expect(spotifyWrapper.httpService.httpRequest).toHaveBeenCalledWith(
        `${SPOTIFY_SEARCH_URL}/search?q=Guns N Roses&type=album`
      );
    });

    it('should return the response received by the httpRequest method', () => {
      spyHttpRequest.and.returnValue(mocks.responseSpotifyForAlbums);
      expect(spotifyWrapper.search.searchItems('Guns N Roses', 'album')).toEqual(
        mocks.responseSpotifyForAlbums
      );
    });
  });

  describe('Search by id', () => {
    it('should call the http request method', () => {
      spotifyWrapper.search.searchById('albums', '41MnTivkwTO3UUJ8DrqEJJ');
      expect(spotifyWrapper.httpService.httpRequest).toHaveBeenCalled();
    });

    it('should call the httpRequest method with right params', () => {
      spotifyWrapper.search.searchById('41MnTivkwTO3UUJ8DrqEJJ', 'albums');
      expect(spotifyWrapper.httpService.httpRequest).toHaveBeenCalledWith(
        `${SPOTIFY_SEARCH_URL}/albums/41MnTivkwTO3UUJ8DrqEJJ`
      );
    });

    it('should return the response received by the httpRequest method', () => {
      spyHttpRequest.and.returnValue(mocks.responseSpotifyForAlbumsById);
      expect(spotifyWrapper.search.searchById('albums', '41MnTivkwTO3UUJ8DrqEJJ')).toEqual(
        mocks.responseSpotifyForAlbumsById
      );
    });
  });
});
