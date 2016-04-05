'use strict';

var provider = function ($routeProvider) {
    $routeProvider
        .when('/list', {
            templateUrl: 'templates/list.html',
            controller: 'ListController'
        })
        .when('/list/:tag', {
            templateUrl: 'templates/list.html',
            controller: 'ListController'
        })
        .when('/map', {
            templateUrl: 'templates/map.html',
            controller: 'MapController'
        })
        .otherwise({
            redirectTo: '/list'
        });
};

provider.$inject = ['$routeProvider'];

module.exports = provider;
