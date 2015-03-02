
//var translator = require('./bing/index');

//var express = require('express');
//var translator = require('bingtranslator');

console.log('Version: ' + process.version);
/*
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var credentials = {
    clientId: 'QTranslator',
    clientSecret: 'K0EM7nT7dHFGWZ4lIijNC1IFMtIxQ/HA33PytsTEdYU='
};

var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('server started, running at', app.get('port'));

});

/* REST-API
app.get('/translate', function (req, res) {
    translator.translate(credentials, req.query.phrase, 'en', 'fi', function (err, data) {
        res.send(data);
    });
});
*/