module.exports = bounds2;

var min = Math.min;
var max = Math.max;

function bounds2(array, out) {
  out = out || [0, 0, 0, 0];
  var lx = Infinity;
  var ly = Infinity;
  var ux = -Infinity;
  var uy = -Infinity;

  var l = array.length;

  for (var i=0; i<l; i++) {
    var p = array[i];
    var x = p[0];
    var y = p[1];
    lx = min(lx, x);
    ux = max(ux, x);
    ly = min(ly, y);
    uy = max(uy, y);
  }

  out[0] = lx;
  out[1] = ly;
  out[2] = ux;
  out[3] = uy;
  return out;
}
