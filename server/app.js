const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const { json } = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const { 
  SERVER_PORT,
  MONGO_DB_PORT,
  MONGO_DB_USERNAME,
  MONGO_DB_PASSWORD,
  MONGO_DB_DATABASE 
} = process.env;

app.use(cors());
app.use(json());
app.use(morgan('combined'));

app.use(routes);

const mongoDBInstance = `mongodb://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@mongo:${MONGO_DB_PORT}/${MONGO_DB_DATABASE}`;

const connectWithRetry = function() {
  return mongoose.connect(mongoDBInstance, { 
    user: MONGO_DB_USERNAME,
    pass: MONGO_DB_PASSWORD,
    useNewUrlParser: true 
  }, (err) => {
    if (err) {
      console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
      setTimeout(connectWithRetry, 5000);
    }
  });
};

connectWithRetry();

app.listen(SERVER_PORT, () => {
	console.log(`Running server at http://localhost:${SERVER_PORT}`); // eslint-disable-line
});
