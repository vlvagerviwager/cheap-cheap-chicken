import request from 'request';
import tweetEndpoint from './bot';

request.post = jest.fn();

describe('tweetEndpoint', () => {
  test('exists', () => {
    expect(tweetEndpoint).toBeDefined();
  });

  test('calls request.post', () => {
    tweetEndpoint();
    expect(request.post).toHaveBeenCalled();
  });
});
