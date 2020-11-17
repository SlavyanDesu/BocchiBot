const { fetchJson } = require('../tools/fetcher')

module.exports = wiki = (q) => new Promise((resolve, reject) => {
    console.log(`Searching definition for ${q} in Wikipedia...`)
    fetchJson('ttps://arugaz.herokuapp.com/api/wiki?q=' + q)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})