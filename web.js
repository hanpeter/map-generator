(function () {
    'use strict';

    var express = require('express');
    var _ = require('lodash');

    var app = express();
    var PORT = process.env.PORT || 9001;

    app.listen(PORT, function () {
        console.log('Server started on port ' + PORT);
    });

    app.get('/', function (req, res) {
        res.status(200).send();
    });

    app.post('/', function (req, res) {
        res.status(200).send();
    });
})();