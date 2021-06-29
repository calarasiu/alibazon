require('dotenv').config(); // this loads the defined variables from .env

const config = {
  ApiKey: process.env.API_KEY
  UrlBase: process.env.URL_BASE
 };
 
 module.exports = config;