const { Router } = require('express');
const palette = require('./palette');

const router = Router();
router.use('/api/palette', palette);

module.exports = router;
