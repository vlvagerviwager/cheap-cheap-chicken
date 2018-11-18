import request from 'request';

const tweetEndpoint = (port = 80) => {
  const url = `http://localhost:${port}/2432724327`;

  request.post(url, (err, res) => {
    if (err) {
      throw new Error(err);
    }

    if (res.statusCode === 200) {
      // eslint-disable-next-line no-console
      console.log('Tweet posted.');
    }
  });
};

export default tweetEndpoint;
