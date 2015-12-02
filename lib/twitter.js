'use strict';
const Twit = require('twit');
const config = require('./config');
const wakatime = require('./wakatime');
const T = new Twit(config.twit);


module.exports = () => {
  let yesterday;
  let t = new Date();
  t.setDate(t.getDate() - 1);
  yesterday = new Date(`${t.getFullYear()}/${t.getMonth() + 1}/${t.getDate()}`);
  
  wakatime.getGrandTotalTime(yesterday, (err, time) => {
    const tweet = `@Azsimeji ${yesterday.toLocaleDateString()}の作業時間は${time}でした`; 
    T.post('statuses/update', { status: tweet }, (err, data, res) => {
      if (err) console.log(err);
      console.log(data);
    });
  });  
};
