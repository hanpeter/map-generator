(function () {
    'use strict';

    var express = require('express');
    var bodyParser = require('body-parser');
    var path = require('path');

    var app = express();
    var PORT = process.env.PORT || 9001;

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, '../client/')));
    app.use('/lib', express.static(path.join(__dirname, '../node_modules/')));

    app.listen(PORT, function () {
        console.log('Server started on port ' + PORT);
    });

    var db = require('./db.js')();
    console.log(db);
    app.param('place_id', function (req, res, next, value) {
        if (req.body && req.body.id !== value) {
            res.status(401).send('IDs do not match');
        }
    });
    app.get('/places', function (req, res) {
        res.json(db.getAll());
    });
    app.get('/places/:place_id', function (req, res) {
        console.log(arguments[2], arguments[3], arguments[4]);
        res.json();
    });
    app.post('/places', function (req, res) {
        console.log(req.body);
    });
    app.post('/places/:place_id', function (req, res) {
        console.log(req.body);
        db.update(req.body);
    });
})();
