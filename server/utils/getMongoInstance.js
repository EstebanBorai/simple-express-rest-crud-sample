/**
 * Returns an array with the MongoDB instance configuration for mongoose based on the
 * current Node Environment variable "MODE".
 * 
 * If the current MODE is "DEV" the mongoose cofiguration will target a local database else
 * the mongoose configuration will target the docker-compose's defined database.
 * 
 * The first element of the array represents the MongoDB URI while the second element of the array
 * the configuration object include user, pwd and the useNewUrlParser (always set to true)
 * 
 */
function getMongoInstance() {
	const {
		MODE,
		MONGO_DB_USERNAME,
		MONGO_DB_PASSWORD,
		MONGO_DB_PORT,
		MONGO_DB_DATABASE
	} = process.env;

	if (MODE === 'DEV') {
		return [
			`mongodb://localhost:${MONGO_DB_PORT}/${MONGO_DB_DATABASE}`, 
			{
				useNewUrlParser: true
			}
		];
	} else {
		return [
			`mongodb://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@mongo:${MONGO_DB_PORT}/${MONGO_DB_DATABASE}`,
			{ 
				user: MONGO_DB_USERNAME,
				pass: MONGO_DB_PASSWORD,
				useNewUrlParser: true 
			}
		];
	}
}

module.exports = getMongoInstance;
