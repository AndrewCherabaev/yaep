# yaep: Yet Another Express Project

## requirements
- express
- twig
- pm2

## installation
- to start with yaep do:
```
	git clone git@github.com:AndrewCherabaev/yaep.git
	cd yaep
	npm i
	npm start
```
- after `npm start` pm2-process will started and you can see everything by `pm2 ls`
- default config for pm is:
```yaml
apps:
  - script      : ./bin/www
    name        : yaep
    watch       : true
    exec_mode   : fork
    instances   : 1
    error_file  : './err.log'
    out_file    : './out.log'
    autorestart : true
```


## about
it's really "Yet Another EpressJS project"
it's build on top of epressjs and uses pm2 as process manager
i can say i try to write yet another application does everything at all

## future plans
- +`passport.js` for auth
- +`socket.io` for websockets

- +`sequelize` for databases
- +`elasticsearch-js` for elasticsearch

- +`i18n` for internationalisation
- +`nedb` for something


## trouleshooting
pm2 logs have ANSIColor format and `--no-color` flag still not works properly
so for SublimeText 3, should you choose to use it, needs to install [this ANSI format plugin](https://github.com/aziz/SublimeANSI "ANSI escape codes color plugin for SublimeText 3")
after that you can open \*.log files in SublimeText 3 and do `View -> Syntax -> ANSI` to see well-formated logs