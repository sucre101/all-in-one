const dbConnection = {
    db: process.env.DB_NAME || 'test',
    user: process.env.DB_USER || 'test',
    password: process.env.DB_PASSWORD || 'test'
}

const tokens = {
    access: {
        salt: process.env.NODE_AUTH_SALT,
        type: 'access',
        expired: '2min',
    },
    refresh: {
        salt: process.env.NODE_AUTH_SALT,
        type: 'refresh',
        expired: '3min',
    }
}

module.exports = {dbConnection, tokens}