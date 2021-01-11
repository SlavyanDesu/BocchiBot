const { fetchJson } = require('../tools/fetcher')
const ph = require('@justalk/pornhub-api')
const config = require('../config.json')

/**
 * Get random lewd images from given subreddits.
 * @returns {Object}
 */
const randomLewd = () => new Promise((resolve, reject) => {
    const tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
    const randTag = tag[Math.floor(Math.random() * tag.length)]
    console.log(`Searching lewd from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get armpits pict.
 * @returns {Object}
 */
const armpits = () => new Promise((resolve, reject) => {
    console.log('Searching for armpits...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animearmpits')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get feets pict.
 * @returns {Object}
 */
const feets = () => new Promise((resolve, reject) => {
    console.log('Searching for feets...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animefeets')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get thighs pict.
 * @returns {Object}
 */
const thighs = () => new Promise((resolve, reject) => {
    console.log('Searching for thighs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animethighss')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ass pict.
 * @returns {Object}
 */
const ass = () => new Promise((resolve, reject) => {
    console.log('Searching for ass...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebooty')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get boobs pict.
 * @returns {Object}
 */
const boobs = () => new Promise((resolve, reject) => {
    console.log('Searching for boobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/biganimetiddies')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get belly pict.
 * @returns {Object}
 */
const belly = () => new Promise((resolve, reject) => {
    console.log('Searching for belly...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebellybutton')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get sideboobs pict.
 * @returns {Object}
 */
const sideboobs = () => new Promise((resolve, reject) => {
    console.log('Searching for sideboobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/sideoppai')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ahegao pict.
 * @returns {Object}
 */
const ahegao = () => new Promise((resolve, reject) => {
    console.log('Searching for ahegao...')
    fetchJson('https://meme-api.herokuapp.com/gimme/ahegao')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Pornhub metadata from URL.
 * @param {String} url 
 * @returns {Object}
 */
const phDl = (url) => new Promise((resolve, reject) => {
    console.log(`Get Pornhub metadata from ${url}`)
    ph.page(url, ['title', 'download_urls', 'thumbnail_url'])
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get XXX video from URL.
 * @param {String} url 
 * @returns {Object}
 */
const xxx = (url) => new Promise((resolve, reject) => {
    console.log(`Get XXX video from ${url}`)
    fetchJson(`https://api.vhtear.com/xxxdownload?link=${url}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    randomLewd,
    armpits,
    feets,
    thighs,
    ass,
    boobs,
    belly,
    sideboobs,
    ahegao,
    phDl,
    xxx
}
