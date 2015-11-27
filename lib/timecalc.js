'use strict';
module.exports = (sec) => {
  const h = String(Math.floor(Number(sec) / 3600) + 100).substring(1);
  const m = String(Math.floor((Number(sec) - Number(h) * 3600)/60)+ 100).substring(1);
  const s = String(Math.round((Number(sec) - Number(h) * 3600 - Number(m) * 60))+ 100).substring(1);
  return `${h}:${m}:${s}`;
};
