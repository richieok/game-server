const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Sequelize = require('sequelize');
// const Post = require('./Post');
const Player = require('./Player');
const app = express();
const port = 3000;
const indexRoute = require('./routes/index');
const playersRoute = require('./routes/players');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use( function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT ,POST, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // allow preflight
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

app.use('/', indexRoute);
app.use('/players', playersRoute);

app.listen(port, ()=> console.log(`Game server listening on port: ${port}`));
