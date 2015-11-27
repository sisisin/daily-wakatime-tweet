'use strict';
const request = require('request');
const computeDuration = require('../lib/timecalc');
let wakatime = {};

wakatime.getGrandTotalTime = (date, cb) => {
  const encodedKey = (new Buffer('90102676-65ff-405e-9a40-9f4cc16b01a0')).toString('base64');
  
  const targetDate = (date).toLocaleDateString('en-US');
  const op = {
    method: 'GET'
    , url: `https://wakatime.com/api/v1/users/52f058ec-e04e-436b-906d-eff6c461abf5/summaries?start=${targetDate}&end=${targetDate}`
    , headers: {
      Authorization: ` Basic ${encodedKey}`
    }
  };

  request(op, (err, res, body) => {
    if (err) cb(err);

    const parsedBody = JSON.parse(body);
    cb(null, computeDuration(parsedBody.data[0].grand_total.total_seconds));
  });
};


module.exports = wakatime;