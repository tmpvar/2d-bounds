var test = require('tape');

test('triangle', function(t) {

  var b = bounds2([
    [-100, 100],
    [0, 0],
    [10, 200]
  ]);

  t.deepEqual(out, [ -100, 0, 10, 200 ]);

  t.end();
});

test('reuse array', function(t) {
  var out = [100, 20, 1, 6];

  var b = bounds2([
    [-100, 100],
    [0, 0],
    [10, 200]
  ]);

  t.deepEqual(out, [ -100, 0, 10, 200 ]);
  t.equal(b, out);
  t.end();
});
