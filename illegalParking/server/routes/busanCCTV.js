const Router = require('koa-router');

const getCoordinates = require('../lib/getCoordinates');

const busanCCTV = require(`../data/json/BUSAN_CCTV.json`);

const api = new Router();

api.get('/busan-cctv', (ctx) => {
  const {latitude, longitude, range} = ctx.query;
  const location = {
    latitude: latitude,
    longitude: longitude,
  }
  const response = getCoordinates(busanCCTV, location, range);
  ctx.body = response;
});

module.exports = api;
