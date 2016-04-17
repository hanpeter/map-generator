(function () {
    'use strict';

    var _ = require('lodash');

    function DB() {
        var data = [{
            id: 1,
            name: 'Blu Jam Cafe',
            address: '7371 Melrose Ave, Los Angeles, CA',
            starttime: '08:00:00',
            endtime: '16:00:00',
            yelp: 'http://www.yelp.com/biz/blu-jam-caf%C3%A9-los-angeles-2',
            tags: ['brunch']
        }, {
            id: 2,
            name: 'Cadet',
            address: '2518 Wilshire Blvd, Santa Monica, CA',
            starttime: '10:30:00',
            endtime: '15:00:00',
            yelp: 'http://www.yelp.com/biz/cadet-santa-monica',
            tags: ['brunch']
        }];
        var me = {
            get: function (id) {
                return _.clone(data[id - 1], true);
            },
            getAll: function () {
                return _.clone(data, true);
            },
            create: function (place) {
                data.push(place);
                place.id = data.length;

                return _.clone(place, true);
            },
            update: function (place) {
                var old = data[place.id - 1];

                if (!old) {
                    throw Error('There is no place with the given ID. Try creating the place instead.');
                }
                _.assign(old, place);

                return _.clone(old, true);
            }
        };

        return me;
    }

    module.exports = DB;
})();
