const { decryptMedia, Client } = require('@open-wa/wa-automate')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')
const fs = require('fs-extra')
const nekos = require('nekos.life')
const neko = new nekos()

const { msgFilter, color, processTime } = require('../tools')
const { nsfw } = require('../lib')
const config = require('../config.json')
const { menu } = require('./text')
const { ind, eng } = require('./text/lang/')
const _nsfw = JSON.parse(fs.readFileSync('./ingfo/nsfw.json'))
const _ban = JSON.parse(fs.readFileSync('./ingfo/banned.json'))

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

        const prefix  = config.prefix
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        const uaOverride = config.uaOverride
        const kata = args.join(' ')
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'

        // Ignore non-cmd
        if (!isCmd) return

        // Ignore private chat (for development)
        if (isCmd && !isGroupMsg) return client.sendText(from, 'Bot ini sedang dalam pengembangan dan hanya tersedia secara ekslusif untuk grup FGA saja.')

        // Ignore blocked users
        if (isBlocked || isBanned) return

        // Anti-spam
        if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }

        // Log
        if (isCmd && !isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        if (isCmd && isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }

        // Anti-spam
        msgFilter.isFiltered(from)

        switch (command) {
            // Utility
            case 'ping':
            case 'p':
                await client.sendText(from, `Pong!\nSpeed: ${processTime(t, moment())} s`)
            break
            case 'say':
                if (!kata) return client.reply(from, ind.emptyMess(), id)
                client.sendText(from, kata)
            break
            case 'delete':
            case 'del':
                if (!quotedMsg) return client.reply(from, ind.wrongFormat(), id)
                if (!quotedMsgObj.fromMe) return client.reply(from, ind.wrongFormat(), id)
                await client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break

            // Bot
            case 'menu':
                client.sendText(from, menu.textMenuId(pushname))
            break
            case 'rules':
            case 'rule':
                client.sendText(from, menu.textRulesId())
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
                client.sendText(from, menu.textOwner())
            break

            // Weeb zone
            case 'neko':
                client.sendFileFromUrl(from, (await neko.sfw.wallpaper()).url, 'waifu.png', '', null, null, true)
                    .then(() => console.log('Success sending neko image!'))
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, `Error:\n${err}`, id)
                    })
            break 
            case 'wallpaper':
            case 'wp':
                client.sendFileFromUrl(from, (await neko.sfw.wallpaper()).url, 'wallpaper.png', '', null, null, true)
                    .then(() => console.log('Success sending wallpaper image!'))
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, `Error:\n${err}`)
                    })
            break
            case 'kemono':
                client.sendFileFromUrl(from, (await neko.sfw.kemonomimi()).url, 'kemono.png', '', null, null, true)
                    .then(() => console.log('Success sending kemonomimi image!'))
                    .catch((err) => {
                        console.error(err)
                        client.reply(from, `Error;\n${err}`)
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
                            client.reply(from, `Error:\n${err}`)
                        })
                } else {
                    client.reply(from, ind.wrongFormat(), id)
                }
            break

            // NSFW
            case 'nsfwmenu':
                if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                client.sendText(from, menu.textNsfw())
            break
            /*
            case 'multilewds':
            case 'multilewd':
            case 'mlewds':
            case 'mlewd':
                if (isGroupMsg) {
                    if (!isNsfw) return client.reply(from, ind.notNsfw(), id)
                    nsfw.randomLewd()
                        .then(({ memes }) => {
                            for (i = 0; i < memes.length; i++) {
                                let bahan = memes[i]
                                client.sendFileFromUrl(from, bahan.url, 'lewd.jpg', '', null, null, true)
                                    .then(() => console.log('Success sending lewd!'))
                                    .catch(err => console.error(err))
                            }
                        })
                        .catch((err) => {
                            console.error(err)
                            client.reply(from, `Error:\n${err}`)
                        })
                } else {
                    nsfw.randomLewd()
                        .then(({ memes }) => {
                            for (i = 0; i < memes.length; i++) {
                                let bahan = memes[i]
                                client.sendFileFromUrl(from, bahan.url, 'lewd.jpg', '', null, null, true)
                                    .then(() => console.log('Success sending lewd!'))
                                    .catch(err => console.error(err))
                            }
                        })
                        .catch((err) => {
                            console.error(err)
                            client.reply(from, `Error:\n${err}`)
                        })
                }
            break
            */

            // Owner command
            case 'bc':
                if (!isOwner) return client.reply(from, ind.ownerOnly(), id)
                if (!kata) return client.reply(from, ind.emptyMess(), id)
                const chats = await client.getAllChatIds()
                for (let bcs of chats) {
                    let cvk = await client.getChatById(bcs)
                    if (!cvk.isReadOnly) await client.sendText(bcs, `${kata}\n\n- Slavyan (Kal)\n_Broadcasted message_`)
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
                if (!kata) return client.reply(from, ind.emptyMess(), id)
                const allGroup = await client.getAllGroups()
                for (let gclist of allGroup) {
                    await client.sendText(gclist.contact.id, kata)
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

            default:
                console.log(color('[ERROR]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'Unregistered command from', color(pushname))
                client.reply(from, ind.cmdNotFound(), id)
            break
        }
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err)
    }
}
