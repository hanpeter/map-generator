'use strict';

var controller = function ($scope, PlaceFactory) {
    _.extend($scope, {
        places: [],
        tags: function () {
            return _.uniq(_.flatten(_.map($scope.places, function(place) { return place.tags; })));
        },
        editPlace: null,
        showEditModal: function (place) {
            $scope.editPlace = _.clone(place);
            $('#edit-modal').modal('show');
        },
        saveEdit: function () {
            PlaceFactory.updatePlace($scope.editPlace)
                .then(function () {
                    _.extend(place, $scope.editPlace);
                    $('#edit-modal').modal('hide');
                });
            var place = _.find($scope.places, { id: $scope.editPlace.id });
        }
    });

    PlaceFactory.getPlaces()
        .then(function (places) {
            $scope.places = places;
        });
};

controller.$inject = ['$scope', 'PlaceFactory'];

module.exports = controller;
