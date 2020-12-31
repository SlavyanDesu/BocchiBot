const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * Create sticker from text.
 * @param {String} text
 */
const stickerText = (text) => new Promise((resolve, reject) => {
    console.log(`Creating sticker from ${text}...`)
    fetchJson(`https://st4rz.herokuapp.com/api/ttp?kata=${text}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Creater sticker lightning from URL media.
 * @param {String} url 
 */
const stickerLight = (url) => new Promise((resolve, reject) => {
    console.log('Creating sticker GIF...')
    fetchJson(`https://api.vhtear.com/lightning?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Create sticker fire from URL media.
 * @param {String} url 
 */
const stickerFire = (url) => new Promise((resolve, reject) => {
    console.log('Creating sticker GIF...')
    fetchJson(`https://api.vhtear.com/burning_fire?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports ={
    stickerText,
    stickerLight,
    stickerFire
}
