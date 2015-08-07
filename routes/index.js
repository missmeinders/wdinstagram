var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index');

/* GET '/' - render index view */
router.get('/', indexController.renderIndexView);

module.exports = router;
