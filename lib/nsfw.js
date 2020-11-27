const { fetchJson } = require('../tools/fetcher')

/**
 * Get random lewd images from defined subreddits.
 * @returns {Promise} Return lewd.
 */
const randomLewd = () => new Promise((resolve, reject) => {
    const tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
    const randTag = tag[Math.random() * tag.length | 0]
    console.log(`Searching lewd from ${randTag}...`)
    fetchJson('https://meme-api.herokuapp.com/gimme/' + randTag)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    randomLewd
}