const Koa = require('koa');
const Router = require('koa-router');
// const busStation = require('./routes/BusStation');
// const cctv = require('./routes/CCTV');
// const crossWalk = require('./routes/CrossWalk');
// const fireWaterFacility = require('./routes/FireWaterFacility');
// const parkingLot = require('./routes/ParkingLot');
const busanParkingLot = require('./routes/busanParkingLot');
const busanChildren = require('./routes/busanChildren');
const busanCCTV = require('./routes/busanCCTV');
const canParking = require('./routes/CanParking');

const app = new Koa();
const router = new Router();

// router.use('/routes', busStation.routes());
// router.use('/routes', cctv.routes());
// router.use('/routes', crossWalk.routes());
// router.use('/routes', fireWaterFacility.routes());
// router.use('/routes', parkingLot.routes());
router.use('/routes', busanParkingLot.routes());
router.use('/routes', busanChildren.routes());
router.use('/routes', busanCCTV.routes());
router.use('/routes', canParking.routes());

app.use(router.routes()).use(router.allowedMethods()); //app 인스턴스에 라우터 적용

app.listen(4000, () => {
  console.log('Listening to port 4000...')
});

