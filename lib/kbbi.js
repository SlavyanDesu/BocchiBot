const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

module.exports = kbbi = (q) => new Promise((resolve, reject) => {
    console.log(`Searching definition for ${q} in KBBI...`)
    fetchJson('https://api.i-tech.id/tools/kbbi?key=' + config.token + '&query=' + q)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})