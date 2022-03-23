const express = require('express');
const path = require('path');
const app = express();

const rutas = require('./routes/index');

app.set("port", process.env.PORT || 80);
app.use('/', rutas);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get("port"), () => {
    console.log("Server Run on port: " + app.get("port"));
});