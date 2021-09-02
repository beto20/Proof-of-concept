const {Client} = require('pg')

const client = new Client ({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1234",
    database: "prueba0806"
})

module.exports = client