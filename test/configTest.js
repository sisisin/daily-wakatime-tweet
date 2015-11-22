const config = require('../lib/config');
const assert = require('power-assert');

describe('config', () => {
  it('get consumer secret', () => {
    assert(config.twit.consumer_secret === 'cs');
  });
  it('get access token secret', () => {
    assert(config.twit.access_token_secret === 'ats');
  });
});