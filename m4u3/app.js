var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/*Ruta 4- Paso 1, manejador o controlador*/
var contactoRouter =require('./routes/contacto'); //contacto.js



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contacto', contactoRouter);

/*Ruta 1*/
app.get('/prueba', function(req,res){
  res.send('Hola, soy la página de prueba')
})

/*Ruta 2*/
app.get('/productos', function (req, res) {
  res.send('Ahora soy la página de productos')
})

/*Ruta 3*/
app.get('/usuarios', function (req,res){
  res.send('Yo soy la página para administrar los usuarios')
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
