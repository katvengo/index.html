var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();

var db = require('./models');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function () {
        console.log(`'Server listening at http://localhost' ${PORT}`)
        })
});