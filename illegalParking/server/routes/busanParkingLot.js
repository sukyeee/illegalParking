const Router = require('koa-router');

const getCoordinates = require('../lib/getCoordinates');

const busanParkingLot = require(`../data/json/BUSAN_PARKINGLOT.json`);

const api = new Router();

api.get('/busan-parkinglot', (ctx) => {
  const {latitude, longitude, range} = ctx.query;
  const location = {
    latitude: latitude,
    longitude: longitude,
  }
  const response = getCoordinates(busanParkingLot, location, range);
  ctx.body = response;
});

module.exports = api;