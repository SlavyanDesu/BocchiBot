const fs = require('fs-extra')
const FormData = require('form-data')
const FileType = require('file-type')
const fetch = require('node-fetch')

/**
 * Fetch JSON from URL.
 * @param {string} url
 * @param {object} [options]
 * @returns {Promise<object>}
 */
const fetchJson = (url, options) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url, options)
            const json = await response.json()
            return resolve(json)
        } catch (err) {
            return reject(err)
        }
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
        const { fromBuffer } = FileType
        const type = await fromBuffer(buffData)
        const filePath = `temp/${fileName}.${type.ext}`
        fs.writeFile(filePath, buffData, { encoding: 'base64' }, (err) => {
            if (err) reject(err)
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, `${fileName}.${type.ext}`)
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
    uploadImages
}