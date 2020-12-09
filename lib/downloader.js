const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

 /**
  * Get Facebook media from URL.
  * @param {String} url
  */
const facebook = (url) => new Promise((resolve, reject) => {
    console.log(`Getting Facebook video from ${url}`)
    fetchJson('https://api.i-tech.id/dl/fb?key=' + config.token + '&link=' + url)
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err)
        })
})

/**
 * Get media from YouTube.
 * @param {String} url
 */
const ytdl = (url) => new Promise((resolve, reject) => {
    console.log(`Getting YouTube media from ${url}`)
    fetchJson('https://api.i-tech.id/dl/yt?key=' + config.token + '&link=' + url)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    facebook,
    ytdl
}