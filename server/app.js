const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const { json } = require('body-parser');
const routes = require('./routes');

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(morgan('combined'));

app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
	console.log(`Running server at http://localhost:${process.env.SERVER_PORT}`); // eslint-disable-line
});
