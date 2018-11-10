import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import Twit from 'twit';

/*
 * TODO:
 *
 * - Fix "Error: { Error: Invalid or expired token."
 * - Host on free Heroku + wake it up with New Relic addon; generate code snippet from Postman
 *     - https://blog.andyjiang.com/intermediate-cron-jobs-with-heroku
 * - Use cron-job.org to hit /BOT_ENDPOINT to wake up app and make the bot tweet
 * - Unit tests (Jest)
 */

// Setup
dotenv.config();
const app = express();
const config = {
  twitter: {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  },
};

// Set up Twit
let T;
try {
  T = new Twit(config.twitter);
  // eslint-disable-next-line no-console
  console.log(`Ready to tweet! Send a GET or POST request to localhost/${process.env.BOT_ENDPOINT}`);
} catch (err) {
  // eslint-disable-next-line no-console
  console.error(err, 'Sorry, the .env file does not have the correct settings in order to tweet.');
}

app.use(express.static('public'));

const postTweet = (tweetText, res) => {
  T.post('statuses/update', { status: tweetText }, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Error:', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

function getRandomQuote() {
  const data = fs.readFileSync(`${__dirname}/../src/data/quotes.json`, 'utf8');
  const { quotes } = JSON.parse(data);
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

app.all(`/${process.env.BOT_ENDPOINT}`, (req, res) => {
  const tweetText = `${getRandomQuote()} #PaRappatheRapper #PaRappa #パラッパラッパー`;
  postTweet(tweetText, res);
});

const listener = app.listen(process.env.PORT, () => {
  const { port } = listener.address();
  // eslint-disable-next-line no-console
  console.log(`@CheapCheapChkn bot is running on port ${port}`);
});
