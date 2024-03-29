const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const User = require('./model/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.get('/', (req, res, next) => {
    res.send('Hello, world');
});

app.use('/users', require('./routes/user_routes'));

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

sequelize.sync()
.then(result => {
    console.log("Database connected");
    app.listen(3000);
}).catch(err => console.log(err));