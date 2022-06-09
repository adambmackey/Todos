const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')
dotenv.config()
console.log(process.env.DATABASE_URL)
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {rejectUnauthorized: false, require: true}
    } })

module.exports = sequelize