(function () {
    'use strict';

    var controller = function ($scope) {
        _.extend($scope, {
            appName: 'Vacation Planner'
        });
    };

    controller.$inject = ['$scope'];

    module.exports = controller;
})();
