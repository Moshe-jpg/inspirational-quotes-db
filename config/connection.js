const Sequelize = require('sequlize');

require('dotenv').config();

const sequlize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306

});

module.exports = sequlize;