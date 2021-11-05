const { Router } = require('express');
const { getCharacters } = require('../controllers/characters');

const router = Router();

router.get('/characters', getCharacters)

module.exports = router