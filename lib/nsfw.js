const { fetchJson } = require('../tools/fetcher')
const ph = require('@justalk/pornhub-api')
const axios = require('axios')
const cheerio = require('cheerio')
const config = require('../config.json')

/**
 * Get random lewd images from defined subreddits.
 */
const randomLewd = () => new Promise((resolve, reject) => {
    const tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
    const randTag = tag[Math.random() * tag.length | 0]
    console.log(`Searching lewd from ${randTag}...`)
    fetchJson('https://meme-api.herokuapp.com/gimme/' + randTag)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get armpits pict.
 */
const armpits = () => new Promise((resolve, reject) => {
    console.log('Searching for armpits...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animearmpits')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get feets pict.
 */
const feets = () => new Promise((resolve, reject) => {
    console.log('Searching for feets...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animefeets')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get thighs pict.
 */
const thighs = () => new Promise((resolve, reject) => {
    console.log('Searching for thighs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animethighss')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ass pict.
 */
const ass = () => new Promise((resolve, reject) => {
    console.log('Searching for ass...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebooty')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get boobs pict.
 */
const boobs = () => new Promise((resolve, reject) => {
    console.log('Searching for boobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/biganimetiddies')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get belly pict.
 */
const belly = () => new Promise((resolve, reject) => {
    console.log('Searching for belly...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebellybutton')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get sideboobs pict.
 */
const sideboobs = () => new Promise((resolve, reject) => {
    console.log('Searching for sideboobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/sideoppai')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ahegao pict.
 */
const ahegao = () => new Promise((resolve, reject) => {
    console.log('Searching for ahegao...')
    fetchJson('https://meme-api.herokuapp.com/gimme/ahegao')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Sending pornhub metadata.
 * @param {String} url 
 */
const phDl = (url) => new Promise((resolve, reject) => {
    console.log(`Searching pornhub for ${url}`)
    ph.page(url, ['title', 'download_urls', 'thumbnail_url'])
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Sending XXX metadata.
 * @param {String} url 
 */
const xxx = (url) => new Promise((resolve, reject) => {
    console.log(`Getting XXX video from ${url}`)
    fetchJson('https://api.vhtear.com/xxxdownload?link=' + url + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get latest videos from Nekopoi.
 */
const getLatest = () => new Promise((resolve, reject) => {
    const url = 'http://nekopoi.care'
    axios.get(url)
        .then((req) => {
            const title = []
            const link = []
            const image = []
            const data = {}
            const soup = cheerio.load(req.data)
            soup('div.eropost').each((i, e) => {
                soup(e).find('h2').each((j, s) => {
                    title.push(soup(s).find('a').text().trim())
                    link.push(soup(s).find('a').attr('href'))
                })
                image.push(soup(e).find('img').attr('src'))
            })
            if (data == undefined) {
                reject('No result :(')
            } else {
                let i = Math.floor(Math.random() * title.length)
                let hehe = {
                    "title": title[i],
                    "image": image[i],
                    "link": link[i]
                }
                resolve(hehe)
            }
        })
        .catch((err) => reject(err))
})

/**
 * Get Nekopoi video metadata.
 * @param {String} url
 */
const getVideo = (url) => new Promise((resolve, reject) => {
    axios.get(url)
        .then((req) => {
            try {
                const links = []
                let soup = cheerio.load(req.data)
                let title = soup("title").text()
                soup('div.liner').each((i, e) => {
                    soup(e).find('div.listlink').each((j, s) => {
                        soup(s).find('a').each((p, q) => {
                            links.push(soup(q).attr('href'))
                        }) 
                    })
                })
                const data = {
                    "title": title,
                    "links": links
                }
                resolve(data)
            } catch (err) {
                reject(err)
            }
        })
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
    xxx,
    getLatest,
    getVideo
}