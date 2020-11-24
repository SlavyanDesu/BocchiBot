/* eslint-disable no-undef */
const { fetchText } = require('../tools/fetcher')

module.exports = shortener = (url) => new Promise((resolve, reject) => {
    console.log('Creating shortlink...')
    fetchText('https://tinyurl.com/api-create.php?url=' + url)
        .then((text) => resolve(text))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})