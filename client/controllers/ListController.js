'use strict';

var controller = function ($scope) {
    _.extend($scope, {
        list: []
    });
};

controller.$inject = ['$scope'];

module.export = controller;
