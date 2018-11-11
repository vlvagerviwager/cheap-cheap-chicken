import request from 'request';

const tweetEndpoint = (port = 80) => {
  const url = `http://localhost:${port}/2432724327`;

  request.post(url, (err, res) => {
    if (!err && res.statusCode === 200) {
      if (err) {
        throw new Error(err);
      }
    }
  });
};

export default tweetEndpoint;
