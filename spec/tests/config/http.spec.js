import { Headers } from 'node-fetch';

import httpService from '../../../src/config/http';

import SPOTIFY_SEARCH_URL from '../../../src/config/constants';
import keys from '../../../src/config/keys';

describe('Http', () => {
  describe('smoke tests', () => {
    describe('setHeader', () => {
      it('should be a function', () => {
        expect(httpService.setHeaders).toBeInstanceOf(Function);
      });

      it('should be exist', () => {
        expect(httpService.setHeaders).toBeTruthy();
      });
    });

    describe('httpRequest', () => {
      it('should be exist', () => {
        expect(httpService.httpRequest).toBeTruthy();
      });

      it('should be a function', () => {
        expect(httpService.httpRequest).toBeInstanceOf(Function);
      });
    });
  });

  describe('httpService.SetHeaders', () => {
    it('should return a header object', () => {
      const options = httpService.setHeaders();
      expect(options).toBeTruthy();
    });

    it('should return a header inside a to the object', () => {
      const options = httpService.setHeaders();
      const { headers } = options;
      expect(headers).toEqual(jasmine.any(Headers));
    });

    it('should return a header with the autorizhation code', () => {
      const options = httpService.setHeaders();
      const { headers } = options;
      const autorizhation = headers.get('authorization');

      expect(autorizhation).toEqual(keys.spotifyAuthorization);
    });
  });

  describe('httpRequest', () => {
    let fetchSpy;

    beforeEach(() => {
      fetchSpy = spyOn(global, 'fetch').and.callFake(() => {
        return new Promise((resolve, reject) => {});
      });
    });

    afterEach(() => {
      fetchSpy.calls.reset();
    });

    it('should call the fetch function', () => {
      httpService.httpRequest(SPOTIFY_SEARCH_URL);
      expect(global.fetch).toHaveBeenCalled();
    });

    it('should call the setHeaders', () => {
      spyOn(httpService, 'setHeaders');
      httpService.httpRequest(SPOTIFY_SEARCH_URL);
      expect(httpService.setHeaders).toHaveBeenCalled();
    });

    it('should call the fetch with the parameters', () => {
      httpService.httpRequest(SPOTIFY_SEARCH_URL);
      expect(global.fetch).toHaveBeenCalledWith(SPOTIFY_SEARCH_URL, httpService.setHeaders());
    });

    it('returns a resolve promise and return a object', async () => {
      fetchSpy.and.resolveTo({
        json: () => {
          return Promise.resolve({ body: 'json' });
        },
      });
      const response = await httpService.httpRequest(SPOTIFY_SEARCH_URL);
      expect(response).toEqual({ body: 'json' });
    });

    it('returns a reject promise', async () => {
      fetchSpy.and.rejectWith({ error: { code: 401 } });
      const response = await httpService.httpRequest(SPOTIFY_SEARCH_URL);
      expect(response).toEqual({ error: { code: 401 } });
    });
  });
});
