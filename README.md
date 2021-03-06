# yaep: Yet Another Express Project

## requirements
- express
- twig
- pm2

## installation
- to start with yaep do:
```bash
git clone git@github.com:AndrewCherabaev/yaep.git
cd yaep
npm i
npm start
```
- after `npm start` pm2-process will started and you can see everything by `pm2 ls`
- default config for pm is:
```yaml
apps:
  - script:       ./bin/www
    name:         yaep
    exec_mode:    fork
    autorestart:  true
    watch:        true
    instances:    1
    merge_logs:   true
    error_file:   './logs/error.log'
    out_file:     './logs/access.log'
    env:
      PORT:       3000
      NODE_PATH:  './app'
```
last line in `env` params helps me to require modules from app root like `require('controllers/index')` and not like `require('./../controllers/index')`

## about
it's really "Yet Another EpressJS project"

it's build on top of epressjs and uses pm2 as process manager

i can say i try to write yet another application does everything at all

## future plans
in general, future plans is to add some useful (really useful) modules as much as possible

### nodules
_yes, because i mean 'node modules'_
- ~~move everything the app folder~~ new project root `app/`
- ~~express-session for sessions~~ 
- ~~nedb or lowdb for something~~ use [`lowdb`](https://github.com/typicode/lowdb) as default driver. nedb not works fine for me
- ~~joi for validator~~ [`joi`](https://github.com/hapijs/joi) used for validating requests
- ~~connect-flash~~ `connect-flash` for flash messages
- [`passport.js`](http://www.passportjs.org) for auth
- [`socket.io`](https://socket.io) for websockets
- [`sequelize`](http://docs.sequelizejs.com) for databases
- [`knex`](https://knexjs.org) plus [`bookshelf`](http://bookshelfjs.org) for query builder
- [`finale`](https://github.com/tommybananas/finale) for RESTify models
- [`elasticsearch-js`](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html) for elasticsearch
- [`i18n`](https://github.com/fnando/i18n-js) for internationalisation
- [`webpack`](https://webpack.js.org) for building
- [`bower`](https://bower.io) for browser libraries
- [`dotenv`](https://github.com/motdotla/dotenv) or [`dotenv-safe`](https://github.com/rolodato/dotenv-safe) for environment
- [`lodash`](https://lodash.com) or [`underscore`](https://underscorejs.org) for functional
- [`babel-cli`](https://babeljs.io/docs/en/babel-cli) and [`babel-preset-env`](https://babeljs.io/docs/en/babel-preset-env/) for `import ... from` and `exports` ES6 fetures; or not

### features
- admin panel
- CMS with built-in editior
- CLI application `yaep` for generating some
  + published as [`yaep-consolidator`](https://www.npmjs.com/package/yaep-consolidator) foreign module
- [`bootstrap`](http://getbootstrap.com)/[`foundation`](https://foundation.zurb.com)/[`semantic-ui`](https://semantic-ui.com)/[`material`](https://material.io/design/), [`fa`](https://fontawesome.com) for frontent design


## trouleshooting
pm2 logs have ANSIColor format and `--no-color` flag still not works properly

so for SublimeText 3, should you choose to use it, needs to install [this ANSI format plugin](https://github.com/aziz/SublimeANSI "ANSI escape codes color plugin for SublimeText 3")

after that you can open \*.log files in SublimeText 3 and do `View -> Syntax -> ANSI` to see well-formated logs