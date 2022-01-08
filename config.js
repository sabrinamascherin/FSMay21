const environment = process.env.NODE_ENV || 'development';

let database = 'robogarden_app';
let username = 'root';
let password = '145!1002MaP$';
let host = 'localhost';

if(environment === 'production'){
    database = 'hnte0dhp9ewsypht';
    username = 'af8dz0ev035kditj';
    password = 'dv35vwjjj4zve6m5';
    host = 'ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com';
}

const Sequelize = require('sequelize');
const config = new Sequelize(database, username, password, {
    host: 'ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
});

module.exports = config;