const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {FileCSS: './css/main.css'});
})

router.get('/de/', (req, res) => {
    res.render('deutch', {FileCSS: '../css/main.css'});
})

router.get('/sp/', (req, res) => {
    res.render('spanish', {FileCSS: '../css/main.css'});
})

module.exports = router;