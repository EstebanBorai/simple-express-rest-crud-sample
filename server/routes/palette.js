const { Router } = require('express');
const { getPalettes, postPalettes } = require('../controllers/palette.js');

const router = Router();

router.get('/', (req, res) => {
	return getPalettes(req, res);
});

router.post('/', (req, res) => {
	return postPalettes(req, res);
});

module.exports = router;
