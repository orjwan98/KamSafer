const express = require('express');
const cars = require('./cars');
const add = require('./add');
const logs = require('./logs');
const addnote = require('./addnote');
const logmonth = require('./logmonth');
const notes = require('./notes');
const login = require('./login');
const checkauth = require('./checkauth');
const cookiesValidator = require('../validation/cookieVaildator.js');
const getstartkm = require('./getstartkm');

const router = express.Router();
router.get('/cars', cookiesValidator, cars.get);
router.post('/add', cookiesValidator, add.post);
router.get('/logs', cookiesValidator, logs.get);
router.post('/addnote', cookiesValidator, addnote.post);
router.get('/notes', cookiesValidator, notes.get);
router.get('/logmonth/:year/:month', cookiesValidator, logmonth.get);
router.post('/login', login.post);
router.get('/checkauth', checkauth.get);
router.get('/getstartkm/:car_id', getstartkm.get);

module.exports = router;
