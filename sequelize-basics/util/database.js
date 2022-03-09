const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

// Localhost connection
console.log(process.env.DB);
const sequelize = new Sequelize({
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: 5432,
	database: process.env.DB,
	dialect: 'postgres',
	logging: false //para visualizar los errores en la consola
});

// Connect to Heroku cloud
// const sequelize = new Sequelize({
// 	host: 'heroku_host',
// 	username: 'heroku_user',
// 	password: 'heroku_password',
// 	port: 5432,
// 	database: 'heroku_database',
// 	dialect: 'postgres',
// 	dialectOptions: {
// 		ssl: {
// 			require: true,
// 			rejectUnauthorized: false,
// 		},
// 	},
// });

module.exports = { sequelize };
