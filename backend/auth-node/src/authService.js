const User = require('./userModel.js')
const { hashPassword, validate } = require('./helper.js')
const jwt = require('jsonwebtoken')
const { tokens } = require('./config')
class AuthService {
    async findUser(id) {
        return await User.findByPk(id)
    }

    createTokenPair(payload) {
        return {
            access: jwt.sign(payload, tokens.access.salt, {
                expiresIn: tokens.access.expired
            }),
            refresh: jwt.sign(payload, tokens.refresh.salt, {
                expiresIn: tokens.refresh.expired
            })
        }
    }

    async createUser({ email, password, name }) {

        const pwdHash = hashPassword(password)

        const user = await User.create({
            name: name,
            email: email,
            password: pwdHash
        })

        const { access, refresh } = this.createTokenPair({ email: user.email, name: user.name })

        user['access_token'] = access
        user['refresh_token'] = refresh
        await user.save()

        return { access, refresh }
    }

    async updateUserTokens(user) {
        const { access, refresh } = this.createTokenPair({ email: user.email, name: user.name })

        user['access_token'] = access
        user['refresh_token'] = refresh
        await user.save()

        return { access, refresh }
    }

    async updateTokens({refresh}) {
        if (!refresh) throw new Error('required refresh token')

        console.log(refresh, 2222)

        jwt.verify(refresh, tokens.refresh.salt, (error) => {
            if (error instanceof jwt.TokenExpiredError) {
                throw new Error('Refresh token is expired')
            }
        })

        const user = await User.findOne({where: {refresh_token: refresh}})

        if (!user) throw new Error('user with refresh token not found')

        const token = await this.updateUserTokens(user)

        return token
    }

    async authUser({email, password}) {
        const user = await User.findOne({ where: { email: email } })

        if (!user) throw new Error('User not found')

        if (hashPassword(password) !== user.password) throw new Error('Password incorrect')

        return await this.updateUserTokens(user)
    }

    async authCheck(token) {
        if (!token) throw new Error('token is required')

        jwt.verify(token, tokens.access.salt)

        const user = await User.findOne({where: {access_token: token}})

        if (!user) throw new Error('token not found')
    }
}

module.exports = AuthService