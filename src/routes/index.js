const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {FileCSS: './css/main.css', FileICO: './image/dodo.png'});
})

router.get('/de/', (req, res) => {
    res.render('deutch', {FileCSS: '../css/main.css', FileICO: '../image/dodo.png'});
})

router.get('/sp/', (req, res) => {
    res.render('spanish', {FileCSS: '../css/main.css', FileICO: '../image/dodo.png'});
})

module.exports = router;