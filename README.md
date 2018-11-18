# [@CheapCheapChkn](https://twitter.com/CheapCheapChkn)

Have you ever wanted to be yelled at by a chicken from the kitchen?

A Twitter bot that tweets quotes from Cheap Cheap Chicken's raps, from the video game PaRappa the Rapper.

Source adapted from [twitterbot](https://twitterbot.glitch.me/) on Glitch.

## Usage

### Run

1. Populate `.env-template` file and rename to `.env`
    - Don't show anyone or push to version control! It's a secret 🗝
1. `npm install -g yarn`
1. `yarn start`
    - This triggers [@CheapCheapChkn](https://twitter.com/CheapCheapChkn) to tweet a random quote from her rap
1. Send additional POST or GET requests to http://localhost:{PORT}/2432724327 to trigger more tweets. Enjoy!

### Lint

1. `yarn lint`

### Test

1. `yarn test`

### Heroku deployment

- Access devDeps (so it doesn't freak out about Babel): `heroku config:set YARN_PRODUCTION=false`
- Deploy: `git push heroku master`
- `heroku logs`
- `heroku restart`

## Technologies

- Deployed on [Heroku](https://www.heroku.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Twit](https://github.com/ttezel/twit)
- [Babel](https://babeljs.io/)
- [Yarn](https://yarnpkg.com/en/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
