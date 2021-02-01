/* eslint-disable no-unused-vars */
const { create, Client } = require('@open-wa/wa-automate')
const { color, options } = require('./tools')
const { ind, eng } = require('./message/text/lang/')
const { loader } = require('./function')
const figlet = require('figlet')
const msgHandler = require('./message')
const canvas = require('discord-canvas')
const config = require('./config.json')
const ownerNumber = config.ownerBot
const fs = require('fs-extra')
const { groupLimit, memberLimit } = require('./database/bot/setting.json')

const start = (bocchi = new Client()) => {
    console.log(color(figlet.textSync('BocchiBot', 'Larry 3D'), 'cyan'))
    console.log(color('=> Bot successfully loaded! Database:', 'yellow'), color(loader.getAllDirFiles('./database').length), color('Library:', 'yellow'), color(loader.getAllDirFiles('./lib').length), color('Function:', 'yellow'), color(loader.getAllDirFiles('./function').length))
    console.log('[BOCCHI]', color('BocchiBot is now online!'))
    console.log(color('[DEV]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'magenta'))
    
    loader.nocache('../message/index.js', m => console.log(color('[WATCH]', 'orange'), color(`=> '${m}'`, 'yellow'), 'file is updated!'))
    // loader.nocache('../message/text/lang/ind.js', m => console.log(color('[WATCH]', 'orange'), color(`=> '${m}'`, 'yellow'), 'file is updated!'))
    // loader.nocache('../message/text/lang/eng.js', m => console.log(color('[WATCH]', 'orange'), color(`=> '${m}'`, 'yellow'), 'file is updated!'))

    // Force it to keep the current session
    bocchi.onStateChanged((state) => {
        console.log('[BOCCHI STATE]', state)
        if (state === 'UNPAIRED' || state === 'CONFLICT' || state === 'UNLAUNCHED') bocchi.forceRefocus()
    })

    // Listening added to group
    bocchi.onAddedToGroup(async (chat) => {
        const gc = await bocchi.getAllGroups()
        if (ownerNumber.includes(chat.id)) {
            await bocchi.sendText(chat.id, ind.addedGroup(chat))
        } else if (gc.length > groupLimit) {
            await bocchi.sendText(chat.id, `Max groups reached!\n\nCurrent status: ${gc.length}/${groupLimit}`)
            await bocchi.deleteChat(chat.id)
            await bocchi.leaveGroup(chat.id)
        } else if (chat.groupMetadata.participants.length < memberLimit) {
            await bocchi.sendText(chat.id, `Need at least ${memberLimit} members in group!`)
            await bocchi.deleteChat(chat.id)
            await bocchi.leaveGroup(chat.id)
        } else {
            await bocchi.sendText(chat.id, ind.addedGroup(chat))
        }
    })

    // Listening to messages
    bocchi.onMessage((message) => {
        bocchi.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 1000) {
                    console.log('[BOCCHI]', color(`Loaded message reach ${msg}, cuting message cache...`, 'yellow'))
                    bocchi.cutMsgCache()
                    console.log('[BOCCHI]', color('Cache deleted!', 'yellow'))
                }
            })
        // Below is an watched version but it will affect the performance
        require('./message/index.js')(bocchi, message)
        // msgHandler(bocchi, message)
    })

    // Block person who called bot
    bocchi.onIncomingCall(async (callData) => {
        await bocchi.sendText(callData.peerJid, ind.blocked(ownerNumber))
        await bocchi.contactBlock(callData.peerJid)
        console.log(color('[BLOCK]', 'red'), color(`${callData.peerJid} has been blocked. Reason:`, 'yellow'), color('CALLING THE BOT', 'cyan'))
    })

    // Listen to group's event
    bocchi.onGlobalParicipantsChanged(async (event) => {
        const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
        const isWelcome = _welcome.includes(event.chat)
        const gcChat = await bocchi.getChatById(event.chat)
        const pcChat = await bocchi.getContact(event.who)
        let { pushname, verifiedName, formattedName } = pcChat
        pushname = pushname || verifiedName || formattedName
        const { name, groupMetadata } = gcChat
        const botNumbers = await bocchi.getHostNumber() + '@c.us'
        try {
            if (event.action === 'add' && event.who !== botNumbers && isWelcome) {
                const pic = await bocchi.getProfilePicFromServer(event.who)
                if (pic === undefined) {
                    var picx = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                } else {
                    picx = pic
                }
                const welcomer = await new canvas.Welcome()
                    .setUsername(pushname)
                    .setDiscriminator(event.who.substring(6, 10))
                    .setMemberCount(groupMetadata.participants.length)
                    .setGuildName(name)
                    .setAvatar(picx)
                    .setColor('border', '#00100C')
                    .setColor('username-box', '#00100C')
                    .setColor('discriminator-box', '#00100C')
                    .setColor('message-box', '#00100C')
                    .setColor('title', '#00FFFF')
                    .setBackground('https://www.photohdx.com/images/2016/05/red-blurry-background.jpg')
                    .toAttachment()
                const base64 = `data:image/png;base64,${welcomer.toBuffer().toString('base64')}`
                await bocchi.sendFile(event.chat, base64, 'welcome.png', `Welcome ${pushname}!`)
            } else if (event.action === 'remove' && event.who !== botNumbers && isWelcome) {
                const pic = await bocchi.getProfilePicFromServer(event.who)
                if (pic === undefined) {
                    var picxs = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                } else {
                    picxs = pic
                }
                const bye = await new canvas.Goodbye()
                    .setUsername(pushname)
                    .setDiscriminator(event.who.substring(6, 10))
                    .setMemberCount(groupMetadata.participants.length)
                    .setGuildName(name)
                    .setAvatar(picxs)
                    .setColor('border', '#00100C')
                    .setColor('username-box', '#00100C')
                    .setColor('discriminator-box', '#00100C')
                    .setColor('message-box', '#00100C')
                    .setColor('title', '#00FFFF')
                    .setBackground('https://www.photohdx.com/images/2016/05/red-blurry-background.jpg')
                    .toAttachment()
                const base64 = `data:image/png;base64,${bye.toBuffer().toString('base64')}`
                await bocchi.sendFile(event.chat, base64, 'welcome.png', `Bye ${pushname}, we will miss you~`)
            }
        } catch (err) {
            console.error(err)
        }
    })
}

// Creating session
create(options(start))
    .then((bocchi) => start(bocchi))
    .catch((err) => console.error(err))
