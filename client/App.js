'use strict';

var App = angular.module('App', []);
App.controller('AppController', require('./controllers/AppController.js'));
App.controller('ListController', require('./controllers/ListController.js'));
App.factory('PlaceFactory', require('./factories/PlaceFactory.js'));

// window.App = angular.module('App', ['ngRoute'])
//     .config(['$routeProvider', function ($routeProvider) {
//         $routeProvider
//             .when('/:mapID/list', {
//                 templateUrl: 'list.html',
//                 controller: 'ListController'
//             })
//             .when('/:mapID/map', {
//                 templateUrl: 'map.html',
//                 controller: 'MapController'
//             })
//             .when('/:mapID', {
//                 templateUrl: 'list.html',
//                 controller: 'ListController'
//             })
//             .otherwise({
//                 templateUrl: 'new.html',
//                 controller: 'NewController'
//             });
//     }]);
