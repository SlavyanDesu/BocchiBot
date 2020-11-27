const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

 /**
  * Get Facebook media from URL.
  * @param {String} url
  * @returns {Promise} Return Facebook media.
  */
const facebook = (url) => new Promise((resolve, reject) => {
    console.log(`Getting media from ${url}`)
    fetchJson('https://api.i-tech.id/dl/fb?key=' + config.token + '&link=' + url)
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err)
        })
})

/**
 * Get audio from YouTube.
 * @param {String} url
 * @returns {Promise} Return audio (MP3).
 */
const ytmp3 = (url) => new Promise((resolve, reject) => {
    console.log(`Getting audio from ${url}`)
    fetchJson('https://arugaz.herokuapp.com/api/yta?url=' + url)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get video from YouTube.
 * @param {String} url 
 * @returns {Promise} Return video (MP4).
 */
const ytmp4 = (url) => new Promise((resolve, reject) => {
    console.log(`Getting video from ${url}`)
    fetchJson('https://arugaz.herokuapp.com/api/ytv?url=' + url)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    facebook,
    ytmp3,
    ytmp4
}