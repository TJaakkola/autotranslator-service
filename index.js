const express = require('express');

const credentials = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.MS_APP_KEY
};

const translator = require('bing-translate').init(credentials);
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const server = app.listen(app.get('port'), () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('autotranslator-service started, running at', app.get('port'), 'on host', host);
});

app.get('/translate', (req, res) => {
    translator.translate(req.query.phrase, req.query.from, req.query.to, function (err, data) {
        res.send(data.translated_text);
    });
});
