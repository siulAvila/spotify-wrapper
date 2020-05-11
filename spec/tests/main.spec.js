import searchSpotify from '../../src/main';
import inteceptors from '../../src/utils/interceptor';

global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {
  describe('Smoke tests', () => {
    it('should exist the search method', () => {
      expect(searchSpotify.genericSearch).toBeTruthy();
    });

    it('should exist the searchAlbums method', () => {
      expect(searchSpotify.searchAlbums).toBeTruthy();
    });

    it('should exist the searchArtists method', () => {
      expect(searchSpotify.searchArtists).toBeTruthy();
    });

    it('should exist the searchTracks method', () => {
      expect(searchSpotify.searchTracks).toBeTruthy();
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchSpotify.searchPlaylists).toBeTruthy();
    });
  });

  describe('fetch calls', () => {
    let fetchSpyOn;
    beforeEach(() => {
      fetchSpyOn = spyOn(global, 'fetch');
      fetchSpyOn.and.callFake(() => {
        return new Promise((_reject, _resolve) => {});
      });
    });

    afterEach(() => {
      fetchSpyOn.calls.reset();
    });

    describe('Generic search', () => {
      it('should fetch be called in search method', () => {
        searchSpotify.genericSearch();
        expect(global.fetch).toHaveBeenCalled();
      });

      describe('call with url of spotify web api', () => {
        it('with one type paramater', () => {
          searchSpotify.genericSearch('incubus', 'artist');
          expect(global.fetch).toHaveBeenCalledWith(
            'https://api.spotify.com/v1/search?q=incubus&type=artist',
            inteceptors.setHeaders()
          );
        });

        it('with multiples type of paramater', () => {
          searchSpotify.genericSearch('incubus', ['artist', 'albuns']);
          expect(global.fetch).toHaveBeenCalledWith(
            'https://api.spotify.com/v1/search?q=incubus&type=artist,albuns',
            inteceptors.setHeaders()
          );
        });
      });

      it('returns a resolve promise', async () => {
        fetchSpyOn.and.resolveTo({
          json: () => {
            return Promise.resolve({ body: 'json' });
          },
        });
        const artists = await searchSpotify.genericSearch('incubus', ['artist', 'albuns']);
        expect(artists).toEqual({ body: 'json' });
      });

      it('returns a reject promise', async () => {
        fetchSpyOn.and.rejectWith({ error: { code: 401 } });
        const artists = await searchSpotify.genericSearch('incubus', ['artist', 'albuns']);
        expect(artists).toEqual({ error: { code: 401 } });
      });

      it('should call the setHeaders function', () => {
        spyOn(inteceptors, 'setHeaders');
        searchSpotify.genericSearch('incubus', 'artist');
        expect(inteceptors.setHeaders).toHaveBeenCalled();
      });
    });
  });

  describe('Type searchs', () => {
    let genericSearchSpyon;
    beforeEach(() => {
      genericSearchSpyon = spyOn(searchSpotify, 'genericSearch');
    });

    afterEach(() => genericSearchSpyon.calls.reset());

    describe('search albums', () => {
      it('should call the generic search', () => {
        searchSpotify.searchAlbums('Appetite for descruction');
        expect(searchSpotify.genericSearch).toHaveBeenCalled();
      });
    });

    describe('search artists', () => {
      it('should call the generic search', () => {
        searchSpotify.searchArtists('Guns N Roses');
        expect(searchSpotify.genericSearch).toHaveBeenCalled();
      });
    });

    describe('search tracks', () => {
      it('should call the generic search', () => {
        searchSpotify.searchTracks('Welcome to the jungle');
        expect(searchSpotify.genericSearch).toHaveBeenCalled();
      });
    });

    describe('search playlists', () => {
      it('should call the generic search', () => {
        searchSpotify.searchPlaylists('Hard Rock 80s');
        expect(searchSpotify.genericSearch).toHaveBeenCalled();
      });
    });
  });
});
