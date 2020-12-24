const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * Get lyric from title or lyric of the song itself.
 * @param {String} title
 */
module.exports = lirik = (title) => new Promise((resolve, reject) => {
    console.log(`Searching lyrics for ${title}...`)
    fetchJson('https://api.vhtear.com/liriklagu?query=' + title + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})