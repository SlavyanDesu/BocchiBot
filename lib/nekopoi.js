// Thanks to ArugaZ!!

'use-strict'
const axios = require('axios')
const cheerio = require('cheerio')

/**
 * Get latest videos from Nekopoi.
 * @returns {Promise} Return latest videos from Nekopoi.
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
})

/**
 * Get Nekopoi video metadata.
 * @param {String} url
 * @returns {Promise} Return metadata.
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
                console.error(err)
                reject(err)
            }
        })
})

module.exports = {
    getLatest,
    getVideo
}
