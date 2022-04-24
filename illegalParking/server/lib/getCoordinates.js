const geolib = require("geolib");
const distanceFormat = require("./distanceFormat");

const getCoordinates = (json, location, range) => {
    let result = [];
    json.forEach((obj) => {
        const { LATITUDE, LONGITUDE } = obj;
        if (LATITUDE !== "" && LONGITUDE !== "") { //데이터가 있을때만 추가
            const destination = {
                latitude: LATITUDE,
                longitude: LONGITUDE,
            };
            const distance = geolib.getDistance(location, destination); //두 지리 사이의 좌표 계산
            if (distance <= range) {
                obj = {
                    ...obj,
                    distance: distance,
                    DISTANCE: distance,
                };
                result.push(obj);
            }
        }
    });
    result.sort((a, b) => {
        return a.DISTANCE - b.DISTANCE;
    });
    result.forEach(loc => {
        loc.DISTANCE = distanceFormat(loc.DISTANCE);
    })
    return result;
};

module.exports = getCoordinates;
