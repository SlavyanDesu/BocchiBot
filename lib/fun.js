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

module.exports = {
    howgay,
    motivasi,
    calender,
    pasangan,
    zodiak
}