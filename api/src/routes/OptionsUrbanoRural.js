const { Router } = require('express');
const { optionsRuralUrbano } = require('../controllers/OptionsUrbanoRueal');
const router = Router();

router.get("/", optionsRuralUrbano);

module.exports = router;