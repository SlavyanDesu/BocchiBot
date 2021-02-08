const fetch = require('node-fetch')
const { fromBuffer } = require('file-type')
const fs = require('fs-extra')
const FormData = require('form-data')

/**
 * Fetch JSON from URL.
 * @param {string} url 
 * @param {object} [options]
 * @returns {Promise<object>} 
 */
const fetchJson = (url, options) => {
    return new Promise((resolve, reject) => {
        return fetch(url, options)
            .then((response) => response.json())
            .then((json) => resolve(json))
            .catch((err) => reject(err))
    })
}

/**
 * Fetch text from URL.
 * @param {string} url 
 * @param {object} [options]
 * @returns {Promise<string>}
 */
const fetchText = (url, options) => {
    return new Promise((resolve, reject) => {
        return fetch(url, options)
            .then((response) => response.text())
            .then((text) => resolve(text))
            .catch((err) => reject(err))
    })
}

/**
 * Get buffer from direct media.
 * @param {string} url 
 * @param {object} [options]
 * @returns {Promise<Buffer>}
 */
const fetchBuffer = (url, options) => {
    return new Promise((resolve, reject) => {
        return fetch(url, options)
            .then((response) => response.buffer())
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}

/**
 * Upload images to telegra.ph server.
 * @param {Buffer} buffData 
 * @param {string} fileName
 * @returns {Promise<string>}
 */
const uploadImages = (buffData, fileName) => {
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const filePath = `temp/${fileName}.${ext}`
        fs.writeFile(filePath, buffData, { encoding: 'base64' }, (err) => {
            if (err) reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, `${fileName}.${ext}`)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.error) reject(result.error)
                    resolve('https://telegra.ph' + result[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch((err) => reject(err))
        })
    })
}

module.exports = {
    fetchJson,
    fetchText,
    fetchBuffer,
    uploadImages
}
