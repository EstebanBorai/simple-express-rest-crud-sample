const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const { json } = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const { SERVER_PORT, MONGO_DB_PORT, MONGO_DB_USERNAME, MONGO_DB_PASSWORD } = process.env;

app.use(cors());
app.use(json());
app.use(morgan('combined'));

app.use(routes);

mongoose.connect(
	`mongodb://db:${MONGO_DB_PORT}/simple-rest-crud-sample`, 
	{
		user: MONGO_DB_USERNAME,
		pass: MONGO_DB_PASSWORD,
		useNewUrlParser: true
	}
);

app.listen(SERVER_PORT, () => {
	console.log(`Running server at http://localhost:${SERVER_PORT}`); // eslint-disable-line
});
