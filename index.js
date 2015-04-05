var express = require('express');

var credentials = {
    client_id: 'QTranslator',
    client_secret: 'K0EM7nT7dHFGWZ4lIijNC1IFMtIxQ/HA33PytsTEdYU='
};

var translator = require('bing-translate').init(credentials);
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


translator.translate('This hotel is located close to the centre of Paris.', 'en', 'fi', function(err, res){
    console.log(res.response);
});



var server = app.listen(app.get('port'), function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('server started, running at', app.get('port'));

});

// REST-API
app.get('/translate', function (req, res) {
    translator.translate(req.query.phrase, 'en', 'fi', function (err, data) {
        res.send(data.translated_text);
    });
});
