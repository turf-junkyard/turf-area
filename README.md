turf-area
==========

[![Build Status](https://travis-ci.org/Turfjs/turf-area.svg)](https://travis-ci.org/Turfjs/turf-area)

Calculates the total geographical area in meters squared of any GeoJSON object.

### Install

```sh
npm install turf-area
```

### Parameters

|name|description|
|---|---|
|input|FeatureCollection, Polygon, or MultiPolygon|

### Usage

```js
area(input)
```

### Example

```js
var getArea = require('turf-area')
var polygon = require('turf-polygon')
var poly1 = polygon([[[0,0],[10,0],[10,10], [0,10]]])
var area = getArea(poly1)

console.log(area)
```
