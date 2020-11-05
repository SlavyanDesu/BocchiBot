const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

module.exports = qr = (q) => new Promise((resolve, reject) => {
    console.log(`Creating QR code for ${q}...`)
    fetchJson('https://api.i-tech.id/tools/qr?key=' + config.token + '&query=' + q)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})