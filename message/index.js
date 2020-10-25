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
const { id, en, jp } = require('./text/lang/')
const _nsfw = JSON.parse(fs.readFileSync('./ingfo/nsfw.json'))

module.exports = msgHandler = async (client = new Client(), message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg } = message
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

        // Ignore blocked users
        if (isBlocked) return

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
                if (!kata) return client.reply(from, jp.emptyMess(), id)
                client.sendText(from, kata)
            break
            case 'menu':
                client.sendText(from, menu.textMenuJp(pushname))
            break

            // Sticker
            case 'sticker':
            case 'stiker':
                if (isMedia || isQuotedImage) {
                    client.reply(from, jp.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await client.sendImageAsSticker(from, imageBase64)
                        .then(() => {
                            client.sendText(from, jp.ok())
                            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                        })
                        .catch((err) => {
                            console.error(err)
                            client.reply(from, `Error:\n${err}`)
                        })
                } else {
                    client.reply(from, jp.wrongFormat(), id)
                }
            break

            // NSFW
            /*
            case 'nsfw':
                if (!isGroupMsg) return client.reply(from, 'Command ini hanya bisa digunakan di dalam grup!', id)
                if (!isGroupAdmins) return client.reply(from, 'Hanya admin group yang boleh menggunakan command ini!', id)
                if (!isOwner) return client.reply(from, 'Maaf, hanya owner bot yang bisa menggunakan command ini.', id)
                if (args[0] === 'enable') {
                    _nsfw.push(chat.id)
                    fs.writeFileSync('./ingfo/nsfw.json', JSON.stringify(_nsfw))
                    client.reply(from, 'NSFW command berhasil *diaktifkan!*', id)
                } else if (args[0] === 'disable') {
                    _nsfw.splice(chat.id, 1)
                    fs.writeFileSync('./ingfo/nsfw.json', JSON.stringify(_nsfw))
                    client.reply(from, 'NSFW command berhasil *dinonaktifkan*!', id)
                } else {
                    client.reply(from, 'Format salah! Gunakan parameter *enable* atau *disable*!', id)
                }
            break
            case 'nsfwmenu':
                client.sendText(from, menu.textNsfw())
            break
            case 'multilewds':
            case 'multilewd':
            case 'mlewds':
            case 'mlewd':
                if (isGroupMsg) {
                    if (!isNsfw) return client.reply(from, 'Command NSFW belum diaktifkan!', id)
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
                if (!isOwner) return client.reply(from, jp.ownerOnly(), id)
                if (!kata) return client.reply(from, jp.emptyMess(), id)
                const chats = await client.getAllChatIds()
                for (let bcs of chats) {
                    let cvk = await client.getChatById(bcs)
                    if (!cvk.isReadOnly) await client.sendText(bcs, `[ DEV BROADCAST ]\n\n${kata}`)
                }
                client.reply(from, jp.doneOwner(), id)
            break
            case 'clearall':
                if (!isOwner) return client.reply(from, jp.ownerOnly(), id)
                const allChats = await client.getAllChats()
                for (let delChats of allChats) {
                    await client.deleteChat(delChats.id)
                }
                await client.reply(from, jp.doneOwner(), id)
            break
            case 'leaveall':
                if (!isOwner) return client.reply(from, jp.ownerOnly(), id)
                if (!kata) return client.reply(from, jp.emptyMess(), id)
                const allGroup = await client.getAllGroups()
                for (let gclist of allGroup) {
                    await client.sendText(gclist.contact.id, kata)
                    await client.leaveGroup(gclist.contact.id)
                }
                client.reply(from, jp.doneOwner())
            break
            case 'getses':
                if (!isOwner) return client.reply(from, jp.ownerOnly(), id)
                const ses = await client.getSnapshot()
                client.sendFile(from, ses, 'session.png', jp.doneOwner())
            break

            default:
                console.log(color('[ERROR]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'Unregistered command from', color(pushname))
                client.reply(from, jp.cmdNotFound(), id)
            break
        }
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err)
    }
}
