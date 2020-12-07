const { create, Client } = require('@open-wa/wa-automate')
const { color, options } = require('./tools')
const { ind, eng } = require('./message/text/lang/')
const figlet = require('figlet')
const msgHandler = require('./message')

const start = async (bocchi = new Client()) => {
    console.log(color(figlet.textSync('BocchiBot', 'Larry 3D'), 'cyan'))
    console.log('[BOCCHI]', color('BocchiBot is now online!'))

    // Force it to keep the current session
    bocchi.onStateChanged((state) => {
        console.log('[BOCCHI STATE]', state)
        if (state === 'UNPAIRED') bocchi.forceRefocus()
        if (state === 'CONFLICT') bocchi.forceRefocus()
        if (state === 'UNLAUNCHED') bocchi.forceRefocus()
    })

    // Set all received message to seen
    bocchi.onAck((x) => {
        const { to } = x
        if (x !== 3) bocchi.sendSeen(to)
    })

    // Listening added to group
    bocchi.onAddedToGroup((chat) => bocchi.sendText(chat.groupMetadata.id, ind.addedGroup(chat)))

    // Listening on message
    bocchi.onMessage((message) => {
        bocchi.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 1000) {
                    console.log('[BOCCHI]', color(`Loaded message reach ${msg}, cuting message cache...`, 'yellow'))
                    bocchi.cutMsgCache()
                        .then(() => console.log('[BOCCHI]', color('Cache deleted!', 'yellow')))
                }
            })
        msgHandler(bocchi, message) // Message handler
    })

    // Block person who called bot
    bocchi.onIncomingCall(async (callData) => {
        await bocchi.sendText(callData.peerJid, ind.blocked())
        await bocchi.contactBlock(callData.peerJid)
            .then(() => console.log(color('[BLOCK]', 'red'), color(`${callData.peerJid} has been blocked. Reason:`, 'yellow'), color('CALLING THE BOT', 'cyan')))
    })
}

// Creating session
create(options(start))
    .then((bocchi) => start(bocchi))
    .catch((err) => new Error(err))