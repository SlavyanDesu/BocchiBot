const { text } = require('figlet')
const { fetchJson } = require('../tools/fetcher')
 /**
  * Create sticker from text.
  * @param {String} kata
  */
const stickertext = (kata) => new Promise((resolve, reject) => {
    console.log(`Creating sticker from ${kata} text...`)
    fetchJson('https://st4rz.herokuapp.com/api/ttp?kata=' + kata)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
}) 

module.exports ={
    stickertext
}