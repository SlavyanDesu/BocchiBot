const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

module.exports = shortener = (url) => new Promise((resolve, reject) => {
    console.log('Creating shortlink...')
    fetchJson('https://api.i-tech.id/tools/shorturl?key=' + config.token + '&link=' + url)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})