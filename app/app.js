var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var logger = require('morgan');
var flash = require('connect-flash');

var app = express();

// setup session
app.use(session({
  secret: 'default secret key',
  resave: false,
  saveUninitialized: true,
  cookie: {
      path: '/',
      maxAge: 36000   // Ten minutes
  }
}));

// view engine setup
app.set('views', path.join(__dirname, './resources/views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './../public')));
app.use(flash());

// routes
app.use('/', require('./routes/web'));
app.use('/api', require('./routes/api'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
