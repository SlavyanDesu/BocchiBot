const { fetchText, fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * Create calendar styled image from media URL.
 * @param {String} url 
 * @returns {Object}
 */
const calendar = (url) => new Promise((resolve, reject) => {
    console.log('Creating image...')
    fetchJson(`https://api.vhtear.com/calender?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Fortune-telling about you and your partner.
 * @param {String} name
 * @param {String} partner
 * @returns {Object}
 */
const pasangan = (name, partner) => new Promise((resolve, reject) => {
    console.log(`Checking fortune for ${name} and ${partner}...`)
    fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${name}&pasangan=${partner}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get weekly zodiac fortune.
 * @param {String} zodiac
 * @returns {Object}
 */
const zodiak = (zodiac) => new Promise((resolve, reject) => {
    console.log(`Get weekly zodiac fortune for ${zodiac}...`)
    fetchJson(`https://api.vhtear.com/zodiak?query=${zodiac}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Create missing person image.
 * @param {String} text1
 * @param {String} text2
 * @param {String} text3
 * @param {String} url
 * @returns {Object}
 */
const missing = (text1, text2, text3, url) => new Promise((resolve, reject) => {
    console.log('Creating image...')
    fetchJson(`https://api.vhtear.com/missingperson?text1=${text1}&text2=${text2}&text3=${text3}&link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})

/**
 * Create valentine image.
 * @param {String} text1
 * @param {String} text2
 * @param {String} url1
 * @param {String} url2
 * @returns {Object}
 */
const valentine = (text1, text2, url1, url2) => new Promise((resolve, reject) => {
    console.log('Creating image...')
    fetchJson(`https://api.vhtear.com/valentine?t1=${text1}&t2=${text2}&l1=${url1}&l2=${url2}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Chat with SimiSimi.
 * @param {String} chat
 * @returns {Object}
 */
const simi = (chat) => new Promise((resolve, reject) => {
    console.log('Get response from SimSumi...')
    fetchJson(`http://simsumi.herokuapp.com/api?text=${chat}&lang=id`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get truth.
 * @returns {String}
 */
const truth = () => new Promise((resolve, reject) => {
    console.log('Get random truth...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truth.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get dare.
 * @returns {String}
 */
const dare = () => new Promise((resolve, reject) => {
    console.log('Get random dare...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get weton fortune.
 * @param {String} date
 * @param {String} month
 * @param {String} year
 * @returns {Object}
 */
const weton = (date, month, year) => new Promise((resolve, reject) => {
    console.log('Get weton data...')
    fetchJson(`https://api.vhtear.com/ramalweton?tgl=${date}&bln=${month}&thn=${year}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})

/**
 * Get fresh videos from TikTok.
 * @returns {String}
 */
const asupan = () => new Promise((resolve, reject) => {
    console.log('Fetching video...')
    fetchText('http://sansekai.my.id/sansekai.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random cita-cita meme.
 * @returns {String}
 */
const cita = () => new Promise((resolve, reject) => {
    console.log('Get random cita-cita...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    calendar,
    pasangan,
    zodiak,
    missing,
    valentine,
    simi,
    truth,
    dare,
    weton,
    asupan,
    cita
}
