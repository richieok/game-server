const express = require('express');
const cors = require('cors');
const Sequelize = require('sequelize');
const Post = require('./Post');
const app = express();
const port = 3000;

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '/Users/adolphusokoro/Documents/sqlite/test.db'
});

app.use(cors());

Post.findAll()
    .then(posts => {
    console.log("All posts: ", JSON.stringify(posts, null, 4));
});

app.get('/', (req, res, next )=>{
    const date = new Date();
    const time = date.getTime();
    const x = 50 * Math.sin(time / 1000);
    res.json({x: x});
    next();
});

app.listen(port, ()=> console.log(`Game server listening on port: ${port}`));
