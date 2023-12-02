const crypto = require('crypto')

function hashPassword(password) {
    const { NODE_AUTH_SALT } = process.env

    return crypto.pbkdf2Sync(password, NODE_AUTH_SALT,
        1000, 64, `sha512`).toString(`hex`)
}

function validate(password, hash) {
    return hashPassword(password) === hash
}

module.exports = {
    hashPassword,
    validate
}