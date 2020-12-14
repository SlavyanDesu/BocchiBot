const fetch = require('node-fetch')
const { fromBuffer } = require('file-type')
const fs = require('fs-extra')
const FormData = require('form-data')

/**
 * Fetch JSON from URL.
 * @param {String} url 
 * @param {Object} options 
 */
const fetchJson = (url, options) => {
    return new Promise((resolve, reject) => {
        return fetch(url, options)
            .then((response) => response.json())
            .then((json) => resolve(json))
            .catch((err) => {
                reject(err)
            })
    })
}

/**
 * Fetch text from URL.
 * @param {String} url 
 * @param {Object} options 
 */
const fetchText = (url, options) => {
    return new Promise((resolve, reject) => {
        return fetch(url, options)
            .then((response) => response.text())
            .then((text) => resolve(text))
            .catch((err) => {
                reject(err)
            })
    })
}

/**
 * Upload images to telegra.ph server.
 * @param {Buffer} buffData 
 * @param {String} namaFile
 */
const uploadImages = (buffData, namaFile) => {
    return new Promise((resolve, reject) => {
        const { ext } = fromBuffer(buffData)
        const filePath = `tools/${namaFile}.` + ext
        fs.writeFile(filePath, buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, `${namaFile}.` + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.error) return reject(result.error)
                    resolve('https://telegra.ph' + result[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch((err) => reject(err))
        })
    })
}

module.exports = {
    fetchJson,
    fetchBase64,
    fetchText,
    uploadImages
}
