const { fetchJson } = require('../tools/fetcher')

/**
 * Get anime info.
 * @param {String} title
 * @returns {Promise} Return anime info.
 */
const anime = (title) => new Promise((resolve, reject) => {
    console.log(`Getting anime info for ${title}...`)
    fetchJson('https://arugaz.herokuapp.com/api/kuso?q=' + title)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get manga info.
 * @param {String} title
 * @returns {Promise} Return manga info.
 */
const manga = (title) => new Promise((resolve, reject) => {
    console.log(`Getting manga info for ${title}...`)
    fetchJson('https://arugaz.herokuapp.com/api/komiku?q=' + title)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
 /**
  * Get waifu image.
  * @param {Boolean} nsfw is NSFW?
  * @returns {Promise} Return waifu image.
  */
const waifu = (nsfw) => new Promise((resolve, reject) => {
    if (nsfw === true) {
        console.log(`Getting NSFW waifu image...`)
        fetchJson('https://waifu.pics/api/nsfw/waifu')
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    } else {
        console.log(`Getting SFW waifu image...`)
        fetchJson('https://waifu.pics/api/sfw/waifu')
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    }
})

module.exports = {
    anime,
    manga,
    waifu
}