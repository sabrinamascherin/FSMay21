let database = 'expense_app';
let username = 'root';
let password = '145!1002MaP$';
let host = 'localhost';

const Sequelize = require ('sequelize');
const config = new Sequelize("expense_app", "root", "145!1002MaP$", {dialect: 'mysql'});

module.exports = config;