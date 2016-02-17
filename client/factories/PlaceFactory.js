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
        updatePlace: function (place) {
            return $http({
                url: '/places',
                method: 'POST',
                data: place
            });
        }
    }
}

factory.$inject = ['$http'];

module.exports = factory;
