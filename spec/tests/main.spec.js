import SpotifyWrapper from '../../src/main';

describe('Main', () => {
  describe('Smoke tests', () => {
    it('should be a instance of SpotifyWrapper', () => {
      const spotify = new SpotifyWrapper({});
      expect(spotify).toBeInstanceOf(SpotifyWrapper);
    });
  });
});
