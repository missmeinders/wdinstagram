var express = require('express');
var router = express.Router();
var entriesController = require('../controllers/entries');

/* GET '/' - render entries index view */
router.get('/', entriesController.renderEntriesIndex);
router.get('/entries', entriesController.renderEntriesIndex);
router.get('/entries/new', entriesController.renderEntriesNew);
router.get('/entries/:id', entriesController.renderEntriesShow);
router.post('/entries', entriesController.renderEntriesCreate);
router.get('/entries/:id/like', entriesController.renderEntriesLike);

module.exports = router;
