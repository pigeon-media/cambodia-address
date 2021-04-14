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
const { resolveCoordinate } = require('@pigeon-media/cambodia-address');
const location = { lat: 0.0, lng: 0.0 };
const result = resolveCoordinate(location);
console.log(result);
```


## Sample

```js
[
  {
    adm1_name: 'Phnom Penh',
    adm1_altnm: 'ភ្នំពេញ',
    iso3: 'KHM',
    disp_area: 'NO',
    adm1_id: 900426,
    adm0_id: 44,
    source: 'MLMUPC (CO)',
    validity: 0,
    last_modif: null,
    MAPCLR: 'KHM',
    source_adm: '12',
    SHAPE_Leng: 1.52711382626,
    SHAPE_Area: 0.0567630114975
  },
  {
    adm2_name: 'Chamkar Mon',
    adm2_altnm: 'ខណ្ឌចំការមន',
    iso3: 'KHM',
    disp_area: 'NO',
    adm2_id: 1006312,
    adm1_id: 900426,
    adm0_id: 44,
    source: 'MLMUPC (CO)',
    validity: 0,
    last_modif: '2017-11-28T23:00:00Z',
    MAPCLR: 'KHM',
    source_adm: '1201',
    SHAPE_Leng: 0.141641814897,
    SHAPE_Area: 0.000925064138692
  },
  {
    adm3_name: 'Boeng Keng Kang Ti Muoy',
    adm3_altnm: '',
    iso3: 'KHM',
    disp_area: 'NO',
    adm3_id: 31003,
    adm2_id: 1006312,
    adm1_id: 900426,
    adm0_id: 44,
    source: 'MLMUPC (CO)',
    validity: 0,
    last_modif: null,
    MAPCLR: 'KHM',
    source_adm: '120102',
    SHAPE_Leng: 0.0381616682883,
    SHAPE_Area: 0.0000827278092327
  }
]
```

## Execute on CLI

- `level` can be -1, 0, 1, 2

```bash
npx cambodia-address 100,100
npx cambodia-address 100,100 <level>
```

