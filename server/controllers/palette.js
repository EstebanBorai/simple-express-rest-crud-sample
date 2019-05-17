const Palette = require('../models/Palette');


function getPalettes (req, res) {
	Palette.find({}, (err, docs) => {
		if (err) {
			res.status(500).send(err);
		}

		res.status(200).send(docs);
	});
}

function postPalettes(req, res) {
	const { body } = req;
	Palette.create(body, (err, doc) => {
		if (err) {
			res.status(500).send(err);
		}
		res.status(200).send(doc);				
	});
}

module.exports = {
	getPalettes,
	postPalettes
};
