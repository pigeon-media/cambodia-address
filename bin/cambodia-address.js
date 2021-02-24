#!/usr/bin/env node
const arg = process.argv[2];
const level = process.argv[3];

const { resolveCoordinate } = require('../');

const coordinate = parseArg(arg);

if (!coordinate) {
    console.error('invalid coordinate(lat, lng)');
    return;
}

const result = resolveCoordinate(coordinate, level || -1);
console.log(result);

function parseArg(value) {
    if (!value) {
        return null;
    }

    if (typeof value !== 'string') {
        return null;
    }

    const coords = value.split(',').map(it => it.trim());
    if (coords.length !== 2) {
        return null;
    }

    const [lat, lng] = coords;
    if (!lat || !lng) {
        return null;
    }

    const latitude = +lat;
    const longitude = +lng;

    if (isNaN(latitude) || isNaN(longitude)) {
        return null;
    }

    return { 
        lat: latitude,
        lng: longitude,
    };
}