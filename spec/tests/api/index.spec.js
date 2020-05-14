import search from '../../../src/api/index';
import httpService from '../../../src/config/http';

import mocks from '../../mocks/spotify-response.mocks';
import SPOTIFY_SEARCH_URL from '../../../src/config/constants';

describe('API', () => {
  let spyHttpRequest;

  describe('Smoke tests', () => {
    describe('Search items', () => {
      it('should exist the search method', () => {
        expect(search.searchItems).toBeTruthy();
      });

      it('should be a function', () => {
        expect(search.searchItems).toBeInstanceOf(Function);
      });
    });

    describe('Search by Id', () => {
      it('should existe the search by id method', () => {
        expect(search.searchById).toBeTruthy();
      });

      it('should be a function', () => {
        expect(search.searchById).toBeTruthy();
      });
    });
  });

  beforeEach(() => {
    spyHttpRequest = spyOn(httpService, 'httpRequest');
  });
  afterEach(() => {
    spyHttpRequest.calls.reset();
  });

  describe('Search items', () => {
    it('should call the http request method', () => {
      search.searchItems('Guns N Roses', 'album');
      expect(httpService.httpRequest).toHaveBeenCalled();
    });

    it('should call the httpRequest method with right params', () => {
      search.searchItems('Guns N Roses', 'album');
      expect(httpService.httpRequest).toHaveBeenCalledWith(
        `${SPOTIFY_SEARCH_URL}search?q=Guns N Roses&type=album`
      );
    });

    it('should return the response received by the httpRequest method', () => {
      spyHttpRequest.and.returnValue(mocks.responseSpotifyForAlbums);
      expect(search.searchItems('Guns N Roses', 'album')).toEqual(mocks.responseSpotifyForAlbums);
    });
  });

  describe('Search by id', () => {
    it('should call the http request method', () => {
      search.searchById('albums', '41MnTivkwTO3UUJ8DrqEJJ');
      expect(httpService.httpRequest).toHaveBeenCalled();
    });

    it('should call the httpRequest method with right params', () => {
      search.searchById('albums', '41MnTivkwTO3UUJ8DrqEJJ');
      expect(httpService.httpRequest).toHaveBeenCalledWith(
        `${SPOTIFY_SEARCH_URL}/albums/41MnTivkwTO3UUJ8DrqEJJ`
      );
    });

    it('should return the response received by the httpRequest method', () => {
      spyHttpRequest.and.returnValue(mocks.responseSpotifyForAlbumsById);
      expect(search.searchById('albums', '41MnTivkwTO3UUJ8DrqEJJ')).toEqual(
        mocks.responseSpotifyForAlbumsById
      );
    });
  });
});
