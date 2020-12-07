const { fetchJson } = require('../tools/fetcher')

/**
 * Get random lewd images from defined subreddits.
 * @returns {Promise} Return lewd.
 */
const randomLewd = () => new Promise((resolve, reject) => {
    const tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
    const randTag = tag[Math.random() * tag.length | 0]
    console.log(`Searching lewd from ${randTag}...`)
    fetchJson('https://meme-api.herokuapp.com/gimme/' + randTag)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const armpits = () => new Promise((resolve, reject) => {
    console.log('Searching for armpits...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animearmpits')
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err)
        })
})

const feets = () => new Promise((resolve, reject) => {
    console.log('Searching for feets...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animefeets')
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err)
        })
})

const thighs = () => new Promise((resolve, reject) => {
    console.log('Searching for thighs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animethighss')
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err)
        })
})

const ass = () => new Promise((resolve, reject) => {
    console.log('Searching for ass...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebooty')
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err)
        })
})

const boobs = () => new Promise((resolve, reject) => {
    console.log('Searching for boobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/biganimetiddies')
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err)
        })
})

const belly = () => new Promise((resolve, reject) => {
    console.log('Searching for belly...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebellybutton')
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err)
        })
})

const sideboobs = () => new Promise((resolve, reject) => {
    console.log('Searching for sideboobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/sideoppai')
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err)
        })
})

const ahegao = () => new Promise((resolve, reject) => {
    console.log('Searching for ahegao...')
    fetchJson('https://meme-api.herokuapp.com/gimme/ahegao')
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err)
        })
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
    ahegao
}