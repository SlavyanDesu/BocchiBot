const { fetchJson } = require('../tools/fetcher')

const anime = (q) => new Promise((resolve, reject) => {
    console.log(`Getting anime info for ${q}...`)
    fetchJson('https://arugaz.herokuapp.com/api/kuso?q=' + q)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})

const manga = (q) => new Promise((resolve, reject) => {
    console.log(`Getting manga info for ${q}...`)
    fetchJson('https://arugaz.herokuapp.com/api/komiku?q=' + q)
        .then((result) =>  resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})

module.exports = {
    anime,
    manga
}