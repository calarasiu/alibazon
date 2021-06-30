require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const Sentry = require('@sentry/node');
const Tracing = require("@sentry/tracing");
const flash = require('connect-flash');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware')

const home = require('./routes/home_route');
const genderCategories = require('./routes/genderCategories_route');
const subcategories = require('./routes/subcategories_route');
const products = require('./routes/products_route');
const product = require('./routes/product_route');

let app = express();
Sentry.init({
  dsn: "https://1f63bbc7c970424bb972cd60174020c1@o890914.ingest.sentry.io/5839735",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(sassMiddleware({
  src: path.join(__dirname, 'bootstrap'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

// get the url to be used in the header view component, to decide witch gender btn to highlight
app.use((req, res, next) => {
  res.locals.url = req.originalUrl;
  next();
});


app.use('/', home);
app.use('/', genderCategories);
app.use('/', subcategories);
app.use('/', products);
app.use('/', product);

app.get('/debug-sentry', function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler({
  shouldHandleError(error) {
    // Capture all 404 and 500 errors
    if (error.status === 400 || error.status === 500) {
      return true;
    }
    return false;
    },
  })
);

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
  res.status(err.status || 500 || 503);
  res.render('error');
});

module.exports = app;
