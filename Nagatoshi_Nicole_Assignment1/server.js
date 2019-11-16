var express = require('express');
const querystring = require('querystring'); // requiring a query string - string of whatever is written in textbox
const product_data = require('./public/product_data.js'); //using data from product_data.js

var app = express();

app.get('/invoice.html', function(req, res, next) {
    if(typeof req.query['purchase_submit'] != 'undefined') {
        console.log(Date.now() + ': Purchase made from ip ' + req.ip + ' data: ' + JSON.stringify(req.query));
    }
    next();
});

app.use(express.static('./public'));

var listener = app.listen(8080, () => { console.log('server started listening on port ' + listener.address().port) });