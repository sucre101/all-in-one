import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import initializeDb from './db';
import jsonMiddleware from './middleware/onlyJsonRequest';
import router from './api';
import config from './config.json';
import {Sequelize} from "sequelize";

const app = express();
app.server = http.createServer(app);

// logger

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// connect to db
initializeDb( db => {

	// internal middleware
	// app.use(middleware({ config, db }));

	// Option 3: Passing parameters separately (other dialects)
	// const sequelize = new Sequelize('test', 'test', 'test', {
	// 	host: 'mysqldb',
	// 	dialect: 'mariadb',
	// 	sync: true
	// });
	//
	// const connect = async () => await sequelize.authenticate();
	//
	// connect().then(r => console.log('Connection has been established successfully.'))
	// 	.catch((error) => console.error('Unable to connect to the database:', error));

	app.use(jsonMiddleware);

	// api router
	app.use('/api', router({ config, db }));

	app.server.listen(process.env.PORT || config.port, () => {
		console.log(`Started on port ${app.server.address().port}`);
	});
});

export default app;
