const Router = require('express').Router();
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