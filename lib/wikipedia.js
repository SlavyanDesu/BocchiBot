const { fetchJson } = require('../tools/fetcher')

/**
 * Get Wikipedia from query.
 * @param {String} q
 * @returns {Promise} Return a result from Wikipedia.
 */
module.exports = wiki = (q) => new Promise((resolve, reject) => {
    console.log(`Searching definition for ${q} in Wikipedia...`)
    fetchJson('ttps://arugaz.herokuapp.com/api/wiki?q=' + q)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})