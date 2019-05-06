const { Router } = require('express');
const { getPalettes } = require('../controllers/palette.js');

const router = Router();

router.get('/', (req, res) => {
	return getPalettes(req, res);
});

module.exports = router;
