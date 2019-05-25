const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const { json } = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');
const getMongoInstance = require('./utils/getMongoInstance');
const { error, info, warn } = console;

dotenv.config();

const app = express();
const {
	SERVER_PORT,
	USE_DATABASE,
} = process.env;

app.use(cors());
app.use(json());
app.use(morgan('combined'));

app.use(routes);

const mongoDBInstance = getMongoInstance();

const connectWithRetry = function() {
	return mongoose.connect(mongoDBInstance[0], mongoDBInstance[1], (err) => {

		if (err) {
			error(`Failed to connect to ${mongoDBInstance[0]} - retrying in 5 sec\n\n`, err);
			setTimeout(connectWithRetry, 5000);
		} else {
			info(`Connected to ${mongoDBInstance[0]}\n`);
		}
	});
};

if (USE_DATABASE === 'true') {
	connectWithRetry();
} else {
	warn('⚠ WARNING: USE_DATABASE ENV VARIABLE IS FALSE.');
}

app.listen(SERVER_PORT, () => {
  info(`Running server at http://localhost:${SERVER_PORT}`); // eslint-disable-line
});
