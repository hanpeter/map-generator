'use strict';

var controller = function ($scope, PlaceFactory) {
    _.extend($scope, {

    });

    PlaceFactory.getPlaces()
        .then(function (places) {
            console.log(places);

            PlaceFactory.updatePlace(places[0]);
        });
};

controller.$inject = ['$scope', 'PlaceFactory'];

module.exports = controller;
