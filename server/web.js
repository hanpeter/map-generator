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
})();
