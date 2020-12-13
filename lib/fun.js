const { fetchText, fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * How gay is he?
 * @param {String} nama 
 */
const howgay = (nama) => new Promise((resolve, reject) => {
    console.log(`Check how gay is ${nama}...`)
    fetchText('https://raw.githubusercontent.com/MrPawNO/howgay/main/howgay.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get motivate texts.
 */
const motivasi = () => new Promise((resolve, reject) => {
    console.log('Getting motivates text...')
    fetchText('https://raw.githubusercontent.com/MrPawNO/motivasi/main/motivasi.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Create calender image.
 * @param {String} url 
 */
const calender = (url) => new Promise((resolve, reject) => {
    console.log('Creating image...')
    fetchJson('https://api.vhtear.com/calender?link=' + url + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Fortune-telling about you and your partner.
 * @param {String} nama 
 * @param {String} pasangan 
 */
const pasangan = (nama, pasangan) => new Promise((resolve, reject) => {
    console.log('Checking fortune...')
    fetchJson('https://api.vhtear.com/primbonjodoh?nama=' + nama + '&pasangan=' + pasangan + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
/**
 * Get weekly zodiac fortune.
 * @param {String} zodiak 
 */
const zodiak = (zodiak) => new Promise((resolve, reject) => {
    console.log('Getting weekly zodiac fortune...')
    fetchJson('https://api.vhtear.com/zodiak?query=' + zodiak + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Create missing person image.
 * @param {String} atas 
 * @param {String} tengah 
 * @param {String} bawah 
 * @param {String} url
 */
const missing = (atas, tengah, bawah, url) => new Promise((resolve, reject) => {
    console.log('Creating image...')
    fetchJson('https://api.vhtear.com/missingperson?text1=' + atas + '&text2=' + tengah + '&text3=' + bawah + '&link=' + url +'&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})

/**
 * Create valentine image.
 * @param {String} nama 
 * @param {String} pasangan 
 * @param {String} fotoMu 
 * @param {String} fotoPasangan 
 */
const valentine = (nama, pasangan, fotoMu, fotoPasangan) => new Promise((resolve, reject) => {
    console.log('Creating image...')
    fetchJson('https://api.vhtear.com/valentine?t1=' + nama + '&t2=' + pasangan + '&l1=' + fotoMu + '&l2=' + fotoPasangan + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    howgay,
    motivasi,
    calender,
    pasangan,
    zodiak,
    missing,
    valentine
}