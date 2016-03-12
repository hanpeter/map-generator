'use strict';

var controller = function ($scope, PlaceFactory) {
    _.extend($scope, {
        places: []
    });

    PlaceFactory.getPlaces()
        .then(function (places) {
            $scope.places = places;
        });
};

controller.$inject = ['$scope', 'PlaceFactory'];

module.exports = controller;
