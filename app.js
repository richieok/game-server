const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const Sequelize = require('sequelize');
// const Post = require('./Post');
const Player = require('./Player');
const app = express();
const port = 3000;
const indexRoute = require('./routes/index');
const playersRoute = require('./routes/players');
// const meshRoute = require('./routes/meshes');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));



app.use( function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT ,POST, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // allow preflight
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use('/', indexRoute);
app.use('/players', playersRoute);
// app.use('/meshes', meshRoute);

app.listen(port, ()=> console.log(`Game server listening on port: ${port}`));
