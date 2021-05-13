var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
res.render('report/reportmenu');
});


router.get('/custlist', function(req, res, next){
let query = "SELECT customer_id, firstname, lastname FROM customer";

 // execute query
 db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.render('error');
        }
    res.render( 'report/custlist' , {allrecs: result });
    });




    //res.render('report/custlist');
});

router.get('/prodlist', function(req, res, next){
    let query = "SELECT product_id, productname, category_id, supplier_id, prodprice, status FROM product";

 // execute query
    db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.render('error');
            }
        res.render( 'report/prodlist' , {allrecs: result });
    });



    //res.render('report/prodlist');
});

router.get('/saleslist', function(req, res, next){
    let query = "SELECT order_id, customer_id, saledate, paymentstatus FROM saleorder";

    // execute query
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.render('error');
        }
        res.render( 'report/saleslist' , {allrecs: result });
    });



    //res.render('report/saleslist');
});
module.exports = router;
