const GeoJsonGeometriesLookup = require("geojson-geometries-lookup");
const fs = require('fs');
const path = require('path');
const lookups = preloadDataLookups();

/**
 * Resolve Coordinate
 * @param {number} level
 * @param {{lat: number, lng: number}} coordinates
 * @returns {number[]} 
 */
function resolveCoordinate(coordinate, level = -1) {
    if (!coordinate || typeof coordinate !== 'object') {
        throw new Error('invalid coordinate');
    }

    if (typeof coordinate.lat !== 'number' || typeof coordinate.lng !== 'number') {
        throw new Error('invalid lat/lng');
    }

    if (level > 2) {
        throw new Error('invalid level, it must be -1, 0, 1 and 2');
    }
    const components = findAddressComponents(coordinate, level);
    return components.flatMap(value => value);
}

function findAddressComponents(coordinate, level) {
    if (level < 0) {
        return lookups.map(lookup => containerOf(lookup, coordinate));
    }    
    return containerOf(lookups[level], coordinate);
}

function containerOf(lookup, coordinate) {
    const container = lookup.getContainers({
        type: 'Point',
        coordinates: [coordinate.lng, coordinate.lat],
    });

    if (!container) {
        return null
    }
  
    if (!container.features) {
        return null;
    }
  
    if (!Array.isArray(container.features)) {
        return null;
    }
  
    return container.features.map(it => {
        const obj = {};
        Object.assign(obj, it);
        return obj.properties;
    });
}

function preloadDataLookups() {
    return ['level1.json', 'level2.json', 'level3.json'].map(filename => {
        const json = fs.readFileSync(path.join(__dirname, filename));
        const value = JSON.parse(json);
        return new GeoJsonGeometriesLookup(value);
    });
}

module.exports = {
    resolveCoordinate
}
