var geometryArea = require('geojson-area').geometry;

/**
 * Given any kind of GeoJSON feature, return the area of that feature,
 * in square meters.
 * @module turf/area
 * @param {GeoJSON} input
 * @return {number} area in square meters
 * @example
 * var polygons = turf.featurecollection([
 *   turf.polygon([[[0,0],[10,0],[10,10],[0,10],[0,0]]]),
 *   turf.polygon([[[10,0],[20,10],[20,20], [20,0]]])]);
 * var area = turf.area(polygons);
 * //=area
 */
module.exports = function(_) {
    if (_.type === 'FeatureCollection') {
        for (var i = 0, sum = 0; i < _.features.length; i++) {
            if (_.features[i].geometry) {
                sum += geometryArea(_.features[i].geometry);
            }
        }
        return sum;
    } else if (_.type === 'Feature') {
        return geometryArea(_.geometry);
    } else {
        return geometryArea(_);
    }
};
