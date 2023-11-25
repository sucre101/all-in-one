import http from 'http'
import express, { Router } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import config from '../config.json'

import {Sequelize} from "sequelize"
import AuthService from "./authService";

const app = express();
app.server = http.createServer(app)

// logger

app.use(cors({
    exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
    limit : config.bodyLimit
}));

const router = Router()

router.get('/', (req, res) => {

    res.json({ some: 'shit' })
});

router.post('/', (req, res, next) => {
    const auth = new AuthService(req.body)

    res.json(auth.getFields())
})

app.use(router)

app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`)
});

export default app
