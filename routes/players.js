const Router = require('express').Router();
const Player = require('../Player');

Router.put('/', (req, res) => {
    console.log('********     put');
    const data = req.body;
    console.log(data);
    if (data.player) {
        Player.update({
            x: data.player.x,
        }, {
            where: {
                username: data.player.username
            }
        }).then(result =>{
            console.log(result);
            res.json({
                error: false
            });
        }).catch( e =>{
            res.json({
                error: e.message
            });
        });
    } else {
        res.json({
            error: `Player not found in 'PUT' request`
        });
    }
});

Router.get('/', (req, res)=>{
    console.log('/player');
    res.send('player');
})

module.exports = Router;