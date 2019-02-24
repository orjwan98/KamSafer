const express = require('express');
const getcars = require('./getcars');
const add = require('./add');
const logs = require('./logs');
const addnote = require('./addnote');
const logmonth = require('./logmonth');
const notes = require('./notes');
const login = require('./login');
const checkauth = require('./checkauth');
const cookiesValidator = require('../validation/cookieVaildator.js');
const getstartkm = require('./getstartkm');
const carsinfo = require('./carsinfo');

const router = express.Router();
router.get('/getcars', cookiesValidator, getcars.get);
router.post('/add', cookiesValidator, add.post);
router.get('/logs/:year/:month', cookiesValidator, logs.get);
router.post('/addnote', cookiesValidator, addnote.post);
router.get('/notes', cookiesValidator, notes.get);
router.get('/logmonth/:year/:month', cookiesValidator, logmonth.get);
router.post('/login', login.post);
router.get('/checkauth', cookiesValidator, checkauth.get);
router.get('/getstartkm', getstartkm.get);
router.get('/carsinfo', carsinfo.get);

module.exports = router;
