const assert = require('power-assert');
const wakatime = require('../lib/wakatime');

describe('wakatime', () => {
  it('get status 2015/11/21 is 0:17', (done) => {
    wakatime.getGrandTotalTime('2015/11/21', (err, time) => {
      assert(time === '0:17');
      done();
    });
  });
  it('get status 2015/11/20 is 0:00', (done) => {
    wakatime.getGrandTotalTime('2015/11/20', (err, time) => {
      assert(time === '0:00');
      done();
    });
  });
});
