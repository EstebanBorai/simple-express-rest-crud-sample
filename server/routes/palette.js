const { Router } = require('express');
const { getPalettes, createPalette, updatePalette, deletePalette } = require('../controllers/palette.js');

const router = Router();

router.get('/', (req, res) => {
	return getPalettes(req, res);
});

router.get('/:id', (req, res) => {
	// Testing Debugger Configuration
	return res.status(200).send(req.params['id']);
});

router.post('/', (req, res) => {
	return createPalette(req, res);
});

router.put('/:id', (req, res) => {
	return updatePalette(req, res);
});

router.delete('/:id', (req, res) => {
	return deletePalette(req, res);
});

module.exports = router;
