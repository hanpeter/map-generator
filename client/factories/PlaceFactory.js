'use strict';

var factory = function ($http) {
    return {
        getPlaces: function () {
            return $http({
                url: '/places',
                method: 'GET'
            })
            .then(function (res) {
                return res.data;
            });
        },
        getPlace: function (id) {
            return $http({
                url: '/places/' + id,
                method: 'GET',
            })
            .then(function (res) {
                return res.data;
            });
        },
        createPlace: function (place) {
            return $http({
                url: '/places',
                method: 'POST',
                data: place
            });
        },
        updatePlace: function (place) {
            return $http({
                url: '/places/' + place.id,
                method: 'PUT',
                data: place
            });
        }
    }
}

factory.$inject = ['$http'];

module.exports = factory;
