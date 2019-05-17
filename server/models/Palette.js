const mongoose = require('mongoose');

const Palette = mongoose.model('Palette', new mongoose.Schema({ 
	name: {
		type: String,
		required: true
	},
	colors: {
		type: Array,
		required: true
	},
	dateCreated: {
		type: String,
		required: true
	}
}));

module.exports = Palette;
