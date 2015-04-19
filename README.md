# 2d-bounds

barebones array based 2d bounds compute

## install

`npm install 2d-bounds`

## use

__bounds2__(`points` [, `out`])

* `points` - array of 2+ item arrays (i.e. `[[0, 0], [1, 1]]`) representing an array of 2d vectors
* `out` - avoid creating garbage by reusing an array

returns `out` which is a 4 component array: `[lowX, lowY, hiX, hiY]`

### example

```javascript
var bounds2 = require('2d-bounds');

var polyline = [
  [-100, 100],
  [0, 0],
  [10, 200]
];

var b = bounds2(polyline);

console.log(b);
// outputs: [ -100, 0, 10, 200 ]
```

## license

[MIT](LICENSE.txt)
