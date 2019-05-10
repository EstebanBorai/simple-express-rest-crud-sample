const { Router } = require('express');
const { getPalettes } = require('../controllers/palette.js');
const { postPalletes } = require('../controllers/palette.js');

const router = Router();

router.get('/', (req, res) => {
	return getPalettes(req, res);
});

router.post('/',(req, res) =>{
	const{ body } = req;
	return postPalletes(req, res);
});

module.exports = router;
