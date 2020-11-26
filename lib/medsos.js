const { fetchJson } = require('../tools/fetcher')

/**
 * Get Instagram account info from username.
 * @param {String} username
 * @returns {Promise} Return account info.
 */
const igstalk = (username) => new Promise((resolve, reject) => {
    console.log(`Searching account for ${username}...`)
    fetchJson('https://arugaz.herokuapp.com/api/stalk?username=' + username)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})

module.exports = {
    igstalk
}