const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '/Users/adolphusokoro/Documents/sqlite/test.db'
});

const Model = Sequelize.Model;
class Post extends Model {}
Post.init({
    post_title: {
        type: Sequelize.STRING
    },
    post: {
        type: Sequelize.TEXT
    }
}, {
    sequelize,
    modelName: 'post'
});

module.exports = Post;