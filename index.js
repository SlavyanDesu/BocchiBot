const { create, Client } = require('@open-wa/wa-automate')
const { color } = require('./tools')
const options = require('./tools/options')
const msgHandler = require('./message')

const start = async (client = new Client()) => {
    console.log('[DEV]', color('Slavyan', 'orange'))
    console.log('[CLIENT]', color('Bot is now online!', 'lime'))

    // Force it to keep the current session
    client.onStateChanged((state) => {
        console.log('[CLIENT STATE]', state)
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
    client.onAddedToGroup(chat => client.sendText(chat.groupMetadata.id, `Terima kasih grup ${chat.contact.name} telah mengundangku!`))

    // Listening on message
    client.onMessage((message) => {
        client.getAmountOfLoadedMessages()
            .then((msg) => {
                if (msg >= 3000) {
                    console.log('[CLIENT]', color(`Loaded message reach ${msg}, cuting message cache...`, 'yellow'))
                    client.cutMsgCache()
                        .then(() => console.log('Done!'))
                }
            })
        msgHandler(client, message) // Message handler
    })

    // When someone trying to call bot, he will be blocked
    client.onIncomingCall(async (callData) => {
        await client.sendText(callData.peerJid, 'Bot tidak menerima panggilan! Karena kamu telah melanggar rules, maka kamu telah diblok.')
            .then(() => client.contactBlock(callData.peerJid))
    })
}

// Creating session.data.json
create(options(true, start))
    .then((client) => start(client))
    .catch((err) => new Error(err))
