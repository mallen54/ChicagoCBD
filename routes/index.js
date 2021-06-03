var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let query = "SELECT product_id, productname, prodimage, categoryname, suppliername, prodprice, status FROM product, category, supplier WHERE product.category_id = category.category_id AND product.supplier_id = supplier.supplier_id AND homepage = true";

 // execute query
 db.query(query, (err, result) => {
  if (err) {
    console.log(err);
    res.render('error');
  }


  let query = "SELECT promotion_id, promotitle, promoimage FROM promotion WHERE startdate <= CURRENT_DATE() and enddate >=CURRENT_DATE() ";
  // execute query
  db.query(query, (err, result2) => {
    if (err) {
      console.log(err);
      res.render('error');
    }
  res.render('index', {allrecs: result, promos: result2 });
  });
});

});

module.exports = router;
