const Sequelize = require('sequelize')
//Conexão com o BANCO DE DADOS
const sequelize = new Sequelize('u819286036_dbDim', 'u819286036_dbDim', 'Fl21394549',{
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
