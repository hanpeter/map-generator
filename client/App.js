'use strict';

var App = angular.module('App', ['ngRoute', 'ui.select']);
App.controller('AppController', require('./controllers/AppController.js'));
App.controller('ListController', require('./controllers/ListController.js'));
App.controller('MapController', require('./controllers/MapController.js'));
App.factory('PlaceFactory', require('./factories/PlaceFactory.js'));
App.config(require('./configs/RouteProvider.js'));
