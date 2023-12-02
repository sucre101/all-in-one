const http = require('http')
const express = require('express')
const Router = require('express').Router
const cors = require('cors')

const AuthService = require('./authService.js')

const app = express()
app.server = http.createServer(app)

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const router = Router()

/**
 * Create user route
 * @url /
 * @method put
 * @field string email <required>
 * @field string password <required>
 * @field string name <required>
 * @return json
 */
router.put('/', async (req, res, next) => {
    try {
        const tokens = await new AuthService().createUser(req.body)

        res.status(201).json({success: true, tokens})

    } catch (e) {
        res.json({success: false, error: e.message})
    }
})

/**
 * Authorization route
 * @url /
 * @method post
 * @field string email <required>
 * @field string password <required>
 * @return json
 */
router.post('/', async (req, res) => {
    try {
        const tokens = await new AuthService().authUser(req.body)

        res.json({success: true, tokens})
    } catch (error) {
        res.json({success: false, error: error.message})
    }
})

/**
 * Refresh tokens route
 * @url /
 * @method patch
 * @field string refresh <required>
 * @return json
 */
router.patch('/', async (req, res) => {
    if (!req.body.refresh) res.status(401).json({success: false})

    try {
        const tokens = await new AuthService().updateTokens(req.body)

        res.json({success: true, tokens})
    } catch (e) {
        res.status(401).json({success: false, message: e.message})
    }
})

/**
 * Check valid token route
 * @url /check
 * @method get
 * @return json
 */
router.get('/check', async (req, res) => {

    if (!req.headers.authorization) res.json({success: false})

    const token = req.headers.authorization.split(' ')

    if (token[0] !== 'Bearer') res.json({success: false})

    try {
        await new AuthService().authCheck(token[1])

        res.json({success: true, need_refresh: false})
    } catch (e) {
        res.json({success: false, need_refresh: true, message: e.message})
    }
})

app.use(router)

app.server.listen(process.env.PORT || 80, () => {
    console.log(`Started on port ${app.server.address().port}`)
})

export default app
