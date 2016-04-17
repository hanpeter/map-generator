(function () {
    'use strict';

    var controller = function ($scope) {
        _.extend($scope, {
            map: new google.maps.Map(document.getElementById('map'), {
                center: {lat: 37.7749, lng: -122.4194},
                zoom: 13
            })
        });
    };

    controller.$inject = ['$scope'];

    module.exports = controller;
})();
