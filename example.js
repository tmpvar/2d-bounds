var bounds2 = require('./2d-bounds');

var polyline = [
  [-100, 100],
  [0, 0],
  [10, 200]
];

var b = bounds2(polyline);

console.log(b);
