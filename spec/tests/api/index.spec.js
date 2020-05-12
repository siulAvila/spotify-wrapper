import search from '../../../src/api/index';

describe('API', () => {
  describe('Smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).toBeTruthy();
    });
  });
});
