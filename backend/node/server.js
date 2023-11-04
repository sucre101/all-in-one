import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './route/users.js';
import tasksRoutes from './route/tasks.js'
// import
import {Sequelize} from "sequelize";

const app = express();
const port = 80;

app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/tasks', tasksRoutes);
app.get('/', (req, res) => {
    res.send('Home Routesss');
});

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('test', 'test', 'test', {
//     host: 'mysqldb',
//     dialect: 'mariadb',
//     sync: true
// });
//
// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));