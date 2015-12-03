'use strict'
const CronJob = require('cron').CronJob;
const twitter = require('./lib/twitter');

 
const job = new CronJob('1 0 0 * * *', twitter, () => console.log('cron job succeeded.'), false, 'Asia/Tokyo');

job.start();
