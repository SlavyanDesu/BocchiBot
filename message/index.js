/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
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
const { nsfw, lirik, shortener, wiki, kbbi, bmkg, weeabo, medsos, nekopoi } = require('../lib')
const config = require('../config.json')
const { ind, eng } = require('./text/lang/')
const _nsfw = JSON.parse(fs.readFileSync('./ingfo/nsfw.json'))
const _ban = JSON.parse(fs.readFileSync('./ingfo/banned.json'))
const _premium = JSON.parse(fs.readFileSync('./ingfo/premium.json'))

// eslint-disable-next-line no-undef
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
  
        // Ignore private chat
        if (!isGroupMsg) return

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
                if (!q) return client.reply(from, ind.wrongFormat(), id)
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
            case 'shortlink':
                if (!isUrl(url)) return client.reply(from, ind.wrongFormat(), id)
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
                        let teksInfo = `${lokasi}\n\nKoordinat: ${koordinat}\nKedalaman: ${kedalaman}\nMagnitudo: ${magnitude} SR\nPotensi: ${potensi}\n\n${waktu}`
                        client.sendFileFromUrl(from, map, 'gempa.jpg', teksInfo, null, null, true)
                            .then(() => console.log('Success sending info!'))
                    })
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err, id)
                    })
            break
            case 'igstalk':
                if (!q) return client.reply(from, ind.wrongFormat(), id)
                client.reply(from, ind.wait(), id)
                medsos.igstalk(q)
                    .then(({ Biodata, Jumlah_Followers, Jumlah_Following, Jumlah_Post, Profile_pic, Username, status, error }) => {
                        if (status !== 200) {
                            return client.reply(from, error, id)
                        } else {
                            let igCaption = `${Biodata.split('\nby: ArugaZ').join('')}\n\nUsername: ${Username}\nFollowers: ${Jumlah_Followers}\nFollowing: ${Jumlah_Following}\nPost: ${Jumlah_Post}`
                            client.sendFileFromUrl(from, Profile_pic, `${Username}.jpg`, igCaption, null, null, true)
                                .then(() => console.log('Success sending Instagram info!'))
                        }
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
            case 'moderation':
                if (!isGroupMsg) return client.reply(from, ind.groupOnly(), id)
                client.sendText(from, ind.textModeration())
            break

            // Weeb zone
            case 'neko':
                client.reply(from, ind.wait(), id)
                console.log('Getting neko image...')
                client.sendFileFromUrl(from, (await neko.sfw.neko()).url, 'neko.jpg', '', null, null, true)
                    .then(() => console.log('Success sending neko image!'))
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err, id)
                    })
            break 
            case 'wallpaper':
            case 'wp':
                client.reply(from, ind.wait(), id)
                console.log('Getting wallpaper image...')
                client.sendFileFromUrl(from, (await neko.sfw.wallpaper()).url, 'wallpaper.jpg', '', null, null, true)
                    .then(() => console.log('Success sending wallpaper image!'))
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err)
                    })
            break
            case 'kemono':
                client.reply(from, ind.wait(), id)
                console.log('Getting kemonomimi image...')
                client.sendFileFromUrl(from, (await neko.sfw.kemonomimi()).url, 'kemono.jpg', '', null, null, true)
                    .then(() => console.log('Success sending kemonomimi image!'))
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, `Error;\n${err}`)
                    })
            break
            case 'kusonime':
                if (!q) return client.reply(from, ind.wrongFormat(), id)
                client.reply(from, ind.wait(), id)
                weeabo.anime(q)
                    .then(({ info, link_dl, sinopsis, thumb, title, error, status }) => {
                        if (status === false) {
                            return client.reply(from, error, id)
                        } else {
                            let animek = `${title}\n\n${info}\n\nSinopsis: ${sinopsis}\n\nLink download:\n${link_dl}`
                            client.sendFileFromUrl(from, thumb, 'animek.jpg', animek, null, null, true)
                                .then(() => console.log('Success sending anime info!'))
                        }
                    })
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, err, id)
                    })
            break
            case 'komiku':
                if (!q) return client.reply(from, ind.wrongFormat(), id)
                client.reply(from, ind.wait(), id)
                weeabo.manga(q)
                    .then(({ genre, info, link_dl, sinopsis, thumb }) => {
                        let mangak = `${info}${genre}\nSinopsis: ${sinopsis}\nLink download:\n${link_dl}`
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
                if (isGroupMsg) {
                    if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return client.reply(from, ind.notPremium(), id)
                    client.reply(from, ind.botNotPremium(), id)
                } else {
                    if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return client.reply(from, ind.notPremium(), id)
                    client.reply(from, ind.botNotPremium(), id)
                }
            break
            case 'lewds':
            case 'lewd':
                if (isGroupMsg) {
                    if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                    client.reply(from, ind.wait(), id)
                    nsfw.randomLewd()
                        .then(({ url }) => {
                            client.sendFileFromUrl(from, url, 'lewd.jpg', '', null, null, true)
                                .then(() => console.log('Success sending lewd!'))
                                .catch((err) => console.error(err))
                        })
                        .catch((err) => {
                            console.error(err)
                            client.reply(from, err, id)
                        })
                } else {
                    client.reply(from, ind.wait(), id)
                    nsfw.randomLewd()
                        .then(({ url }) => {
                            client.sendFileFromUrl(from, url, 'lewd.jpg', '', null, null, true)
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
                            const { tags, artists, languages, categories } = await details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
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
                            const { tags, artists, languages, categories } = await details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            client.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
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
                if (isGroupMsg) {
                    if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return client.reply(from, ind.notPremium(), id)
                    client.reply(from, ind.botNotPremium(), id)
                } else {
                    if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return client.reply(from, ind.notPremium(), id)
                    client.reply(from, ind.botNotPremium(), id)
                }
            break
            case 'xnxx':
                // Premium feature, contact the owner.
                if (isGroupMsg) {
                    if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return client.reply(from, ind.notPremium(), id)
                    client.reply(from, ind.botNotPremium(), id)
                } else {
                    if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                    if (!isPremium) return client.reply(from, ind.notPremium(), id)
                    client.reply(from, ind.botNotPremium(), id)
                }
            break
            case 'nekopoi':
                if (isGroupMsg) {
                    if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                    client.reply(from, ind.wait(), id)
                    nekopoi.getLatest()
                        .then((result) => {
                            nekopoi.getVideo(result.link)
                                .then((res) => {
                                    let heheq = '\n'
                                    for (let i of res.links) {
                                        heheq += `${i}\n`
                                    }
                                    client.sendText(from, `Title: ${res.title}\n\nLink:${heheq}`)
                                })
                        })
                        .catch((err) => {
                            console.error(err)
                            client.reply(from, err, id)
                        })
                } else {
                    client.reply(from, ind.wait(), id)
                    nekopoi.getLatest()
                        .then((result) => {
                            nekopoi.getVideo(result.link)
                                .then((res) => {
                                    let heheq = '\n'
                                    for (let i of res.links) {
                                        heheq += `${i}\n`
                                    }
                                    client.sendText(from, `Title: ${res.title}\n\nLink:${heheq}`)
                                })
                        })
                        .catch((err) => {
                            console.error(err)
                            client.reply(from, err, id)
                        })
                }
            break

            // Moderation command
            case 'add':
                if (!isGroupMsg) return client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return client.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return client.reply(from, ind.botNotAdmin(), id)
                if (args.length !== 1) return client.reply(from, ind.wrongFormat(), id)
                try {
                    await client.addParticipant(from, `${args[0]}@c.us`)
                    await client.sendText(from, '🎉 Welcome! 🎉')
                } catch (err) {
                    console.error(err)
                    client.reply(from, err, id)
                }
            break
            case 'kick':
                if (!isGroupMsg) return client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return client.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return client.reply(from, ind.botNotAdmin(), id)
                if (mentionedJidList.length === 0) return client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return client.reply(from, ind.wrongFormat(), id)
                client.sendTextWithMentions(from, `Good bye~\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
                for (let i of mentionedJidList) {
                    if (groupAdmins.includes(i)) return client.sendText(from, ind.wrongFormat())
                    await client.removeParticipant(groupId, i)
                }
            break
            case 'promote':
                if (!isGroupMsg) return client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return client.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return client.reply(from, ind.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return client.reply(from, ind.wrongFormat(), id)
                if (groupAdmins.includes(mentionedJidList[0])) return client.reply(from, ind.adminAlready(), id)
                await client.promoteParticipant(groupId, mentionedJidList[0])
                await client.reply(from, ind.ok(), id)
            break
            case 'demote':
                if (!isGroupMsg) return client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return client.reply(from, ind.adminOnly(), id)
                if (!isBotGroupAdmins) return client.reply(from, ind.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return client.reply(from, ind.wrongFormat(), id)
                if (!groupAdmins.includes(mentionedJidList[0])) return client.reply(from, ind.notAdmin(), id)
                await client.demoteParticipant(groupId, mentionedJidList[0])
                await client.reply(from, ind.ok(), id)
            break
            case 'leave':
                if (!isGroupMsg) return client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return client.reply(from, ind.adminOnly(), id)
                client.sendText(from, 'Sayounara~ 👋')
                    .then(() => client.leaveGroup(groupId))
            break
            case 'everyone': // Thanks to ArugaZ
                if (!isGroupMsg) return client.reply(from, ind.groupOnly(), id)
                if (!isGroupAdmins) return client.reply(from, ind.adminOnly(), id)
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
                client.reply(from, ind.doneOwner(), id)
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
                if (mentionedJidList.length === 0) return client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return client.reply(from, ind.wrongFormat(), id)
                for (let blist of mentionedJidList) {
                    _ban.push(blist)
                    fs.writeFileSync('./ingfo/banned.json', JSON.stringify(_ban))
                }
                client.reply(from, ind.doneOwner(), id)
            break
            case 'unban':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                if (mentionedJidList.length === 0) return client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return client.reply(from, ind.wrongFormat(), id)
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
                    client.reply(from, err, id)
                }
            break
            case 'shutdown':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                client.sendText(from, 'Otsukaresama deshita~ 👋')
                    .then(async () => await client.kill())
            break
            case 'pradd':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                if (mentionedJidList.length === 0) return client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return client.reply(from, ind.wrongFormat(), id)
                for (let premi of mentionedJidList) {
                    _premium.push(premi)
                    fs.writeFileSync('./ingfo/premium.json', JSON.stringify(_premium))
                }
                client.reply(from, ind.doneOwner(), id)
            break
            case 'prdel':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                if (mentionedJidList.length === 0) return client.reply(from, ind.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return client.reply(from, ind.wrongFormat(), id)
                let predel = _premium.indexOf(mentionedJidList[0])
                _premium.splice(predel, 1)
                fs.writeFileSync('./ingfo/premium.json', JSON.stringify(_premium))
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
