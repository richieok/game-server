const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '/Users/adolphusokoro/Documents/sqlite/test.db'
});

const Model = Sequelize.Model;

class Position extends Model {};
Position.init({
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    x: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    y: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'position'
});

module.exports = Position;