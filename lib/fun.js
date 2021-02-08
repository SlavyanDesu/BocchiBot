const { fetchText, fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * Get tebak gambar quiz.
 * @returns {object}
 */
const tbkgmbr = () => new Promise((resolve, reject) => {
    console.log('Getting tebakgambar quiz...')
    fetchJson('http://videfikri.com/api/tebakgambar/')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get hilih text.
 * @param {string} query
 * @returns {object}
 */
const hilihteks = (query) => new Promise((resolve, reject) => {
    console.log(`Getting Hilih teks from: ${query}...`)
    fetchJson(`https://videfikri.com/api/hilih?query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Fortune-telling about you and your partner.
 * @param {string} name
 * @param {string} partner
 * @returns {object}
 */
const pasangan = (name, partner) => new Promise((resolve, reject) => {
    console.log(`Checking fortune for ${name} and ${partner}...`)
    fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${name}&pasangan=${partner}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get weekly zodiac fortune.
 * @param {string} zodiac
 * @returns {object}
 */
const zodiak = (zodiac) => new Promise((resolve, reject) => {
    console.log(`Get weekly zodiac fortune for ${zodiac}...`)
    fetchJson(`https://api.vhtear.com/zodiak?query=${zodiac}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Chat with SimiSimi.
 * @param {string} chat
 * @returns {object}
 */
const simi = (chat) => new Promise((resolve, reject) => {
    console.log('Get response from SimSumi...')
    fetchJson(`https://videfikri.com/api/simsimi?teks=${chat}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get truth.
 * @returns {string}
 */
const truth = () => new Promise((resolve, reject) => {
    console.log('Get random truth...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truth.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get dare.
 * @returns {string}
 */
const dare = () => new Promise((resolve, reject) => {
    console.log('Get random dare...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get weton fortune.
 * @param {string} date
 * @param {string} month
 * @param {string} year
 * @returns {object}
 */
const weton = (date, month, year) => new Promise((resolve, reject) => {
    console.log('Get weton data...')
    fetchJson(`https://api.vhtear.com/ramalweton?tgl=${date}&bln=${month}&thn=${year}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})

/**
 * Get fresh videos from TikTok.
 * @returns {string}
 */
const asupan = () => new Promise((resolve, reject) => {
    console.log('Fetching video...')
    fetchText('http://sansekai.my.id/sansekai.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random cita-cita meme.
 * @returns {string}
 */
const cita = () => new Promise((resolve, reject) => {
    console.log('Get random cita-cita...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Cak Lontong quiz.
 * @returns {Promise<object>}
 */
const caklontong = () => new Promise((resolve, reject) => {
    console.log('Getting caklontong quiz...')
    fetchJson(`https://api.vhtear.com/funkuis&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random dice.
 * @returns {string}
 */
const dadu = () => new Promise((resolve, reject) => {
    console.log('Get sticker....')
    fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/Dadu')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random Doge sticker.
 * @returns {string}
 */
const doge = () => new Promise((resolve, reject) => {
    console.log('Get sticker....')
    fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    pasangan,
    zodiak,
    simi,
    truth,
    dare,
    weton,
    asupan,
    cita,
    caklontong,
    hilihteks,
    tbkgmbr,
    dadu,
    doge
}
