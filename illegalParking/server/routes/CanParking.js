const Router = require('koa-router');

const getCoordinates = require('../lib/getCoordinates');

const busanCCTV = require(`../data/json/BUSAN_CCTV.json`);
const busanChildren = require(`../data/json/BUSAN_CHILDREN.json`);

const api = new Router();

api.get('/can_parking', (ctx) => {
  const {latitude, longitude} = ctx.query;
  const location = {
    latitude: latitude,
    longitude: longitude,
  }
  const cctv = getCoordinates(busanCCTV, location, 30);
  const children = getCoordinates(busanChildren, location, 30);
  const can_parking = ((cctv.length || children.length) ? false : true);
  ctx.body = {can_parking, cctv, children};
});

module.exports = api;
