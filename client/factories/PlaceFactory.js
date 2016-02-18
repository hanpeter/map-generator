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
        updatePlace: function (places) {
            return $http({
                url: '/places',
                method: 'POST',
                data: places
            });
        }
    }
}

factory.$inject = ['$http'];

module.exports = factory;
