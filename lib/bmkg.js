/* eslint-disable no-undef */
const { fetchJson } = require('../tools/fetcher')

module.exports = bmkg = () => new Promise((resolve, reject) => {
    console.log('Getting data from BMKG...')
    fetchJson('https://arugaz.herokuapp.com/api/infogempa')
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})