const { fetchText } = require('../tools/fetcher')

/**
 * Create shortlink.
 * @param {String} url
 */
module.exports = shortener = (url) => new Promise((resolve, reject) => {
    console.log('Creating shortlink...')
    fetchText('https://tinyurl.com/api-create.php?url=' + url)
        .then((text) => resolve(text))
        .catch((err) => reject(err))
})