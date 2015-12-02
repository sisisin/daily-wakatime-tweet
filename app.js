'use strict'
const CronJob = require('cron').CronJob;
const twitter = require('./lib/twitter');
const logger = require('./lib/logger');
 
const job = new CronJob('1 0 0 * * *', twitter, () => logger.info('cron job succeeded.'), false, 'Asia/Tokyo');

job.start();
