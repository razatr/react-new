var path = require('path')
var express = require('express')
var api = require('./api')
var bodyParser = require('body-parser')
var port = 3001

var app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();
});

app.use(bodyParser.json())
app.use('/api', api)

app.listen(port, '192.168.1.198', function (err) {
    if (err) {
        console.log(err)
        return
    }

    console.log('Listening at http://192.168.1.198:' + port)
})