const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * Get lyric from title or lyric of the song itself.
 * @param {String} title
 * @returns {Promise} Return lyric.
 */
module.exports = lirik = (title) => new Promise((resolve, reject) => {
    console.log(`Searching lyrics for ${title}...`)
    fetchJson('https://api.i-tech.id/tools/lirik?key=' + config.token + '&query=' + title)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})