const path = require('path');
const express = require('express');
const cookieparser = require('cookie-parser');
const routes = require('./controllers/index');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(routes);
app.set('port', process.env.PORT || 4000);
module.exports = app;
