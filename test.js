var area = require('./'),
    test = require('tape');

test('geojson area', function(t) {
    var poly = {
        type: 'Polygon',
        coordinates: [
            [
            [0, 0],
            [10, 0],
            [10, 10],
            [0, 10],
            [0, 0],
            ]
        ]
    };
    t.equal(area(poly), 1232921098571.292);
    t.end();
});
