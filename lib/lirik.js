/* eslint-disable no-undef */
const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

module.exports = lirik = (q) => new Promise((resolve, reject) => {
    console.log(`Searching lyrics for ${q}...`)
    fetchJson('https://api.i-tech.id/tools/lirik?key=' + config.token + '&query=' + q)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})