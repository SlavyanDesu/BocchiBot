const { fetchJson } = require('../tools/fetcher')

const igstalk = (q) => new Promise((resolve, reject) => {
    console.log(`Searching account for ${q}...`)
    fetchJson('https://arugaz.herokuapp.com/api/stalk?username=' + q)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})

module.exports = {
    igstalk
}