const { fetchJson, fetchText } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * Get anime info from Kusonime.
 * @param {string} title
 * @returns {Promise<object>}
 */
const anime = (title) => new Promise((resolve, reject) => {
    console.log(`Get anime info from Kusonime for ${title}...`)
    fetchJson(`https://arugaz.herokuapp.com/api/kuso?q=${title}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get manga info from Komiku.
 * @param {string} title
 * @returns {Promise<object>}
 */
const manga = (title) => new Promise((resolve, reject) => {
    console.log(`Get manga info from Komiku for ${title}...`)
    fetchJson(`https://arugaz.herokuapp.com/api/komiku?q=${title}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random waifu image.
 * @param {boolean} [nsfw=false]
 * @returns {Promise<object>}
 */
const waifu = (nsfw) => new Promise((resolve, reject) => {
    if (nsfw === true) {
        console.log('Get NSFW waifu image...')
        fetchJson('https://waifu.pics/api/nsfw/waifu')
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    } else {
        console.log('Get SFW waifu image...')
        fetchJson('https://waifu.pics/api/sfw/waifu')
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    }
})

/**
 * Search for anime source from image.
 * @param {Buffer} imageBase64 
 * @returns {Promise<object>}
 */
const wait = (imageBase64) => new Promise((resolve, reject) => {
    console.log('Searching for anime source...')
    fetchJson('https://trace.moe/api/search', {
        method: 'POST',
        body: JSON.stringify({ image: imageBase64 }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Anitoki latest update.
 * @returns {Promise<object>}
 */
const anitoki = () => new Promise((resolve, reject) => {
    console.log('Get Anitoki latest update...')
    fetchJson(`https://melodicxt.herokuapp.com/api/anitoki?apiKey=${config.melodic}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Neonime latest update.
 * @returns {Promise<object>}
 */
const neonime = () => new Promise((resolve, reject) => {
    console.log('Get Neonime latest update...')
    fetchJson('https://enznoire.herokuapp.com/neolatest')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Anoboy anime on-going list.
 * @returns {Promise<object>}
 */
const anoboy = () => new Promise((resolve, reject) => {
    console.log('Get Anoboy on-going...')
    fetchJson(`https://api.vhtear.com/ongoinganoboy&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Random anime sticker
 * @returns {string}
 */
const snime = () => new Promise((resolve, reject) => {
    console.log('Get anime sticker...')
    fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random video loli.
 * @returns {string}
 */
const loli = () => new Promise((resolve, reject) => {
    console.log('Get random video loli...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


module.exports = {
    anime,
    manga,
    waifu,
    wait,
    anitoki,
    neonime,
    anoboy,
    snime,
    loli
}
