var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/name', function(req, res, next)
{
  res.render('do', { name: req.body.fname });
});

module.exports = router;
