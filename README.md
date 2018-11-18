# [@CheapCheapChkn](https://twitter.com/CheapCheapChkn)

Have you ever wanted to be yelled at by a chicken from the kitchen?

A Twitter bot that tweets quotes from Cheap Cheap Chicken's rap, from the videogame PaRappa the Rapper.

Source adapted from [twitterbot](https://twitterbot.glitch.me/) on Glitch.

## Usage

### Run

1. Populate `.env-template` file and rename to `.env`
1. `npm install -g yarn`
1. `yarn start`
1. Send POST or GET to http://localhost:{PORT}/2432724327
    - This will trigger [@CheapCheapChkn](https://twitter.com/CheapCheapChkn) to tweet a random quote from her rap. Enjoy!

### Lint

1. `yarn lint`

## Technologies

- Deployed on [Heroku](https://www.heroku.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Twit](https://github.com/ttezel/twit)
- [Babel](https://babeljs.io/)
- [Yarn](https://yarnpkg.com/en/)
- [ESLint](https://eslint.org/)
