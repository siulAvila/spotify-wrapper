import { Headers } from 'node-fetch';

import SPOTIFY_SEARCH_URL from '../../../src/config/constants';
import SpotifyWrapper from '../../../src/main';
import { handleErrors } from '../../../src/config/http';

let spotifyWrapper;
describe('Http', () => {
  beforeAll(() => {
    spotifyWrapper = new SpotifyWrapper({ apiKey: 'foo' });
  });
  const spotifyObjectResponse = { body: 'json' };
  const spotifyError = { error: { status: 401, message: 'The access token expired' } };

  describe('smoke tests', () => {
    describe('setHeader', () => {
      it('should be a function', () => {
        expect(spotifyWrapper.httpService.setHeaders).toBeInstanceOf(Function);
      });

      it('should be exist', () => {
        expect(spotifyWrapper.httpService.setHeaders).toBeTruthy();
      });
    });

    describe('httpRequest', () => {
      it('should be exist', () => {
        expect(spotifyWrapper.httpService.httpRequest).toBeTruthy();
      });

      it('should be a function', () => {
        expect(spotifyWrapper.httpService.httpRequest).toBeInstanceOf(Function);
      });
    });

    describe('handleErrors', () => {
      it('should be exist', () => {
        expect(handleErrors).toBeTruthy();
      });

      it('should be a function', () => {
        expect(handleErrors).toBeInstanceOf(Function);
      });
    });
  });

  describe('httpService.SetHeaders', () => {
    it('should return a header object', () => {
      const options = spotifyWrapper.httpService.setHeaders();
      expect(options).toBeTruthy();
    });

    it('should return a header inside a to the object', () => {
      const options = spotifyWrapper.httpService.setHeaders();
      const { headers } = options;
      expect(headers).toEqual(jasmine.any(Headers));
    });

    it('should return a header with the autorizhation code', () => {
      const options = spotifyWrapper.httpService.setHeaders();
      const { headers } = options;
      const autorizhation = headers.get('authorization');

      expect(autorizhation).toEqual('Bearer foo');
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
      spotifyWrapper.httpService.httpRequest(SPOTIFY_SEARCH_URL);
      expect(global.fetch).toHaveBeenCalled();
    });

    it('should call the setHeaders', () => {
      spyOn(spotifyWrapper.httpService, 'setHeaders');
      spotifyWrapper.httpService.httpRequest(SPOTIFY_SEARCH_URL);
      expect(spotifyWrapper.httpService.setHeaders).toHaveBeenCalled();
    });

    it('should call the fetch with the parameters', () => {
      spotifyWrapper.httpService.httpRequest(SPOTIFY_SEARCH_URL);
      expect(global.fetch).toHaveBeenCalledWith(
        SPOTIFY_SEARCH_URL,
        spotifyWrapper.httpService.setHeaders()
      );
    });

    it('returns a resolve promise and return a object', async () => {
      fetchSpy.and.resolveTo({
        json: () => {
          return Promise.resolve(spotifyObjectResponse);
        },
      });
      const response = await spotifyWrapper.httpService.httpRequest(SPOTIFY_SEARCH_URL);
      expect(response).toEqual(spotifyObjectResponse);
    });

    it('returns a reject promise', async () => {
      fetchSpy.and.resolveTo({
        json: () => {
          return Promise.resolve(spotifyError);
        },
      });
      await spotifyWrapper.httpService
        .httpRequest(SPOTIFY_SEARCH_URL)
        .catch((error) => expect(error).toEqual('The access token expired'));
    });
  });

  describe('handleError', () => {
    const { status, message } = spotifyError.error;
    it('should return a exception if receives response.error with param', () => {
      try {
        handleErrors(spotifyError);
      } catch (error) {
        expect(error).toEqual(new Error(message, status));
      }
    });

    it('should return a exception with instance of SpotifyException when receives response.error with param', () => {
      try {
        handleErrors(spotifyError);
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
      }
    });

    it('should return a object if dont receives response.error with param', () => {
      expect(handleErrors(spotifyObjectResponse)).toEqual(spotifyObjectResponse);
    });
  });
});
