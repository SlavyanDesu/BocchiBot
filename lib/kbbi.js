const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * Get Indonesian word definition from KBBI (Kamus Besar Bahasa Indonesia).
 * @param {String} kata
 * @returns {Promise} Return definition from word.
 */
module.exports = kbbi = (kata) => new Promise((resolve, reject) => {
    console.log(`Searching definition for ${kata} in KBBI...`)
    fetchJson('https://api.i-tech.id/tools/kbbi?key=' + config.token + '&query=' + kata)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})