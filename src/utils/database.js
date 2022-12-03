const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: '1234',
    entregable_3:'entregable_3'
     
})

module.exports = db

