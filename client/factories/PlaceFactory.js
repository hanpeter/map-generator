'use strict';

var factory = function ($http) {
    return {
        getPlaces: function () {
            return $http({
                url: '/places',
                method: 'GET'
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
