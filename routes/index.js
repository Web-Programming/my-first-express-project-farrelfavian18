var express = require('express');
const { routes } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Farrel Favian' });
});

router.get('/profil',function(req, res){
  res.render('profil',
  {nama: "Farrel Favian", "npm":2024240077}
  );
});

module.exports = router;
