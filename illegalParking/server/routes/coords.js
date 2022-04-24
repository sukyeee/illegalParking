const geolib = require('geolib')
const qs = require('querystring')
const url = require('url')
const Router = require('koa-router')

const path = '../data/json/'
const bus = require(`${path}BusStop.json`)
const fire = require(`${path}FirewaterFacility.json`)
const crosswalk = require(`${path}crosswalk.json`)
const parking = require(`${path}parking.json`)

const api = new Router()

let isPossible = true

api.get('coords', (req, res) => {
  let { query } = url.parse(req.url)
  console.log(req.url)
  let name = qs.parse(query)
  console.log(name);
  let range = JSON.parse(name.range)
  let Bus = [],
    Fire = [],
    Crosswalk = [],
    Parking = []
  let cur = {
    latitude: JSON.parse(name.latitude),
    longitude: JSON.parse(name.longitude),
  }
  // 현재 좌표에서 300m 이내에 있는 소방용수 시설, 버스정류장, 횡단보도, 주차장 표시
  function getCoordinates(json, kind) {
    let latitude, longitude
    let destination
    json.forEach((obj) => {
      if (obj.Latitude !== '' && obj.Longitude !== '') {
        latitude = JSON.parse(obj.Latitude)
        longitude = JSON.parse(obj.Longitude)
        destination = {
          latitude,
          longitude,
        }
        let m = geolib.getDistance(cur, destination)
        if (m <= range) {
          if (m <= 10) {
            isPossible = false
          }
          if (kind === 'Stop_Station') {
            Bus.push(obj)
          } else if (kind === 'FirewaterFacility') {
            Fire.push(obj)
          } else if (kind === 'Crosswalk') {
            Crosswalk.push(obj)
          } else {
            Parking.push(obj)
          }
        }
      }
    })
  }
  getCoordinates(bus, 'Stop_Station')
  getCoordinates(fire, 'FirewaterFacility')
  getCoordinates(crosswalk, 'Crosswalk')
  getCoordinates(parking, 'Parking')

  let ret = {
    isPossible,
    Stop_Station: Bus,
    FirewaterFacility: Fire,
    Crosswalk: Crosswalk,
    Parking: Parking,
  }
  req.body = ret
})

module.exports = api
