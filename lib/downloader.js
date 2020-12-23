const { fetchJson } = require('../tools/fetcher')
const config = require('../config.json')
const { promisify } = require('util')
const { instagram } = require('video-url-link')

const igGetInfo = promisify(instagram.getInfo)

const tik = async (url) => new Promise(async (resolve, reject) => {
    const api = 'https://api.vhtear.com/tiktokdl?link='+url+'&apikey='+ config.vhtear
    axios.get(api).then(async(res) => {
        const st = res.data.result
        if(st === undefined){
            resolve(`Link tidak valid, atau mungkin akun private`)
        }else{
            resolve(st)
        }
    }).catch(err => {
        console.log(err)
        resolve(`Server error, atau akun private`)
    })
})

const insta = (url) => new Promise((resolve, reject) => {
    console.log('Get metadata from =>', url)
    const uri = url.replace(/\?.*$/g, '')
    igGetInfo(uri, {})
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})

 /**
  * Get Facebook media from URL.
  * @param {String} url
  */
const facebook = (url) => new Promise((resolve, reject) => {
    console.log(`Getting Facebook video from ${url}`)
    fetchJson('https://api.i-tech.id/dl/fb?key=' + config.token + '&link=' + url)
        .then((result) => resolve(result))
        .catch((err) => {
            reject(err)
        })
})

/**
 * Get media from YouTube.
 * @param {String} url
 */
const ytdl = (url) => new Promise((resolve, reject) => {
    console.log(`Getting YouTube media from ${url}`)
    fetchJson('https://api.i-tech.id/dl/yt?key=' + config.token + '&link=' + url)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get music from Joox.
 * @param {String} judul 
 */
const joox = (judul) => new Promise((resolve, reject) => {
    console.log(`Getting Joox music for ${judul}...`)
    fetchJson('https://api.vhtear.com/music?query=' + judul + '&apikey=' + config.vhtear)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    facebook,
    ytdl,
    insta,
    tik,
    joox
}
