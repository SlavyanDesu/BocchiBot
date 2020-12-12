const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * Get phone info from GSMArena.
 * @param {String} hp 
 */
const gsmarena = (hp) => new Promise((resolve, reject) => {
    console.log(`Getting phone info for ${hp}...`)
    fetchJson('https://api.vhtear.com/gsmarena?query=' + hp + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get food receipt.
 * @param {String} masakan 
 */
const resep = (masakan) => new Promise((resolve, reject) => {
    console.log(`Getting receipt for ${masakan}...`)
    fetchJson('https://api.vhtear.com/resepmasakan?query=' + masakan + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get YouTube results.
 * @param {String} query 
 */
const ytSearch = (query) => new Promise((resolve, reject) => {
    console.log(`Getting YouTube search results for ${query}...`)
    fetchJson('https://api.vhtear.com/youtube?query=' + query + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    gsmarena,
    resep,
    ytSearch
}