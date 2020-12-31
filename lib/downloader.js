const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * Get Instagram media from URL.
 * @param {String} url
 */
const insta = (url) => new Promise((resolve, reject) => {
    console.log(`Get Instagram media from ${url}`)
    fetchJson(`https://api.vhtear.com/instadl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get TikTok video from URL.
 * @param {String} url 
 */
const tik = (url) => new Promise((resolve, reject) => {
    console.log(`Get TikTok media from ${url}`)
    fetchJson(`https://api.vhtear.com/tiktokdl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

 /**
  * Get Facebook media from URL.
  * @param {String} url
  */
const facebook = (url) => new Promise((resolve, reject) => {
    console.log(`Get Facebook video from ${url}`)
    fetchJson(`https://api.i-tech.id/dl/fb?key=${config.token}&link=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get YouTube media from URL.
 * @param {String} url
 */
const ytdl = (url) => new Promise((resolve, reject) => {
    console.log(`Get YouTube media from ${url}`)
    fetchJson(`https://api.i-tech.id/dl/yt?key=${config.token}&link=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Joox music metadata from title.
 * @param {String} title
 */
const joox = (title) => new Promise((resolve, reject) => {
    console.log(`Get Joox music from ${title}...`)
    fetchJson(`https://api.vhtear.com/music?query=${title}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    facebook,
    ytdl,
    tik,
    joox,
    insta
}
