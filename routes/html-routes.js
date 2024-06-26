var path = require('path');



module.exports = function (app) {

    app.get('/', function (req, res) {

        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/portfolio', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.get('/css', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/css/main.css'));
    });

    app.get('/js', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/js/index.js'));
    });
};