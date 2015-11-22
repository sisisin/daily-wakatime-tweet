'use strict';
const Twit = require('twit');
const config = require('./config');
const T = new Twit(config.twit);

module.exports = function (tweet, cb) {
  T.post('statuses/update', { status: tweet }, (err, data, res) => {
    cb(err, data, res);
  }); 
};
