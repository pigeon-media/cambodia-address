# Cambodia Address

Convert Latitude & Longitude to address

[![Publish to NPM Registry](https://github.com/pigeon-media/cambodia-address/actions/workflows/npm.yml/badge.svg)](https://github.com/pigeon-media/cambodia-address/actions/workflows/npm.yml)
![Npm Version](https://img.shields.io/npm/v/@pigeon-media/cambodia-address.svg)

## Installation

```
npm install @pigeon-media/cambodia-address
```

## Usage

```js
const { resolveCoordinates } = require('@pigeon-media/cambodia-address');
const location = { lat: 0.0, lng: 0.0 };
const result = resolve(location);
console.log(result);
```

## Execute

```bash
npx cambodia-address 100,100
```
