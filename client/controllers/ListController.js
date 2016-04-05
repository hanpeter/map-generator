'use strict';

var controller = function ($scope, $routeParams, PlaceFactory) {
    var searchTag = $routeParams.tag;

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
            if (searchTag) {
                $scope.places = _.filter(places, function (place) {
                    return place.tags.indexOf(searchTag) >= 0;
                });
            }
            else {
                $scope.places = places;
            }
        });
};

controller.$inject = ['$scope', '$routeParams', 'PlaceFactory'];

module.exports = controller;
