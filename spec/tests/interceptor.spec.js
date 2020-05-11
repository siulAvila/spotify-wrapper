import { Headers } from 'node-fetch';

import interceptors from '../../src/utils/interceptor';

describe('smoke tests', () => {
  it('should be exist', () => {
    expect(interceptors.setHeaders).toBeTruthy();
  });

  it('should be a function', () => {
    expect(interceptors.setHeaders).toBeInstanceOf(Function);
  });

  it('should return a header object', () => {
    const options = interceptors.setHeaders();
    expect(options).toBeTruthy();
  });

  it('should return a header inside a to the object', () => {
    const options = interceptors.setHeaders();
    const { headers } = options;

    expect(headers).toEqual(jasmine.any(Headers));
  });
});
