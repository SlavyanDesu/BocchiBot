const { decryptMedia, Client } = require('@open-wa/wa-automate')
const fs = require('fs-extra')
const config = require('../config.json')
const Nekos = require('nekos.life')
const neko = new Nekos()
const os = require('os')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const api = new API()
const sagiri = require('sagiri')
const saus = sagiri(config.nao, { results: 5 })
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')

const { msgFilter, color, processTime, isUrl } = require('../tools')
const { nsfw, lirik, shortener, wiki, kbbi, bmkg, weeabo, medsos, nekopoi, downloader } = require('../lib')
const { uploadImages } = require('../tools/fetcher')
const { ind, eng } = require('./text/lang/')
const _nsfw = JSON.parse(fs.readFileSync('./ingfo/nsfw.json'))
const _ban = JSON.parse(fs.readFileSync('./ingfo/banned.json'))
const _premium = JSON.parse(fs.readFileSync('./ingfo/premium.json'))
const _biodata = JSON.parse(fs.readFileSync('./ingfo/biodata.json'))
const _registered = JSON.parse(fs.readFileSync('./ingfo/registered.json'))

module.exports = msgHandler = async (client = new Client(), message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const botNumber = await client.getHostNumber() + '@c.us'
        const blockNumber = await client.getBlockedIds()
        const ownerNumber = config.ownerBot
        const isBlocked = blockNumber.includes(sender.id)
        const isOwner = sender.id === ownerNumber
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = groupAdmins.includes(sender.id) || false
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isNsfw = isGroupMsg ? _nsfw.includes(chat.id) : false
        const isBanned = _ban.includes(sender.id)
        const isPremium = _premium.includes(sender.id)
        const isRegistered = _registered.includes(sender.id)

        const prefix  = config.prefix
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        const uaOverride = config.uaOverride
        const q = args.join(' ')
        const url = args.length !== 0 ? args[0] : ''
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'

        // Ignore non-cmd
        if (!isCmd) return
  
        // Ignore private chat (for development)
        // if (isCmd && !isGroupMsg) return client.sendText(from, 'I\'m not ready for public yet! So you wouldn\'t get any response from me.\n\nAlso, *DO NOT* call me. You will *GET BLOCKED* if you did so.\n\nMy master: wa.me/6281294958473')

        // Ignore banned and blocked users
        if (isCmd && (isBanned || isBlocked) && !isGroupMsg) return console.log(color('[BAN]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && (isBanned || isBlocked) && isGroupMsg) return console.log(color('[BAN]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Anti-spam
        if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Log
        if (isCmd && !isGroupMsg) console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && isGroupMsg) console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Anti-spam
        msgFilter.addFilter(from)

        switch (command) {
            // Register
            case 'register':
                if (isRegistered) return await client.reply(from, ind.registeredAlready(), id)
                const dataDiri = q.split('|').join('-')
                if (!dataDiri) return await client.reply(from, ind.wrongFormat(), id)
                _registered.push(sender.id)
                _biodata.push(dataDiri)
                fs.writeFileSync('./ingfo/registered.json', JSON.stringify(_registered))
                fs.writeFileSync('./ingfo/biodata.json', JSON.stringify(_biodata))
                await client.reply(from, ind.registered(), id)
            break

            // Downloader
            case 'facebook':
            case 'fb':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isUrl(url) && !url.includes('facebook.com')) return await client.reply(from, ind.wrongFormat(), id)
                await client.reply(from, ind.wait(), id)
                downloader.facebook(url)
                    .then(async ({ status, title, link, pesan }) => {
                        if (status === 'error') {
                            return await client.reply(from, pesan, id)
                        } else {
                            await client.sendFileFromUrl(from, link, `${title}.mp4`, title, id)
                                .then(() => console.log(from, 'Success sending Facebook video!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, err, id)
                    })
            break
            case 'ytmp3':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isUrl(url) && !url.includes('youtu.be')) return await client.reply(from, ind.wrongFormat(), id)
                await client.reply(from, ind.wait(), id)
                downloader.ytmp3(url)
                    .then(async ({ result, status, url }) => {
                        if (status !== 200) {
                            return await client.sendFileFromUrl(from, url, 'error.jpg', 'Error!', id)
                        } else if (Number(result.filesize.split(' MB')[0]) > 50.00) {
                            return await client.reply(from, ind.ytLimit(), id)
                        } else {
                            await client.sendFileFromUrl(from, result.thumb, `${result.title}.jpg`, ind.ytFound(result), id)
                            await client.sendFileFromUrl(from, result.url, `${result.title}.mp3`, '', id)
                                .then(() => console.log('Success sending YouTube audio!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, err, id)
                    })
            break
            case 'ytmp4':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isUrl(url) && !url.includes('youtu.be')) return await client.reply(from, ind.wrongFormat(), id)
                await client.reply(from, ind.wait(), id)
                downloader.ytmp4(url)
                    .then(async ({ result, status, url }) => {
                        if (status !== 200) {
                            return await client.sendFileFromUrl(from, url, 'error.jpg', 'Error!', id)
                        } else if (Number(result.filesize.split(' MB')[0]) > 50.00) {
                            return await client.reply(from, ind.ytLimit(), id)
                        } else {
                            await client.sendFileFromUrl(from, result.thumb, `${result.title}.jpg`, ind.ytFound(result), id)
                            await client.sendFileFromUrl(from, result.url, `${result.title}.mp4`, '', id)
                                .then(() => console.log('Success sending YouTube video!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, err, id)
                    })
            break

            // Misc
            case 'say':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!q) return await client.reply(from, ind.wrongFormat(), id)
                await client.sendText(from, q)
            break
            case 'lyric':
            case 'lirik':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!q) return await client.reply(from, ind.wrongFormat(), id)
                await client.reply(from, ind.wait(), id)
                lirik(q)
                    .then(async ({ status, result, pesan }) => {
                        if (status === 'error') {
                            return await client.reply(from, pesan, id)
                        } else {
                            await client.reply(from, result, id)
                                .then(() => console.log('Success sending lyric!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, err, id)
                    })
            break
            case 'shortlink':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isUrl(url)) return await client.reply(from, ind.wrongFormat(), id)
                const urlShort = await shortener(url)
                await client.reply(from, ind.wait(), id)
                await client.reply(from, urlShort, id)
            break
            case 'wikipedia':
            case 'wiki':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!q) return await client.reply(from, ind.wrongFormat(), id)
                await client.reply(from, ind.wait(), id)
                wiki(q)
                    .then(async ({ result, status }) => {
                        if (status !== 200) {
                            return await client.reply(from, 'Not found.', id)
                        } else {
                            await client.reply(from, result, id)
                                .then(() => console.log('Success sending Wiki!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, err, id)
                    })
            break
            case 'kbbi':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!q) return await client.reply(from, ind.wrongFormat(), id)
                await client.reply(from, ind.wait(), id)
                kbbi(q)
                    .then(async ({ status, result, pesan }) => {
                        if (status === 'error') {
                            await client.reply(from, pesan, id)
                        } else {
                            await client.reply(from, result, id)
                                .then(() =>  console.log('Success sending definition!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, err, id)
                    })
            break
            case 'gempa':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                await client.reply(from, ind.wait(), id)
                bmkg()
                    .then(async ({ kedalaman, koordinat, lokasi, magnitude, map, potensi, waktu }) => {
                        let teksInfo = `${lokasi}\n\nKoordinat: ${koordinat}\nKedalaman: ${kedalaman}\nMagnitudo: ${magnitude} SR\nPotensi: ${potensi}\n\n${waktu}`
                        await client.sendFileFromUrl(from, map, 'gempa.jpg', teksInfo, id)
                            .then(() => console.log('Success sending info!'))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, err, id)
                    })
            break
            case 'igstalk':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!q) return await client.reply(from, ind.wrongFormat(), id)
                await client.reply(from, ind.wait(), id)
                medsos.igStalk(q)
                    .then(async ({ Biodata, Jumlah_Followers, Jumlah_Following, Jumlah_Post, Profile_pic, Username, status, error }) => {
                        if (status !== 200) {
                            return await client.reply(from, error, id)
                        } else {
                            let igCaption = `${Biodata.split('\nby: ArugaZ').join('')}\n\nUsername: ${Username}\nFollowers: ${Jumlah_Followers}\nFollowing: ${Jumlah_Following}\nPost: ${Jumlah_Post}`
                            await client.sendFileFromUrl(from, Profile_pic, `${Username}.jpg`, igCaption, null, null, true)
                                .then(() => console.log('Success sending Instagram info!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, err, id)
                    })
            break
            
            // Bot
            case 'menu':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                await client.sendText(from, ind.textMenu(pushname))
            break
            case 'rules':
            case 'rule':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                await client.sendText(from, ind.textRules())
            break
            case 'nsfw':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await client.reply(from, ind.adminOnly(), id)
                const ar = args.map((v) => v.toLowerCase())
                if (ar[0] === 'enable') {
                    _nsfw.push(chat.id)
                    fs.writeFileSync('./ingfo/nsfw.json', JSON.stringify(_nsfw))
                    await client.reply(from, ind.nsfwOn(), id)
                } else if (ar[0] === 'disable') {
                    _nsfw.splice(chat.id, 1)
                    fs.writeFileSync('./ingfo/nsfw.json', JSON.stringify(_nsfw))
                    await client.reply(from, ind.nsfwOff(), id)
                } else {
                    await client.reply(from, ind.wrongFormat(), id)
                }
            break
            case 'menuowner':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isOwner) return await client.reply(from, ind.ownerOnly(), id)
                await client.sendText(from, ind.textOwner())
            break
            case 'usage':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                await client.sendText(from, `RAM usage: *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB* / *${Math.round(os.totalmem / 1024 / 1024)} MB*\nCPU: *${os.cpus()[0].model}*`)
            break
            case 'listblock':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                let block = ind.listBlock(blockNumber)
                for (let i of blockNumber) {
                    block += `@${i.replace(/@c.us/g, '')}\n`
                }
                await client.sendTextWithMentions(from, block)
            break
            case 'ping':
            case 'p':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                await client.sendText(from, `Pong!\nSpeed: ${processTime(t, moment())} secs`)
            break
            case 'delete':
            case 'del':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!quotedMsg) return await client.reply(from, ind.wrongFormat(), id)
                if (!quotedMsgObj.fromMe) return await client.reply(from, ind.wrongFormat(), id)
                await client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
            case 'moderation':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await client.reply(from, ind.groupOnly(), id)
                await client.sendText(from, ind.textModeration())
            break

            // Weeb zone
            case 'neko':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                await client.reply(from, ind.wait(), id)
                console.log('Getting neko image...')
                await client.sendFileFromUrl(from, (await neko.sfw.neko()).url, 'neko.jpg', '', null, null, true)
                    .then(() => console.log('Success sending neko image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, err, id)
                    })
            break 
            case 'wallpaper':
            case 'wp':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                await client.reply(from, ind.wait(), id)
                console.log('Getting wallpaper image...')
                await client.sendFileFromUrl(from, (await neko.sfw.wallpaper()).url, 'wallpaper.jpg', '', null, null, true)
                    .then(() => console.log('Success sending wallpaper image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, err)
                    })
            break
            case 'kemono':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                await client.reply(from, ind.wait(), id)
                console.log('Getting kemonomimi image...')
                await client.sendFileFromUrl(from, (await neko.sfw.kemonomimi()).url, 'kemono.jpg', '', null, null, true)
                    .then(() => console.log('Success sending kemonomimi image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, `Error;\n${err}`)
                    })
            break
            case 'kusonime':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!q) return await client.reply(from, ind.wrongFormat(), id)
                await client.reply(from, ind.wait(), id)
                weeabo.anime(q)
                    .then(async ({ info, link_dl, sinopsis, thumb, title, error, status }) => {
                        if (status === false) {
                            return await client.reply(from, error, id)
                        } else {
                            let animek = `${title}\n\n${info}\n\nSinopsis: ${sinopsis}\n\nLink download:\n${link_dl}`
                            await client.sendFileFromUrl(from, thumb, 'animek.jpg', animek, null, null, true)
                                .then(() => console.log('Success sending anime info!'))
                        }
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, err, id)
                    })
            break
            case 'komiku':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!q) return await client.reply(from, ind.wrongFormat(), id)
                await client.reply(from, ind.wait(), id)
                weeabo.manga(q)
                    .then(async ({ genre, info, link_dl, sinopsis, thumb }) => {
                        let mangak = `${info}${genre}\nSinopsis: ${sinopsis}\nLink download:\n${link_dl}`
                        await client.sendFileFromUrl(from, thumb, 'mangak.jpg', mangak, null, null, true)
                            .then(() => console.log('Success sending manga info!'))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, err, id)
                    })
            break
            case 'wait':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    await client.reply(from, ind.wait(), id)
                    console.log('Searching for anime source...')
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    const fetch = require('node-fetch')
                    fetch('https://trace.moe/api/search', {
                        method: 'POST',
                        body: JSON.stringify({ image: imageBase64 }),
                        headers: { "Content-Type": "application/json" }
                    })
                        .then((response) => response.json())
                        .then(async (result) => {
                            if (result.docs && result.docs.length <= 0) {
                                await client.reply(from, 'Not found! :(', id)
                            }
                            const { title, title_romaji, title_english, episode, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
                            let teks = ''
                            if (similarity < 0.92) {
                                teks = 'Low similarity. 🤔\n\n'
                            }
                            teks += `*Title*: ${title}\n*Romaji*: ${title_romaji}\n*English*: ${title_english}\n*Episode*: ${episode}\n*Similarity*: ${(similarity * 100).toFixed(1)}%`
                            let vid = `https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`
                            await client.sendFileFromUrl(from, vid, `${title_romaji}.mp4`, teks, id)
                                .then(() => console.log('Success sending anime source!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await client.reply(from, err, id)
                        })
                } else {
                    await client.reply(from, ind.wrongFormat(), id)
                }
            break
            case 'source':
            case 'sauce':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    await client.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageLink = await uploadImages(mediaData)
                    console.log('Searching for source...')
                    const results = await saus(imageLink)
                    for (let i = 0; i < results.length; i++) {
                        let teks = ''
                        if (results[i].similarity < 80.00) {
                            teks = 'Low similarity. 🤔\n\n'
                        }
                        teks += `*Link*: ${results[i].url}\n*Site*: ${results[i].site}\n*Author name*: ${results[i].authorName}\n*Author link*: ${results[i].authorUrl}\n*Similarity*: ${results[i].similarity}%`
                        await client.sendLinkWithAutoPreview(from, results[i].url, teks)
                            .then(() => console.log('Source found!'))
                    }
                } else {
                    await client.reply(from, ind.wrongFormat(), id)
                }
            break

            // Sticker
            case 'sticker':
            case 'stiker':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (isMedia && type === 'image' || isQuotedImage) {
                    await client.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await client.sendImageAsSticker(from, imageBase64)
                        .then(async () => {
                            await client.sendText(from, ind.ok())
                            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await client.reply(from, err)
                        })
                } else {
                    await client.reply(from, ind.wrongFormat(), id)
                }
            break

            // NSFW
            case 'nsfwmenu':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isNsfw) return await client.reply(from, ind.notNsfw(), id)
                await client.sendText(from, ind.textNsfw())
            break
            case 'multilewds':
            case 'multilewd':
            case 'mlewds':
            case 'mlewd':
                // Premium feature, contact the owner.
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await client.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return await client.reply(from, ind.notPremium(), id)
                    await client.reply(from, ind.botNotPremium(), id)
                } else {
                    if (!isNsfw) return await client.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return await client.reply(from, ind.notPremium(), id)
                    await client.reply(from, ind.botNotPremium(), id)
                }
            break
            case 'lewds':
            case 'lewd':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await client.reply(from, ind.notNsfw(), id)
                    await client.reply(from, ind.wait(), id)
                    nsfw.randomLewd()
                        .then(async ({ url }) => {
                            await client.sendFileFromUrl(from, url, 'lewd.jpg', '', null, null, true)
                                .then(() => console.log('Success sending lewd!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await client.reply(from, err, id)
                        })
                } else {
                    await client.reply(from, ind.wait(), id)
                    nsfw.randomLewd()
                        .then(async ({ url }) => {
                            await client.sendFileFromUrl(from, url, 'lewd.jpg', '', null, null, true)
                                .then(() => console.log('Success sending lewd!'))
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await client.reply(from, err, id)
                        })
                }
            break
            case 'nh':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await client.reply(from, ind.notNsfw(), id)
                    const kode = args[0]
                    if (!kode) return await client.reply(from, ind.wrongFormat(), id)
                    await client.reply(from, ind.wait(), id)
                    console.log(`Searching nHentai for ${kode}...`)
                    const validate = await nhentai.exists(kode)
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(kode)
                                .then((book) => {
                                     return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(kode)
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = await details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await client.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                                .then(() => console.log('Success sending nHentai info!'))
                        } catch (err) {
                            console.error(err)
                            await client.reply(from, err, id)
                        }
                    } else {
                        await client.reply(from, ind.nhFalse(), id)
                    }
                } else {
                    await client.reply(from, ind.wait(), id)
                    const kode = args[0]
                    const validate = await nhentai.exists(kode)
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(kode)
                                .then((book) => {
                                    return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(kode)
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = await details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await client.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                        } catch (err) {
                            console.error(err)
                            await client.reply(from, err, id)
                        }
                    } else {
                        await client.reply(from, ind.nhFalse(), id)
                    }
                }
            break
            case 'nhdl':
                // Premium feature, contact the owner.
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await client.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return await client.reply(from, ind.notPremium(), id)
                    await client.reply(from, ind.botNotPremium(), id)
                } else {
                    if (!isNsfw) return await client.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return await client.reply(from, ind.notPremium(), id)
                    await client.reply(from, ind.botNotPremium(), id)
                }
            break
            case 'xnxx':
                // Premium feature, contact the owner.
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await client.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return await client.reply(from, ind.notPremium(), id)
                    await client.reply(from, ind.botNotPremium(), id)
                } else {
                    if (!isNsfw) return await client.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return await client.reply(from, ind.notPremium(), id)
                    await client.reply(from, ind.botNotPremium(), id)
                }
            break
            case 'nekopoi': // Thanks to ArugaZ
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await client.reply(from, ind.notNsfw(), id)
                    await client.reply(from, ind.wait(), id)
                    nekopoi.getLatest()
                        .then((result) => {
                            nekopoi.getVideo(result.link)
                                .then(async (res) => {
                                    let heheq = '\n'
                                    for (let i of res.links) {
                                        heheq += `${i}\n`
                                    }
                                    await client.sendText(from, `Title: ${res.title}\n\nLink:${heheq}`)
                                })
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await client.reply(from, err, id)
                        })
                } else {
                    await client.reply(from, ind.wait(), id)
                    nekopoi.getLatest()
                        .then((result) => {
                            nekopoi.getVideo(result.link)
                                .then(async (res) => {
                                    let heheq = '\n'
                                    for (let i of res.links) {
                                        heheq += `${i}\n`
                                    }
                                    await client.sendText(from, `Title: ${res.title}\n\nLink:${heheq}`)
                                })
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await client.reply(from, err, id)
                        })
                }
            break

            // Moderation command
            case 'add':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await client.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await client.reply(from, ind.botNotAdmin(), id)
                if (args.length !== 1) return await client.reply(from, ind.wrongFormat(), id)
                try {
                    await client.addParticipant(from, `${args[0]}@c.us`)
                    await client.sendText(from, '🎉 Welcome! 🎉')
                } catch (err) {
                    console.error(err)
                    await client.reply(from, err, id)
                }
            break
            case 'kick':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await client.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await client.reply(from, ind.botNotAdmin(), id)
                if (mentionedJidList.length === 0) return await client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await client.reply(from, ind.wrongFormat(), id)
                await client.sendTextWithMentions(from, `Good bye~\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
                for (let i of mentionedJidList) {
                    if (groupAdmins.includes(i)) return await client.sendText(from, ind.wrongFormat())
                    await client.removeParticipant(groupId, i)
                }
            break
            case 'promote':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await client.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await client.reply(from, ind.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return await client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await client.reply(from, ind.wrongFormat(), id)
                if (groupAdmins.includes(mentionedJidList[0])) return await client.reply(from, ind.adminAlready(), id)
                await client.promoteParticipant(groupId, mentionedJidList[0])
                await client.reply(from, ind.ok(), id)
            break
            case 'demote':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await client.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return await client.reply(from, ind.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return await client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await client.reply(from, ind.wrongFormat(), id)
                if (!groupAdmins.includes(mentionedJidList[0])) return await client.reply(from, ind.notAdmin(), id)
                await client.demoteParticipant(groupId, mentionedJidList[0])
                await client.reply(from, ind.ok(), id)
            break
            case 'leave':
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await client.reply(from, ind.adminOnly(), id)
                await client.sendText(from, 'Sayounara~ 👋')
                    .then(async () => await client.leaveGroup(groupId))
            break
            case 'everyone': // Thanks to ArugaZ
                if (!isRegistered) return await client.reply(from, ind.notRegistered(), id)
                if (!isGroupMsg) return await client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return await client.reply(from, ind.adminOnly(), id)
                const groupMem = await client.getGroupMembers(groupId)
                let txt = '╔══✪〘 Mention All 〙✪══\n'
                for (let i = 0; i < groupMem.length; i++) {
                    txt += '╠➥'
                    txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
                }
                txt += '╚═〘 *E L A I N A  B O T* 〙'
                await client.sendTextWithMentions(from, txt)
            break

            // Owner command
            case 'bc':
                if (!isOwner) return await client.reply(from, ind.ownerOnly(), id)
                if (!q) return await client.reply(from, ind.emptyMess(), id)
                const chats = await client.getAllChatIds()
                for (let bcs of chats) {
                    let cvk = await client.getChatById(bcs)
                    if (!cvk.isReadOnly) await client.sendText(bcs, `${q}\n\n- Slavyan (Kal)\n_Broadcasted message_`)
                }
                await client.reply(from, ind.doneOwner(), id)
            break
            case 'clearall':
                if (!isOwner) return await client.reply(from, ind.ownerOnly(), id)
                const allChats = await client.getAllChats()
                for (let delChats of allChats) {
                    await client.deleteChat(delChats.id)
                }
                await client.reply(from, ind.doneOwner(), id)
            break
            case 'leaveall':
                if (!isOwner) return await client.reply(from, ind.ownerOnly(), id)
                if (!q) return await client.reply(from, ind.emptyMess(), id)
                const allGroup = await client.getAllGroups()
                for (let gclist of allGroup) {
                    await client.sendText(gclist.contact.id, q)
                    await client.leaveGroup(gclist.contact.id)
                   
                }
                await client.reply(from, ind.doneOwner())
            break
            case 'getses':
                if (!isOwner) return await client.reply(from, ind.ownerOnly(), id)
                const ses = await client.getSnapshot()
                await client.sendFile(from, ses, 'session.png', ind.doneOwner())
            break
            case 'ban':
                if (!isOwner) return await client.reply(from, ind.ownerOnly(), id)
                if (mentionedJidList.length === 0) return await client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await client.reply(from, ind.wrongFormat(), id)
                for (let blist of mentionedJidList) {
                    _ban.push(blist)
                    fs.writeFileSync('./ingfo/banned.json', JSON.stringify(_ban))
                }
                await client.reply(from, ind.doneOwner(), id)
            break
            case 'unban':
                if (!isOwner) return await client.reply(from, ind.ownerOnly(), id)
                if (mentionedJidList.length === 0) return await client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await client.reply(from, ind.wrongFormat(), id)
                let benet = _ban.indexOf(mentionedJidList[0])
                _ban.splice(benet, 1)
                fs.writeFileSync('./ingfo/banned.json', JSON.stringify(_ban))
                await client.reply(from, ind.doneOwner(), id)
            break
            case 'eval':
            case 'ev':
                if (!isOwner) return await client.reply(from, ind.ownerOnly(), id)
                if (!q) return await client.reply(from, ind.wrongFormat(), id)
                try {
                    let evaled = await eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await client.sendText(from, evaled)
                } catch (err) {
                    await client.reply(from, err, id)
                }
            break
            case 'shutdown':
                if (!isOwner) return await client.reply(from, ind.ownerOnly(), id)
                await client.sendText(from, 'Otsukaresama deshita~ 👋')
                    .then(async () => await client.kill())
            break
            case 'pradd':
                if (!isOwner) return await client.reply(from, ind.ownerOnly(), id)
                if (mentionedJidList.length === 0) return await client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await client.reply(from, ind.wrongFormat(), id)
                for (let premi of mentionedJidList) {
                    _premium.push(premi)
                    fs.writeFileSync('./ingfo/premium.json', JSON.stringify(_premium))
                }
                await client.reply(from, ind.doneOwner(), id)
            break
            case 'prdel':
                if (!isOwner) return await client.reply(from, ind.ownerOnly(), id)
                if (mentionedJidList.length === 0) return await client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await client.reply(from, ind.wrongFormat(), id)
                let predel = _premium.indexOf(mentionedJidList[0])
                _premium.splice(predel, 1)
                fs.writeFileSync('./ingfo/premium.json', JSON.stringify(_premium))
                await client.reply(from, ind.doneOwner(), id)
            break
            default:
                console.log(color('[ERROR]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'Unregistered command from', color(pushname))
                await client.reply(from, ind.cmdNotFound(), id)
            break
        }
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err)
    }
}
