const { decryptMedia, Client } = require('@open-wa/wa-automate')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')
const fs = require('fs-extra')
const Nekos = require('nekos.life')
const neko = new Nekos()
const os = require('os')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const api = new API()

const { msgFilter, color, processTime, isUrl } = require('../tools')
const { nsfw, lirik, shortener, qr, wiki, kbbi, bmkg, weeabo } = require('../lib')
const config = require('../config.json')
const { ind, eng } = require('./text/lang/')
const _nsfw = JSON.parse(fs.readFileSync('./ingfo/nsfw.json'))
const _ban = JSON.parse(fs.readFileSync('./ingfo/banned.json'))
const _premium = JSON.parse(fs.readFileSync('./ingfo/premium.json'))

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

        // Ignore blocked users
        if (isBlocked || isBanned) return

        // Anti-spam
        if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Log
        if (isCmd && !isGroupMsg) console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && isGroupMsg) console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Anti-spam
        msgFilter.addFilter(from)

        switch (command) {
            // Misc
            case 'say':
                if (!q) return client.reply(from, ind.emptyMess(), id)
                client.sendText(from, q)
            break
            case 'lyric':
            case 'lirik':
                if (!q) return client.reply(from, ind.wrongFormat(), id)
                client.reply(from, ind.wait(), id)
                lirik(q)
                    .then(({ status, result, pesan }) => {
                        if (status === 'error') {
                            return client.reply(from, pesan, id)
                        } else {
                            client.sendText(from, result)
                                .then(() => console.log('Success sending lyric!'))
                        }
                    })
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err, id)
                    })
            break
            case 'qr':
                if (!q) return client.reply(from, ind.wrongFormat(), id)
                client.reply(from, ind.wait(), id)
                qr(q)
                    .then(({ status, result, pesan }) => {
                        if (status === 'error') {
                            return client.reply(from, pesan, id)
                        } else {
                            client.sendFileFromUrl(from, result, 'qr.jpg', '', null, null, true)
                                .then(() => console.log('Success sending QR!'))
                        }
                    })
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err, id)
                    })
            break
            case 'shortlink':
                if (!isUrl) return client.reply(from, ind.wrongFormat(), id)
                client.reply(from, ind.wait(), id)
                shortener(url)
                    .then(({ status, result, pesan }) => {
                        if (status === 'error') {
                            return client.reply(from, pesan, id)
                        } else {
                            client.sendText(from, `Shortened link: ${result}`)
                                .then(() => console.log('Success sending shortlink!'))
                        }
                    })
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err, id)
                    })
            break
            case 'wikipedia':
            case 'wiki':
                if (!q) return client.reply(from, ind.wrongFormat(), id)
                client.reply(from, ind.wait(), id)
                wiki(q)
                    .then(({ result }) => {
                        client.reply(from, result, id)
                            .then(() => console.log('Success sending Wikipedia!'))
                    })
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err, id)
                    })
            break
            case 'kbbi':
                if (!q) return client.reply(from, ind.wrongFormat(), id)
                client.reply(from, ind.wait(), id)
                kbbi(q)
                    .then(({ status, result, pesan }) => {
                        if (status === 'error') {
                            client.reply(from, pesan, id)
                        } else {
                            client.reply(from, result, id)
                                .then(() =>  console.log('Success sending definition!'))
                        }
                    })
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err, id)
                    })
            break
            case 'gempa':
                client.reply(from, ind.wait(), id)
                bmkg()
                    .then(({ kedalaman, koordinat, lokasi, magnitude, map, potensi, waktu }) => {
                        let teksInfo = `${lokasi}\n\nKoordinat: ${koordinat}\nKedalaman: ${kedalaman}\nMagnitudo: ${magnitude}\nPotensi: ${potensi}\n\n${waktu}`
                        client.sendFileFromUrl(from, map, 'gempa.jpg', teksInfo, null, null, true)
                            .then(() => console.log('Success sending info!'))
                    })
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err, id)
                    })
            break
            
            // Bot
            case 'menu':
                client.sendText(from, ind.textMenu(pushname))
            break
            case 'rules':
            case 'rule':
                client.sendText(from, ind.textRules())
            break
            case 'nsfw':
                if (!isGroupMsg) return client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return client.reply(from, ind.adminOnly(), id)
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                if (args[0] === 'enable') {
                    _nsfw.push(chat.id)
                    fs.writeFileSync('./ingfo/nsfw.json', JSON.stringify(_nsfw))
                    client.reply(from, ind.nsfwOn(), id)
                } else if (args[0] === 'disable') {
                    _nsfw.splice(chat.id, 1)
                    fs.writeFileSync('./ingfo/nsfw.json', JSON.stringify(_nsfw))
                    client.reply(from, ind.nsfwOff(), id)
                } else {
                    client.reply(from, ind.wrongFormat(), id)
                }
            break
            case 'menuowner':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                client.sendText(from, ind.textOwner())
            break
            case 'usage':
                client.sendText(from, `RAM usage: *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB* / *${Math.round(os.totalmem / 1024 / 1024)} MB*\nCPU: *${os.cpus()[0].model}*`)
            break
            case 'listblock':
                let block = ind.listBlock(blockNumber)
                for (let i of blockNumber) {
                    block += `@${i.replace(/@c.us/g, '')}\n`
                }
                client.sendTextWithMentions(from, block)
            break
            case 'ping':
            case 'p':
                await client.sendText(from, `Pong!\nSpeed: ${processTime(t, moment())} s`)
            break
            case 'delete':
            case 'del':
                if (!quotedMsg) return client.reply(from, ind.wrongFormat(), id)
                if (!quotedMsgObj.fromMe) return client.reply(from, ind.wrongFormat(), id)
                await client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break

            // Weeb zone
            case 'neko':
                client.sendFileFromUrl(from, (await neko.sfw.wallpaper()).url, 'neko.jpg', '', null, null, true)
                    .then(() => console.log('Success sending neko image!'))
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err, id)
                    })
            break 
            case 'wallpaper':
            case 'wp':
                client.sendFileFromUrl(from, (await neko.sfw.wallpaper()).url, 'wallpaper.jpg', '', null, null, true)
                    .then(() => console.log('Success sending wallpaper image!'))
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err)
                    })
            break
            case 'kemono':
                client.sendFileFromUrl(from, (await neko.sfw.kemonomimi()).url, 'kemono.jpg', '', null, null, true)
                    .then(() => console.log('Success sending kemonomimi image!'))
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, `Error;\n${err}`)
                    })
            break
            case 'animeinfo':
                if (!q) return client.reply(from, ind.wrongFormat(), id)
                client.reply(from, ind.wait(), id)
                weeabo.anime(q)
                    .then(({ info, link_dl, sinopsis, thumb, title }) => {
                        let animek = `${title}\n\n${info}\n\nSinopsis: ${sinopsis}\n\nLink download: ${link_dl}`
                        client.sendFileFromUrl(from, thumb, 'animek.jpg', animek, null, null, true)
                            .then(() => console.log('Success sending anime info!'))
                    })
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err, id)
                    })
            break
            case 'mangainfo':
                if (!q) return client.reply(from, ind.wrongFormat(), id)
                client.reply(from, ind.wait(), id)
                weeabo.manga(q)
                    .then(({ genre, info, link_dl, sinopsis, thumb }) => {
                        let mangak = `${info}\n${genre}\nSinopsis: ${sinopsis}\nLink download: ${link_dl}`
                        client.sendFileFromUrl(from, thumb, 'mangak.jpg', mangak, null, null, true)
                            .then(() => console.log('Success sending manga info!'))
                    })
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err, id)
                    })
            break

            // Sticker
            case 'sticker':
            case 'stiker':
                if (isMedia || isQuotedImage) {
                    client.reply(from, ind.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await client.sendImageAsSticker(from, imageBase64)
                        .then(() => {
                            client.sendText(from, ind.ok())
                            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                        })
                        .catch((err) => {
                            console.error(err)
                            client.reply(from, err)
                        })
                } else {
                    client.reply(from, ind.wrongFormat(), id)
                }
            break

            // NSFW
            case 'nsfwmenu':
                if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                client.sendText(from, ind.textNsfw())
            break
            case 'multilewds':
            case 'multilewd':
            case 'mlewds':
            case 'mlewd':
                // Premium feature, contact the owner.
                if (!isPremium) return client.reply(from, ind.notPremium(), id)
            break
            case 'lewds':
            case 'lewd':
                if (isGroupMsg) {
                    if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                    client.reply(from, ind.wait(), id)
                    nsfw.randomLewd(1)
                        .then(({ memes }) => {
                            client.sendFileFromUrl(from, memes.url, 'lewd.jpg', '', null, null, true)
                                .then(() => console.log('Success sending lewd!'))
                                .catch((err) => console.error(err))
                        })
                        .catch((err) => {
                            console.error(err)
                            client.reply(from, err, id)
                        })
                } else {
                    if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                    client.reply(from, ind.wait(), id)
                    nsfw.randomLewd(1)
                        .then(({ memes }) => {
                            client.sendFileFromUrl(from, memes.url, 'lewd.jpg', '', null, null, true)
                                .then(() => console.log('Success sending lewd!'))
                                .catch((err) => console.error(err))
                        })
                        .catch((err) => {
                            console.error(err)
                            client.reply(from, err, id)
                        })
                }
            break
            case 'nh':
                if (isGroupMsg) {
                    if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                    client.reply(from, ind.wait(), id)
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
                            const { tags, artists, groups, languages, categories } = await details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags}\n\n*Artists*: ${artists}\n\n*Groups*: ${groups}\n\n*Languages*: ${languages}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            client.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
                                .then(() => console.log('Success sending nHentai info!'))
                        } catch (err) {
                            console.error(err)
                            client.reply(from, err, id)
                        }
                    } else {
                        client.reply(from, ind.nhFalse(), id)
                    }
                } else {
                    client.reply(from, ind.wait(), id)
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
                            const { tags, artists, groups, languages, categories } = await details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags}\n\n*Artists*: ${artists}\n\n*Groups*: ${groups}\n\n*Languages*: ${languages}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            client.sendFileFromUrl(from, pic, teks, id)
                        } catch (err) {
                            console.error(err)
                            client.reply(from, err, id)
                        }
                    } else {
                        client.reply(from, ind.nhFalse(), id)
                    }
                }
            break
            case 'nhdl':
                // Premium feature, contact the owner.
                if (!isPremium) return client.reply(from, ind.notPremium(), id)
            break
            case 'xnxx':
                // Premium feature, contact the owner.
                if (!isPremium) return client.reply(from, ind.notPremium(), id)
            break

            // Owner command
            case 'bc':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                if (!q) return client.reply(from, ind.emptyMess(), id)
                const chats = await client.getAllChatIds()
                for (let bcs of chats) {
                    let cvk = await client.getChatById(bcs)
                    if (!cvk.isReadOnly) await client.sendText(bcs, `${q}\n\n- Slavyan (Kal)\n_Broadcasted message_`)
                }
                client.reply(from, ind.doneOwner(), id)
            break
            case 'clearall':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                const allChats = await client.getAllChats()
                for (let delChats of allChats) {
                    await client.deleteChat(delChats.id)
                }
                await client.reply(from, ind.doneOwner(), id)
            break
            case 'leaveall':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                if (!q) return client.reply(from, ind.emptyMess(), id)
                const allGroup = await client.getAllGroups()
                for (let gclist of allGroup) {
                    await client.sendText(gclist.contact.id, q)
                    await client.leaveGroup(gclist.contact.id)
                }
                client.reply(from, ind.doneOwner())
            break
            case 'getses':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                const ses = await client.getSnapshot()
                client.sendFile(from, ses, 'session.png', ind.doneOwner())
            break
            case 'ban':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                for (let blist of mentionedJidList) {
                    _ban.push(blist)
                    fs.writeFileSync('./ingfo/banned.json', JSON.stringify(_ban))
                }
                client.reply(from, ind.doneOwner(), id)
            break
            case 'unban':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                let benet = _ban.indexOf(mentionedJidList[0])
                _ban.splice(benet, 1)
                fs.writeFileSync('./ingfo/banned.json', JSON.stringify(_ban))
                client.reply(from, ind.doneOwner(), id)
            break
            case 'eval':
            case 'ev':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                if (!q) return client.reply(from, ind.wrongFormat(), id)
                try {
                    let evaled = eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    client.sendText(from, evaled)
                } catch (err) {
                    client.sendText(from, `Error: ${err}`)
                }
            break
            case 'shutdown':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                client.sendText(from, 'Otsukaresama deshita~ 👋')
                    .then(() => client.kill())
            break
            case 'premium':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                for (let premi of mentionedJidList) {
                    _premium.push(premi)
                    fs.writeFileSync('./ingfo/premium.json', JSON.stringify(_premium))
                }
                client.reply(from, ind.doneOwner(), id)
            break

            default:
                console.log(color('[ERROR]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'Unregistered command from', color(pushname))
                client.reply(from, ind.cmdNotFound(), id)
            break
        }
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err)
    }
}
