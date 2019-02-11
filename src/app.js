const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.set('port', process.env.PORT || 4000);
module.exports = app;
