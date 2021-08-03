const { fetchJson } = require('../tools/fetcher')
const { twitter } = require('video-url-link')
const { promisify } = require('util')
const config = require('../config.json')
const twtGetInfo = promisify(twitter.getInfo)

/**
 * Get Instagram media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const insta = (url) => new Promise((resolve, reject) => {
    console.log(`Get Instagram media from ${url}`)
    fetchJson(`https://api.vhtear.com/instadl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get TikTok video from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const tik = (url) => new Promise((resolve, reject) => {
    console.log(`Get TikTok media from ${url}`)
    fetchJson(`https://api.vhtear.com/tiktokdl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Facebook video from URL.
 * @param {string} url
 * @returns {Promise<object>} 
 */
const fb = (url) => new Promise((resolve, reject) => {
    console.log(`Get Facebook media from ${url}`)
    fetchJson(`https://api.vhtear.com/fbdl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get YouTube media from URL.
 * @param {string} url
 * @returns {Promise<object>} 
 */
const ytdl = (url) => new Promise((resolve, reject) => {
    console.log(`Get YouTube media from ${url}`)
    fetchJson(`https://api.vhtear.com/ytdl?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Joox music metadata from title.
 * @param {string} title
 * @returns {Promise<object>} 
 */
const joox = (title) => new Promise((resolve, reject) => {
    console.log(`Get Joox music from ${title}...`)
    fetchJson(`https://api.vhtear.com/music?query=${title}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Twitter media from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const tweet = (url) => new Promise((resolve, reject) => {
    console.log(`Get Twitter media from ${url}`)
    twtGetInfo(url, {}, (error, info) => {
        if (error) {
            reject(error)
        } else {
            resolve(info)
        }
    })
})

/**
 * Get TikTok video with no WM.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const tikNoWm = (url) => new Promise((resolve, reject) => {
    console.log(`Get TikTok with no WM from ${url}`)
    fetchJson(`https://videfikri.com/api/tiktok/?url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get modded APK from moddroid.
 * @param {string} query 
 * @returns {Promise<object>} 
 */
const modroid = (query) => new Promise((resolve, reject) => {
    console.log(`Searching for ${query}...`)
    fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${query}&apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get modded APK from happymod.
 * @param {string} query 
 * @returns {Promise<object>} 
 */
const happymod = (query) => new Promise((resolve, reject) => {
    console.log(`Searching for ${query}...`)
    fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${query}&apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Line sticker from URL.
 * @param {string} url 
 * @returns {Promise<object>} 
 */
const line = (url) => new Promise((resolve, reject) => {
    console.log(`Get Line sticker from ${url}`)
    fetchJson(`http://enznoire.herokuapp.com/line?url=${url}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    fb,
    ytdl,
    tik,
    joox,
    insta,
    tweet,
    tikNoWm,
    modroid,
    happymod,
    line
}
