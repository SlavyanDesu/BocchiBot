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
 * Get YouTube search results.
 * @param {String} query 
 */
const ytSearch = (query) => new Promise((resolve, reject) => {
    console.log(`Getting YouTube search results for ${query}...`)
    fetchJson('https://api.vhtear.com/youtube?query=' + query + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get PlayStore search results.
 * @param {String} query 
 */
const playstore = (query) => new Promise((resolve, reject) => {
    console.log(`Fetching PlayStore data for ${query}...`)
    fetchJson('https://api.vhtear.com/playstore?query=' + query + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Shopee search results.
 * @param {String} query 
 * @param {String} count 
 */
const shopee = (query, count) => new Promise((resolve, reject) => {
    console.log(`Fetching Shopee data for ${query}...`)
    fetchJson('https://api.vhtear.com/shopee?query=' + query + '&count=' + count + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    gsmarena,
    resep,
    ytSearch,
    playstore,
    shopee
}