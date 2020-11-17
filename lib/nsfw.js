const { fetchJson } = require('../tools/fetcher')

const randomLewd = (amount) => new Promise((resolve, reject) => {
    const tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
    const randTag = tag[Math.random() * tag.length | 0]
    console.log(`Searching lewd from ${randTag}...`)
    fetchJson('https://meme-api.herokuapp.com/gimme/' + randTag + `/${amount}`)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})

module.exports = {
    randomLewd
}