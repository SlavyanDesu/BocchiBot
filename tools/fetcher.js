const fetch = require('node-fetch')

const fetchJson = (url, options) => {
    return new Promise((resolve, reject) => {
        return fetch(url, options)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => {
                console.error(err)
                reject(err)
            })
    })
}

const fetchText = (url, options) => {
    return new Promise((resolve, reject) => {
        return fetch(url, options)
            .then(response => response.text())
            .then(text => resolve(text))
            .catch(err => {
                console.error(err)
                reject(err)
            })
    })
}

const fetchBase64 = (url, mimetype) => {
    return new Promise((resolve, reject) => {
        return fetch(url)
            .then((res) => {
                const _mimetype = mimetype || res.headers.get('content-type')
                res.buffer()
                    .then((result) => resolve(`data:${_mimetype};base64,` + result.toString('base64')))
            })
            .catch((err) => {
                console.error(err)
                reject(err)
            })
    })
}

module.exports = {
    fetchJson,
    fetchText,
    fetchBase64
}