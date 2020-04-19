const Router = require('express').Router();
const path = require('path');
const Player = require('../Player');

Router.get('/', (req, res) => {
    Player.findAll({
        raw: true
    })
        .then(players => {
            // console.log(players);
            res.json(players);
        });
});

Router.get('/mesh/:name', (req, res, next)=>{
    const options = {
        root: path.join(__dirname, '../public/meshes'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    const filename = req.params.name;
    console.log(`Filename: ${filename}`);
    res.sendFile(filename, options, (err)=>{
        if (err){
            console.log(err);
            next();
        } else {
            console.log('Sent: ', filename);
        }
    });
});

Router.post('/', (req, res) => {
    const rdata = req.body;
    Player.findAll({
        raw: true,
        where: {
            username: rdata.user
        }
    })
        .then(players => {
            if (!players.length) {
                return res.json({
                    error: true
                });
            }
            return res.json({
                error: null,
                position: {
                    x: players[0].x,
                    y: players[0].y
                }
            });
        });
});

module.exports = Router;