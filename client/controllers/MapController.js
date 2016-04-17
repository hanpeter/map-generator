(function () {
    'use strict';

    var controller = function ($scope, PlaceFactory) {
        var geocoder = new google.maps.Geocoder();

        _.extend($scope, {
            map: new google.maps.Map(document.getElementById('map'), {
                center: {lat: 34.0522, lng: -118.2437},
                zoom: 13
            }),
            places: [],
        });

        PlaceFactory.getPlaces()
            .then(function (places) {
                _.map(places, function (place) {
                    geocoder.geocode({
                        address: place.address
                    }, function (res, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            var infoWindow = new google.maps.InfoWindow({
                                content: place.name
                            });
                            var marker = new google.maps.Marker({
                                map: $scope.map,
                                position: res[0].geometry.location
                            });
                            google.maps.event.addListener(marker, 'click', function() {
                                infoWindow.open($scope.map, marker);
                            });
                        }
                    })
                });
            });
    };

    controller.$inject = ['$scope', 'PlaceFactory'];

    module.exports = controller;
})();
