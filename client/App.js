(function () {
    'use strict';

    window.App = angular.module('App', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/:mapID/list', {
                    templateUrl: 'list.html',
                    controller: 'ListController'
                })
                .when('/:mapID/map', {
                    templateUrl: 'map.html',
                    controller: 'MapController'
                })
                .when('/:mapID', {
                    templateUrl: 'list.html',
                    controller: 'ListController'
                })
                .otherwise({
                    templateUrl: 'new.html',
                    controller: 'NewController'
                });
        }]);
})();