/**
 * Created by christiancueni on 13/11/16.
 */
var moment = require('moment');
var express = require('express');
var app = express();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/bm.txt', function (req, res) {
    // "0X19:21X4006X1000X 44.0X0X34:02X2X5X3X0XAPHTXpHX000
    var now = moment();
    var temp = Math.floor(Math.random() * 50) + 10;
    var targetTemp = 10 * (temp + 10);
    var response = "1.1.24 Jan 12 2017;0004A30B003F4546;0X" + now.format('HH:mm') + "X4006X"+ targetTemp +"X " + temp + ".0X0X34:02X2X5X3X0XAPHTXpHX000";
    // var response = "0X" + now.format('HH:MM') + "X4006X900X " + temp + ".0X0X34:02X2X5X3X0XAPHTXpHX000";
    res.send(response);
})

app.listen(4200, function () {
    console.log('Fake BM listening on port 4200!')
})