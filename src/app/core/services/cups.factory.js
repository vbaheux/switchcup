'use strict';

export default function (app) {
    app
        .factory('CupFactory', ['$resource',
            function($resource) {
                return $resource('assets/json/:cupId.json', {}, {
                    query: {
                        method: 'GET',
                        params: {cupId: 'cups'},
                        isArray: true
                    }
                });
            }
        ]);
}