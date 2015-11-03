var express = require('express');

var credentials = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.MS_APP_KEY
};

var translator = require('bing-translate').init(credentials);
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('server started, running at', app.get('port'), 'on host', host);
});

app.get('/translate', function (req, res) {

    console.log('translated phrase: ', req.query.phrase);

    translator.translate(req.query.phrase, 'en', 'fi', function (err, data) {
        res.send(data.translated_text);
    });
});
