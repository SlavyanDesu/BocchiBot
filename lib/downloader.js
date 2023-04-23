const { twitter } = require('video-url-link')
const ytdl = require('ytdl-core')
const fs = require('fs-extra')
const { createSerial } = require('../tools/index.js')

/**
 * @typedef TwitterData
 * @property {string} full_text
 * @property {object[]} variants
 */

/**
 * Twitter video downloader.
 * @param {string} url
 * @returns {Promise<TwitterData>}
 */
const tweet = (url) => new Promise((resolve, reject) => {
    twitter.getInfo(url, {}, (error, info) => {
        if (error) {
            reject(error)
        } else {
            resolve(info)
        }
    })
})

/**
 * @typedef YoutubeData
 * @property {string} title
 * @property {string} path
 */

/**
 * YouTube video downloader.
 * @param {string} url
 * @param {number} sender
 * @returns {Promise<YoutubeData>} video path
 */
const yt = (url, sender) => new Promise((resolve, reject) => {
    if (ytdl.validateURL(url)) {
        ytdl.getBasicInfo(url)
            .then((metadata) => {
                const output = `temp/${sender}_${createSerial(5)}.mp4`
                ytdl(url)
                    .pipe(fs.createWriteStream(output))
                    .on('finish', () => {
                        const obj = {
                            title: metadata.videoDetails.title,
                            path: output
                        }
                        resolve(obj)
                    })
                    .on('error', (err) => {
                        reject(err)
                    })
            })
    } else {
        reject('Not a valid URL.')
    }
})

module.exports = {
    tweet,
    yt
}
