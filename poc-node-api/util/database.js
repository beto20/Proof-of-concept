const Sequelize = require('sequelize');

// host=localhost port=5432 user=postgres dbname=postgres password=postgres sslmode=disable

const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        dialect: 'postgres',
        define: {
            timestamps: false,
        }
    }
);

module.exports = sequelize;