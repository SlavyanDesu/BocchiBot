const { decryptMedia, Client } = require('@open-wa/wa-automate')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')
const { msgFilter, color, processTime } = require('../tools')
const config = require('../config.json')
const { menu } = require('./text')

module.exports = msgHandler = async (client = new Client(), message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName } = sender
        pushname = pushname || verifiedName
        const blockNumber = await client.getBlockedIds()
        const ownerNumber = config.ownerBot
        const isBlocked = blockNumber.includes(sender.id)
        const isOwner = sender.id === ownerNumber

        const prefix  = '$'
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
        const uaOverride = 'WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'

        if (isBlocked) return

        // Anti-spam
        if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }

        // Log
        if (!isCmd && !isGroupMsg) return
        if (!isCmd && isGroupMsg) return
        if (isCmd && !isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
        if (isCmd && isGroupMsg) { console.log(color('[EXEC]'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }

        // Anti-spam
        msgFilter.isFiltered(from)

        switch (command) {
            case 'ping':
            case 'p':
                await client.sendText(from, `Pong!\nSpeed: ${processTime(t, moment())} detik`)
            break
            case 'say':
                const sayMessage = args.join(' ')
                client.sendText(from, sayMessage)
            break
            case 'menu':
                client.sendText(from, menu.textMenu(pushname))
            break
            case 'sticker':
            case 'stiker':
                if (isMedia || isQuotedImage) {
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await client.sendImageAsSticker(from, imageBase64)
                        .then(() => {
                            client.sendText(from, 'Ok desu~')
                            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                        })
                        .catch((err) => {
                            console.error(err)
                            client.reply(from, `Error:\n${err}`)
                        })
                } else {
                    client.reply(from, 'Format salah!', id)
                }
            break

            // Owner command
            case 'clearall':
                if (!isOwner) return client.reply(from, 'Command ini khusus owner bot!', id)
                const allChats = await client.getAllChats()
                for (let delChats of allChats) {
                    await client.deleteChat(delChats.id)
                }
                client.reply(from, 'Sudah tuan', id)
            break
            case 'getses':
                if (!isOwner) return client.reply(from, 'Command ini khusus owner bot!', id)
                const ses = await client.getSnapshot()
                client.sendFile(from, ses, 'session.png', 'Douzo...')
            break

            default:
                console.log(color('[ERROR]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), 'Unregistered command from', color(pushname))
                client.reply(from, 'Command tidak tersedia.', id)
            break
        }
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err)
    }
}