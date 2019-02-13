const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./controllers');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.set('port', 4556);
module.exports = app;
