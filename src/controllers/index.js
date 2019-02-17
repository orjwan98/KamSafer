const express = require('express');
const cars = require('./cars');
const add = require('./add');
const logs = require('./logs');
const addnote = require('./addnote');
const logmonth = require('./logmonth');
const notes = require('./notes');
const getstartkm = require('./getstartkm');


const router = express.Router();
router.get('/cars', cars.get);
router.post('/add', add.post);
router.get('/logs', logs.get);
router.post('/addnote', addnote.post);
router.get('/notes', notes.get);
router.get('/logmonth/:year/:month', logmonth.get);
router.get('/getstartkm/:car_id', getstartkm.get);


module.exports = router;
