const {Sequelize} = require('sequelize')

module.exports = ( {db, user, password} ) => {
    return new Sequelize(db, user, password, {
        dialect: 'mariadb',
        host: 'mysqldb',
        sync: true
    })
}