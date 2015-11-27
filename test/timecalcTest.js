const computeDuration = require('../lib/timecalc');
const assert = require('power-assert');

describe('computeDuration', () => {
  it('time to h:m:s', () => {
    assert(computeDuration(3700) === '01:01:40');
  });
});