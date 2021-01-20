const { fetchJson, fetchText } = require('../tools/fetcher')
const config = require('../config.json')
const moment = require('moment-timezone')
const needle = require('needle')

/**
 * Search for IG Story.
 * @param {String} query
 * @returns {Object}
 */
const its = (query) => new Promise((resolve, reject) => {
    console.log('Searching for IG Story...')
    fetchJson(`https://api.vhtear.com/igstory?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})

/**
 * Search for Alkitab.
 * @param {String} query 
 * @returns {Object}
 */
const alkitab = (query) => new Promise((resolve, reject) => {
    console.log('Searching for Alkitab info...')
    fetchJson(`https://docs-jojo.herokuapp.com/api/alkitabsearch?q=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get new Line sticker.
 * @returns {Object}
 */
const linesticker = () => new Promise((resolve, reject) => {
    console.log('Get latest Line sticker...')
    fetchJson(`https://api.vhtear.com/newsticker?apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get lyric from title or lyric of the song itself.
 * @param {String} title
 * @returns {Object}
 */
const lirik = (query) => new Promise((resolve, reject) => {
    console.log(`Searching lyrics for ${query}...`)
    fetchJson(`https://api.vhtear.com/liriklagu?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Wikipedia result from given query.
 * @param {String} query
 * @returns {Object}
 */
const wiki = (query) => new Promise((resolve, reject) => {
    console.log(`Get result for ${query} in Wikipedia...`)
    fetchJson(`https://docs-jojo.herokuapp.com/api/wiki?q=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Indonesian word definition from KBBI (Kamus Besar Bahasa Indonesia).
 * @param {String} word
 * @returns {Object}
 */
const kbbi = (word) => new Promise((resolve, reject) => {
    console.log(`Searching definition for ${word} in KBBI...`)
    fetchJson(`https://api.vhtear.com/kbbi?query=${word}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get distance information.
 * @param {String} from
 * @param {String} to
 * @returns {Object}
 */
const distance = (from, to) => new Promise((resolve, reject) => {
    console.log('Get data and calculate it...')
    fetchJson(`https://api.vhtear.com/distance?from=${from}&to=${to}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get latest earthquake info in Indonesia from BMKG (Badan Meteorologi Klimatologi dan Geofisika).
 * @returns {Object}
 */
const bmkg = () => new Promise((resolve, reject) => {
    console.log('Get data from BMKG...')
    fetchJson('https://docs-jojo.herokuapp.com/api/infogempa')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram account info from username.
 * @param {String} username
 * @returns {Object}
 */
const igStalk = (username) => new Promise((resolve, reject) => {
    console.log(`Searching account for ${username}`)
    fetchJson(`https://docs-jojo.herokuapp.com/api/stalk?username=${username}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get phone info from GSMArena.
 * @param {String} model
 * @returns {Object}
 */
const gsmarena = (model) => new Promise((resolve, reject) => {
    console.log(`Get phone info from GSMArena for ${model}...`)
    fetchJson(`https://api.vhtear.com/gsmarena?query=${model}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get food receipt.
 * @param {String} food
 * @returns {Object}
 */
const resep = (food) => new Promise((resolve, reject) => {
    console.log(`Get receipt for ${food}...`)
    fetchJson(`https://api.vhtear.com/resepmasakan?query=${food}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for WhatsApp sticker.
 * @param {String} query 
 * @returns {Object}
 */
const sticker = (query) => new Promise((resolve, reject) => {
    console.log('Searching for sticker...')
    fetchJson(`https://api.vhtear.com/wasticker?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get YouTube search results.
 * @param {String} query 
 * @returns {Object}
 */
const ytSearch = (query) => new Promise((resolve, reject) => {
    console.log(`Get YouTube search results for ${query}...`)
    fetchJson(`https://api.vhtear.com/youtube?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Play Store search results.
 * @param {String} query 
 * @returns {Object}
 */
const playstore = (query) => new Promise((resolve, reject) => {
    console.log(`Get Play Store search results for ${query}...`)
    fetchJson(`https://api.vhtear.com/playstore?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Shopee search results.
 * @param {String} query 
 * @param {String} count 
 * @returns {Object}
 */
const shopee = (query, count) => new Promise((resolve, reject) => {
    console.log(`Get Shopee search results for ${query}...`)
    fetchJson(`https://api.vhtear.com/shopee?query=${query}&count=${count}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Show surah list.
 * @returns {Object}
 */
const listSurah = () => new Promise((resolve, reject) => {
    console.log('Get Al-Qur\'an list...')
    fetchJson(`https://api.vhtear.com/quranlist?&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get surah.
 * @param {String} surah 
 * @returns {Object}
 */
const getSurah = (surah) => new Promise((resolve, reject) => {
    console.log(`Getting Al-Qur'an surah ${surah}...`)
    fetchJson(`https://api.vhtear.com/quran?no=${surah}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get motivation text.
 * @returns {String}
 */
const motivasi = () => new Promise((resolve, reject) => {
    console.log('Get motivation text...')
    fetchText('https://raw.githubusercontent.com/VideFrelan/motivasi/main/motivasi.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Play YT.
 * @param {String} query 
 * @returns {Object}
 */
const ytPlay = (query) => new Promise((resolve, reject) => {
    console.log(`Searching for ${query} in YouTube...`)
    fetchJson(`https://api.vhtear.com/ytmp3?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * IP look-up.
 * @param {String} ip 
 * @returns {Object}
 */
const whois = (ip) => new Promise((resolve, reject) => {
    console.log(`Look-up IP for ${ip}`)
    fetchJson(`https://api.vhtear.com/ipwhois?ipaddr=${ip}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Create shortlink.
 * @param {String} url
 * @returns {String}
 */
const shortener = (url) => new Promise((resolve, reject) => {
    console.log('Creating shortlink...')
    fetchText(`https://tinyurl.com/api-create.php?url=${url}`)
        .then((text) => resolve(text))
        .catch((err) => reject(err))
})

/**
 * SMS gateway.
 * @param {String} number
 * @param {String} msg
 * @returns {Object}
 */
const sms = (number, msg) => new Promise((resolve, reject) => {
    console.log(`Sending SMS to ${number} with message: ${msg}`)
    fetchJson(`https://api.i-tech.id/special/sms?key=${config.token}&no=${number}&msg=${msg}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get jadwal sholat.
 * @param {String} city
 * @returns {Object}
 */
const jadwalSholat = (city) => new Promise((resolve, reject) => {
    const url = 'https://api.banghasan.com/sholat/format/json'
    const kodeKota = new Array()
    const tanggal = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')
    console.log(`Get jadwal sholat for ${city}...`)
    needle(url + '/kota/nama/' + city, (err, resp, body) => {
        if (err) throw err
        switch (body.kota.length) {
            case 0:
                reject('Kota tidak ditemukan!')
            break
            default:
                kodeKota.push(body.kota[0]['id'])
                needle(url + '/jadwal/kota/' + kodeKota[0] + '/tanggal/' + tanggal, (err, resp, body) => {
                    if (err) throw err
                    resolve([body.jadwal.data])
                })
            break
        }
    })
})

/**
 * Search for movie.
 * @param {String} title
 * @returns {Object}
 */
const movie = (title) => new Promise((resolve, reject) => {
    console.log(`Searching for Movie ${title}...`)
    fetchJson(`https://api.vhtear.com/downloadfilm?judul=${title}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Calculate travel payment.
 * @param {String} courier
 * @param {String} from
 * @param {String} to
 * @returns {Object}
 */
const ongkir = (courier, from, to) => new Promise((resolve, reject) => {
    console.log('Checking ongkir...')
    fetchJson(`https://api.vhtear.com/cekongkir?kurir=${courier}&fromcity=${from}&tocity=${to}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Twitter trending.
 * @returns {Object}
 */
const trendingTwt = () => new Promise((resolve, reject) => {
    console.log('Get Twitter trending...')
    fetchJson('https://docs-jojo.herokuapp.com/api/trendingtwitter')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get job seek data.
 * @returns {Object}
 */
const jobSeek = () => new Promise((resolve, reject) => {
    console.log('Searching for jobs...')
    fetchJson('https://docs-jojo.herokuapp.com/api/infoloker')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Sending hoax update.
 * @returns {Object}
 */
const infoHoax = () => new Promise((resolve, reject) => {
    console.log('Checking hoaxes...')
    fetchJson('https://docs-jojo.herokuapp.com/api/infohoax')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Sending spam call.
 * @param {Number} no 
 * @returns {Object}
 */
const spamcall = (no) => new Promise((resolve, reject) => {
    console.log(`Sending spam call to: ${no}`)
    fetchJson(`https://docs-jojo.herokuapp.com/api/spamcall?no=${no}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Sending spam SMS.
 * @param {Number} no 
 * @param {Number} amount 
 * @returns {Object}
 */
const spamsms = (no, amount) => new Promise((resolve, reject) => {
    console.log(`Sending spam SMS to: ${no}`)
    fetchJson(`https://docs-jojo.herokuapp.com/api/spamsms?no=${no}&jum=${amount}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    lirik,
    wiki,
    kbbi,
    bmkg,
    igStalk,
    gsmarena,
    resep,
    sticker,
    ytSearch,
    playstore,
    shopee,
    listSurah,
    getSurah,
    motivasi,
    ytPlay,
    whois,
    shortener,
    sms,
    linesticker,
    jadwalSholat,
    alkitab,
    movie,
    ongkir,
    its,
    distance,
    trendingTwt,
    jobSeek,
    infoHoax,
    spamsms,
    spamcall
}
