const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const { json } = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const { SERVER_PORT, MONGO_DB_PORT, MONGO_DB_USERNAME, MONGO_DB_PASSWORD, MONGO_DB_DATABASE } = process.env;

app.use(cors());
app.use(json());
app.use(morgan('combined'));

app.use(routes);

const mongoDBInstance = `mongodb://mongo:${MONGO_DB_PORT}/${MONGO_DB_DATABASE}`;

mongoose.connect(
	mongoDBInstance, 
	{
		user: MONGO_DB_USERNAME,
		pass: MONGO_DB_PASSWORD,
		useNewUrlParser: true
	}
).then((res) => {
	console.log(`Connected to ${mongoDBInstance}`, res); // eslint-disable-line
}).catch((err) => {
	if (err) {
		console.error('Something went wrong at the moment to connect to the database', // eslint-disable-line
			JSON.stringify({
				user: MONGO_DB_USERNAME,
				pass: '???',
				database: MONGO_DB_DATABASE,
				connectionString: mongoDBInstance
			}), err);
	}
});

app.listen(SERVER_PORT, () => {
	console.log(`Running server at http://localhost:${SERVER_PORT}`); // eslint-disable-line
});
