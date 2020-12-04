const { create, Client } = require('@open-wa/wa-automate')
const { color, options } = require('./tools')
const { ind, eng } = require('./message/text/lang/')
const figlet = require('figlet')
const msgHandler = require('./message')

const start = async (client = new Client()) => {
    console.log(color(figlet.textSync('Elaina-Bot', 'Larry 3D'), 'cyan'))
    console.log('[ELAINA]', color('Elaina is now online!'))

    // Force it to keep the current session
    client.onStateChanged((state) => {
        console.log('[ELAINA STATE]', state)
        if (state === 'UNPAIRED') client.forceRefocus()
        if (state === 'CONFLICT') client.forceRefocus()
        if (state === 'UNLAUNCHED') client.forceRefocus()
    })

    // Set all received message to seen
    client.onAck((x) => {
        const { to } = x
        if (x !== 3) client.sendSeen(to)
    })

    // Listening added to group
    client.onAddedToGroup((chat) => client.sendText(chat.groupMetadata.id, ind.addedGroup(chat)))

    // Listening on message
    client.onMessage((message) => {
        client.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 1000) {
                    console.log('[ELAINA]', color(`Loaded message reach ${msg}, cuting message cache...`, 'yellow'))
                    client.cutMsgCache()
                        .then(() => console.log('[ELAINA]', color('Cache deleted!', 'yellow')))
                }
            })
        msgHandler(client, message) // Message handler
    })

    // Block person who called bot
    client.onIncomingCall(async (callData) => {
        await client.sendText(callData.peerJid, ind.blocked())
        await client.contactBlock(callData.peerJid)
            .then(() => console.log(color('[BLOCK]', 'red'), color(`${callData.peerJid} has been blocked. Reason:`, 'yellow'), color('CALLING THE BOT', 'cyan')))
    })
}

// Creating session
create(options(start))
    .then((client) => start(client))
    .catch((err) => new Error(err))