const Router = require('koa-router');

const getCoordinates = require('../lib/getCoordinates');

const busanChildren = require(`../data/json/BUSAN_CHILDREN.json`);

const api = new Router();

api.get('/busan-children', (ctx) => {
  const {latitude, longitude, range} = ctx.query;
  const location = {
    latitude: latitude,
    longitude: longitude,
  }
  const response = getCoordinates(busanChildren, location, range);
  ctx.body = response;
});

module.exports = api;
