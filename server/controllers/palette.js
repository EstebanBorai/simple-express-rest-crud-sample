const Palette = require('../models/Palette');


function getPalettes (req, res) {
	Palette.find({}, (err, docs) => {
		if (err) {
			return res.status(500).send(err);
		}

		return res.status(200).send(docs);
	});
}

function createPalette(req, res) {
	const { body } = req;
	Palette.create(body, (err, doc) => {
		if (err) {
			return res.status(500).send(err);
		}

		return res.status(200).send(doc);				
	});
}

function updatePalette(req, res) {
	const { body, params: { id } } = req;

	Palette.updateOne({ _id: id }, body, (err, doc) => {
		if (err) {
			return res.status(500).send(err);
		}

		return res.status(200).send(doc);
	});
}

function deletePalette(req, res) {
	const { params: { id } } = req;

	Palette.deleteOne({ _id: id }, (err) => {
		if (err) {
			return res.status(500).send(err);
		}
    
		return res.status(200).send(id);
	});
}

module.exports = {
	getPalettes,
	createPalette,
	updatePalette,
	deletePalette
};
