var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let productlist =[
    {
      Name: 'Jupiter OG',
      Amount: '17.8% CBD',
      Strain: 'Indica',
    },
    {
      Name: 'Sour Space Candy',
      Amount: '22.5% CBD',
      Strain: 'Hybrid',
    },
    {
      Name: 'Moon Rocks',
      Amount: '52% CBD',
      Strain: 'Hybrid',

    }
  ]
  res.render('index', {products: productlist});
});

module.exports = router;
