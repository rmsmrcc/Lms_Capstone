var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mysql = require("mysql");
const dotenv = require('dotenv');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

dotenv.config({ path: './.env'});

var dashboardRouter = require('./routes/dashboard');
var subjectRouter = require('./routes/subject');
var calendarRouter = require('./routes/calendar');
var usersRouter = require('./routes/users');

var app = express();
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

const PORT = process.env.PORT ||5000;

app.listen(PORT, console.log(
    `Server is running http://localhost:${PORT}/`
));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

db.connect( (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("MYSQL Connected...")
  }
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', dashboardRouter);
app.use('/subject', subjectRouter);
app.use('/calendar', calendarRouter);
app.use('/users', usersRouter);

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
