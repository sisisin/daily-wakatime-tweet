'use strict'
const CronJob = require('cron').CronJob;

const wakatime = require('./lib/wakatime');
const twitter = require('./lib/twitter');

const job = new CronJob('1 0 0 * * *', () => {
  let yesterday;
  let t = new Date();
  yesterday = new Date(`${t.getFullYear()}/${t.getMonth() + 1}/${t.getDate() - 1}`);
  
  wakatime.getGrandTotalTime(yesterday, (err, time) => {
    twitter(`@Azsimeji ${yesterday.toLocaleDateString()}の作業時間は${time}でした`, (err, data, res) => {
      if (err) console.log(err);
      console.log(data);
    });
  });  
}, () => { console.log('end');}, false, 'Asia/Tokyo');

job.start();
