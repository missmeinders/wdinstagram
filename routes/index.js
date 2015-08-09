var express = require('express');
var router = express.Router();
var entriesController = require('../controllers/entries');

/* GET '/' - render entries index view */
router.get('/', entriesController.renderEntriesIndex);
router.get('/entries', entriesController.renderEntriesIndex);
router.get('/entries/:id', entriesController.renderEntriesShow);

module.exports = router;
