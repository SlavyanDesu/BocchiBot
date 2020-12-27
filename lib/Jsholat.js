var needle = require('needle')
var moment = require('moment-timezone')

const Jsholat = (kota) => new Promise((resolve, reject) => {
  var url = 'https://api.banghasan.com/sholat/format/json'
  var kodekota = new Array()
  var tanggal  = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')
  needle(url + '/kota/nama/' + kota, (err, resp, body) => {
    if (err) throw err

    switch (body.kota.length) {
      case 0:
        reject('nama kota tidak ditemukan.\n\nmore information: https://api.banghasan.com/.')
        break;
      default:
        kodekota.push(body.kota[0]['id'])
        needle(url + '/jadwal/kota/' + kodekota[0] + '/tanggal/' + tanggal, (err, resp, body) => {
            if (err) throw err

            resolve([body.jadwal.data])
        })
        break;
    }
  })
})

module.exports = Jsholat
