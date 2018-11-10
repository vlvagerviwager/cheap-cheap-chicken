import dotenv from 'dotenv';
import express from 'express';
import fs from 'fs';
import Twit from 'twit';

/*
 * TODO:
 *
 * - Use cron-job.org to hit /BOT_ENDPOINT to wake up app and make the bot tweet
 * - Unit tests (Jest)
 */

dotenv.config();
const app = express();
const config = {
  twitter: {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  }
};

try {
  const T = new Twit(config.twitter);
  console.log(`Ready to tweet! Send a GET or POST request to {SOMEWHERE}/${process.env.BOT_ENDPOINT}`);
}
catch (err) {
  console.error(err, 'Sorry, the .env file does not have the correct settings in order to tweet.');
}

app.use(express.static('public'));

const postTweet = (statusText) => {
  T.post('statuses/update', { status: statusText }, (err) => {
    if (err) {
      console.log('Error:', err);
      res.sendStatus(500);
    }
    else {
      res.sendStatus(200);
    }
  });
}

function getRandomQuote() {
  var data = fs.readFileSync(`${__dirname}/../src/data/quotes.json`, 'utf8');
  const quotes = JSON.parse(data).quotes;
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

app.all('/' + process.env.BOT_ENDPOINT, (req, res) => {
  postTweet(`We're makin' us a cake that you never seen before. #PaRappatheRapper #PaRappa #パラッパラッパー`);
});

const listener = app.listen(process.env.PORT, function () {
  console.log('@CheapCheapChkn bot is running on port ' + listener.address().port);
});
