const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * Show surah list.
 */
const list = () => new Promise((resolve, reject) => {
    console.log('Getting Al-Qur\'an list...')
    fetchJson('https://api.vhtear.com/quranlist?&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get surah.
 * @param {String} surah 
 */
const getQuran = (surah) => new Promise((resolve, reject) => {
    console.log(`Getting Al-Qur'an surah ${surah}...`)
    fetchJson('https://api.vhtear.com/quran?no=' + surah + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    list,
    getQuran
}