var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Virginia Cardozo Uz' }); //index.hbs
});

module.exports = router;
