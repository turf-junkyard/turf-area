var geometryArea = require('geojson-area').geometry;

module.exports = function(_) {
    if (_.type === 'FeatureCollection') {
        for (var i = 0, sum = 0; i < _.features.length; i++) {
            if (_.features[i].geometry) {
                var added = geometryArea(_.features[i].geometry);
                sum += added || 0;
            }
        }
        return sum;
    } else {
        return geometryArea(_);
    }
};
