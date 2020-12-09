const { fetchJson, fetchBase64 } = require('../tools/fetcher')
const config = require('../config.json')

 /**
  * Create sticker from text.
  * @param {String} kata
  */
const stickerText = (kata) => new Promise((resolve, reject) => {
    console.log(`Creating sticker from ${kata} text...`)
    fetchJson('https://st4rz.herokuapp.com/api/ttp?kata=' + kata)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Creater sticker lightning.
 * @param {String} url 
 */
const stickerLight = (url) => new Promise((resolve, reject) => {
    console.log('Creating GIF...')
    fetchJson('https://api.vhtear.com/lightning?link=' + url + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Create sticker fire.
 * @param {String} url 
 */
const stickerFire = (url) => new Promise((resolve, reject) => {
    console.log('Creating GIF...')
    fetchJson('https://api.vhtear.com/burning_fire?link=' + url + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports ={
    stickerText,
    stickerLight,
    stickerFire
}
