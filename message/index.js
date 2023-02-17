/* eslint-disable no-case-declarations */

/********** MODULES **********/
const { decryptMedia, Client } = require('@open-wa/wa-automate')
const fs = require('fs-extra')
const Nekos = require('nekos.life')
const neko = new Nekos()
const os = require('os')
const sagiri = require('sagiri')
const isPorn = require('is-porn')
const config = require('../config.json')
const saus = sagiri(config.nao)
const tts = require('node-gtts')
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')
const ms = require('parse-ms')
const toMs = require('ms')
const canvas = require('canvacord')
const mathjs = require('mathjs')
const Filter = require('bad-words')
const badwords = new Filter()
const moment = require('moment-timezone')
const translate = require('@vitalets/google-translate-api')
moment.tz.setDefault('Asia/Jakarta').locale('id')
const genshin = require('genshin')
const google = require('google-it')
const cron = require('node-cron')
/********** END OF MODULES **********/

/********** UTILS **********/
const { msgFilter, color, processTime, isUrl, createSerial } = require('../tools')
const { weeaboo, downloader } = require('../lib')
const { uploadImages } = require('../tools/fetcher')
const { eng, ind } = require('./text/lang/')
const { daily, level, register, afk, reminder, premium, limit} = require('../function')
const cd = 4.32e+7
const limitCount = 25
const errorImg = 'https://i.ibb.co/jRCpLfn/user.png'
/********** END OF UTILS **********/

/********** DATABASES **********/
const _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _antinsfw = JSON.parse(fs.readFileSync('./database/group/antinsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const _autosticker = JSON.parse(fs.readFileSync('./database/group/autosticker.json'))
const _badwords = JSON.parse(fs.readFileSync('./database/group/badwords.json'))
const _ban = JSON.parse(fs.readFileSync('./database/bot/banned.json'))
const _premium = JSON.parse(fs.readFileSync('./database/bot/premium.json'))
const _mute = JSON.parse(fs.readFileSync('./database/bot/mute.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))
const _reminder = JSON.parse(fs.readFileSync('./database/user/reminder.json'))
const _daily = JSON.parse(fs.readFileSync('./database/user/daily.json'))
const _setting = JSON.parse(fs.readFileSync('./database/bot/setting.json'))
let { memberLimit, groupLimit } = _setting
/********** END OF DATABASES **********/

/********** MESSAGE HANDLER **********/
// eslint-disable-next-line no-undef
module.exports = msgHandler = async (bocchi = new Client(), message) => {
    try {
        const { type, id, from, t, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message
        let { body } = message
        const { name, formattedTitle } = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName
        const botNumber = await bocchi.getHostNumber() + '@c.us'
        const blockNumber = await bocchi.getBlockedIds()
        const ownerNumber = config.ownerBot
        const authorWm = config.authorStick
        const packWm = config.packStick
        const prefix = config.prefix
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await bocchi.getGroupAdmins(groupId) : ''
        const time = moment(t * 1000).format('DD/MM/YY HH:mm:ss')

        const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const q = args.join(' ')
        const ar = args.map((v) => v.toLowerCase())
        const url = args.length !== 0 ? args[0] : ''

        /********** VALIDATOR **********/
        const isCmd = body.startsWith(prefix)
        const isBlocked = blockNumber.includes(sender.id)
        const isOwner = sender.id === ownerNumber
        const isBanned = _ban.includes(sender.id)
        const isPremium = premium.checkPremiumUser(sender.id, _premium)
        const isRegistered = register.checkRegisteredUser(sender.id, _registered)
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber) : false
        const isWelcomeOn = isGroupMsg ? _welcome.includes(groupId) : false
        const isDetectorOn = isGroupMsg ? _antilink.includes(groupId) : false
        const isLevelingOn = isGroupMsg ? _leveling.includes(groupId) : false
        const isAutoStickerOn = isGroupMsg ? _autosticker.includes(groupId) : false
        const isAntiNsfw = isGroupMsg ? _antinsfw.includes(groupId) : false
        const isMute = isGroupMsg ? _mute.includes(chat.id) : false
        const isAfkOn = isGroupMsg ? afk.checkAfkUser(sender.id, _afk) : false
        const isAntiBadWords = isGroupMsg ? _badwords.includes(groupId) : false
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
        const isQuotedGif = quotedMsg && quotedMsg.mimetype === 'image/gif'
        const isQuotedAudio = quotedMsg && quotedMsg.type === 'audio'
        const isQuotedVoice = quotedMsg && quotedMsg.type === 'ptt'
        const isImage = type === 'image'
        const isVideo = type === 'video'
        const isAudio = type === 'audio'
        const isVoice = type === 'ptt'
        const isGif = mimetype === 'image/gif'
        /********** END OF VALIDATOR **********/

        // Automate
        premium.expiredCheck(_premium)
        cron.schedule('0 0 * * *', () => {
            const reset = []
            _limit = reset
            console.log('Hang tight, it\'s time to reset usage limits...')
            fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            console.log('Success!')
        }, {
            scheduled: true,
            timezone: 'Asia/Jakarta'
        })

        // ROLE (Change to what you want, or add) and you can change the role sort based on XP.
        const levelRole = level.getLevelingLevel(sender.id, _level)
        var role = 'Copper V'
        if (levelRole >= 5) {
            role = 'Copper IV'
        }
        if (levelRole >= 10) {
            role = 'Copper III'
        }
        if(levelRole >= 15) {
            role = 'Copper II'
        }
        if (levelRole >= 20) {
            role = 'Copper I'
        }
        if (levelRole >= 25) {
            role = 'Silver V'
        }
        if (levelRole >= 30) {
            role = 'Silver IV'
        }
        if (levelRole >= 35) {
            role = 'Silver III'
        }
        if (levelRole >= 40) {
            role = 'Silver II'
        }
        if (levelRole >= 45) {
            role = 'Silver I'
        }
        if (levelRole >= 50) {
            role = 'Gold V'
        }
        if (levelRole >= 55) {
            role = 'Gold IV'
        }
        if (levelRole >= 60) {
            role = 'Gold III'
        }
        if (levelRole >= 65) {
            role = 'Gold II'
        }
        if (levelRole >= 70) {
            role = 'Gold I'
        }
        if (levelRole >= 75) {
            role = 'Platinum V'
        }
        if (levelRole >= 80) {
            role = 'Platinum IV'
        }
        if (levelRole >= 85) {
            role = 'Platinum III'
        }
        if (levelRole >= 90) {
            role = 'Platinum II'
        }
        if (levelRole >= 95) {
            role = 'Platinum I'
        }
        if (levelRole >= 100) {
            role = 'Exterminator'
        }

        // Leveling [BETA] by Slavyan
        if (isGroupMsg && isRegistered && !level.isGained(sender.id) && !isBanned && isLevelingOn) {
            try {
                level.addCooldown(sender.id)
                const currentLevel = level.getLevelingLevel(sender.id, _level)
                const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15)
                const requiredXp = 5 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
                level.addLevelingXp(sender.id, amountXp, _level)
                if (requiredXp <= level.getLevelingXp(sender.id, _level)) {
                    level.addLevelingLevel(sender.id, 1, _level)
                    const userLevel = level.getLevelingLevel(sender.id, _level)
                    const fetchXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                    await bocchi.reply(from, `*── 「 LEVEL UP 」 ──*\n\n➸ *Name*: ${pushname}\n➸ *XP*: ${level.getLevelingXp(sender.id, _level)} / ${fetchXp}\n➸ *Level*: ${currentLevel} -> ${level.getLevelingLevel(sender.id, _level)} 🆙 \n➸ *Role*: *${role}*`, id)
                }
            } catch (err) {
                console.error(err)
            }
        }

        // Anti group link detector
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorOn && !isOwner) {
            if (chats.match(new RegExp(/(https:\/\/chat.whatsapp.com)/gi))) {
                const valid = await bocchi.inviteInfo(chats)
                if (valid) {
                    console.log(color('[KICK]', 'red'), color('Received a group link and it is a valid link!', 'yellow'))
                    await bocchi.reply(from, eng.linkDetected(), id)
                    await bocchi.removeParticipant(groupId, sender.id)
                } else {
                    console.log(color('[WARN]', 'yellow'), color('Received a group link but it is not a valid link!', 'yellow'))
                }
            }
        }

        // Anti virtext by: @VideFrelan
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && !isOwner) {
           if (chats.length >= 5000) {
               await bocchi.sendTextWithMentions(from, `@${sender.id} is detected sending a virtext.\nYou will be kicked!`)
               await bocchi.removeParticipant(groupId, sender.id)
            }
        }

        // Anti fake group link detector by: Baguettou
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isDetectorOn && !isOwner) {
            if (chats.match(new RegExp(/(https:\/\/chat.(?!whatsapp.com))/gi))) {
                console.log(color('[KICK]', 'red'), color('Received a fake group link!', 'yellow'))
                await bocchi.reply(from, 'Fake group link detected!', id)
                await bocchi.removeParticipant(groupId, sender.id)
            }
        }

        // Anti badwords
        if (isGroupMsg && isBotGroupAdmins && isAntiBadWords) {
            if (badwords.isProfane(chats)) {
                await bocchi.deleteMessage(chat.id, id, false)
            }
        }

        // Anti NSFW link
        if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isAntiNsfw && !isOwner) {
            if (isUrl(chats)) {
                const classify = new URL(isUrl(chats))
                console.log(color('[FILTER]', 'yellow'), 'Checking link:', classify.hostname)
                isPorn(classify.hostname, async (err, status) => {
                    if (err) return console.error(err)
                    if (status) {
                        console.log(color('[NSFW]', 'red'), color('The link is classified as NSFW!', 'yellow'))
                        await bocchi.reply(from, eng.linkNsfw(), id)
                        await bocchi.removeParticipant(groupId, sender.id)
                    } else {
                        console.log(('[NEUTRAL]'), color('The link is safe!'))
                    }
                })
            }
        }

        // Auto sticker
        if (isGroupMsg && isAutoStickerOn && isMedia && isImage && !isCmd) {
            const mediaData = await decryptMedia(message)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await bocchi.sendImageAsSticker(from, imageBase64, { author: authorWm, pack: packWm, keepScale: true })
            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
        }

        // Auto sticker video
        if (isGroupMsg && isAutoStickerOn && isMedia && isVideo && !isCmd) {
            const mediaData = await decryptMedia(message)
            const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await bocchi.sendMp4AsSticker(from, videoBase64, { stickerMetadata: true, pack: packWm, author: authorWm, fps: 30, startTime: '00:00:00.0', endTime : '00:00:05.0', crop: false, loop: 0 })
            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
        }

        // AFK by Slavyan
        if (isGroupMsg) {
            for (let ment of mentionedJidList) {
                if (afk.checkAfkUser(ment, _afk)) {
                    const getId = afk.getAfkId(ment, _afk)
                    const getReason = afk.getAfkReason(getId, _afk)
                    const getTime = afk.getAfkTime(getId, _afk)
                    await bocchi.reply(from, eng.afkMentioned(getReason, getTime), id)
                }
            }
            if (afk.checkAfkUser(sender.id, _afk) && !isCmd) {
                _afk.splice(afk.getAfkPosition(sender.id, _afk), 1)
                fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
                await bocchi.sendText(from, eng.afkDone(pushname))
            }
        }

        // Mute
        if (isCmd && isMute && !isGroupAdmins && !isOwner && !isPremium) return

        // Ignore banned and blocked users
        if (isCmd && (isBanned || isBlocked) && !isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && (isBanned || isBlocked) && isGroupMsg) return console.log(color('[BAN]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Anti spam
        if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) return console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) return console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))

        // Log
        if (isCmd && !isGroupMsg) {
            console.log(color('[CMD]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
            await bocchi.sendSeen(from)
        }
        if (isCmd && isGroupMsg) {
            console.log(color('[CMD]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle))
            await bocchi.sendSeen(from)
        }

        // Anti spam
        if (isCmd && !isPremium && !isOwner) msgFilter.addFilter(from)

        switch (command) {
            // Register by Slavyan
            case 'register':
                if (isGroupMsg) return await bocchi.reply(from, eng.pcOnly(), id)
                if (isRegistered) return await bocchi.reply(from, eng.registeredAlready(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                const serialUser = createSerial(20)
                register.addRegisteredUser(sender.id, q, time, serialUser, _registered)
                await bocchi.reply(from, eng.registered(q, sender.id, time, serialUser), id)
                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(q, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                break

            // Level [BETA] by Slavyan
            case 'level':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isLevelingOn) return await bocchi.reply(from, eng.levelingNotOn(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                const userLevel = level.getLevelingLevel(sender.id, _level)
                const userXp = level.getLevelingXp(sender.id, _level)
                const ppLink = await bocchi.getProfilePicFromServer(sender.id)
                if (ppLink === undefined) {
                    var pepe = errorImg
                } else {
                    pepe = ppLink
                }
                const requiredXp = 5 * Math.pow(userLevel, 2) + 50 * userLevel + 100
                const rank = new canvas.Rank()
                    .setAvatar(pepe)
                    .setLevel(userLevel)
                    .setLevelColor('#ffa200', '#ffa200')
                    .setRank(Number(level.getUserRank(sender.id, _level)))
                    .setCurrentXP(userXp)
                    .setOverlay('#000000', 100, false)
                    .setRequiredXP(requiredXp)
                    .setProgressBar('#ffa200', 'COLOR')
                    .setBackground('COLOR', '#000000')
                    .setUsername(pushname)
                    .setDiscriminator(sender.id.substring(6, 10))
                rank.build()
                    .then(async (buffer) => {
                        const imageBase64 = `data:image/png;base64,${buffer.toString('base64')}`
                        await bocchi.sendImage(from, imageBase64, 'rank.png', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break
            case 'leaderboard':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isLevelingOn) return await bocchi.reply(from, eng.levelingNotOn(), id)
                if (!isGroupMsg) return await bocchi.reply(from. eng.groupOnly(), id)
                const resp = _level
                _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboard = '*── 「 LEADERBOARDS 」 ──*\n\n'
                try {
                    for (let i = 0; i < 10; i++) {
                        var roles = 'Copper V'
                        if (resp[i].level >= 5) {
                            roles = 'Copper IV'
                        }
                         if (resp[i].level >= 10) {
                            roles = 'Copper III'
                        }
                         if (resp[i].level >= 15) {
                            roles = 'Copper II'
                        }
                         if (resp[i].level >= 20) {
                            roles = 'Copper I'
                        }
                         if (resp[i].level >= 25) {
                            roles = 'Silver V'
                        }
                         if (resp[i].level >= 30) {
                            roles = 'Silver IV'
                        }
                         if (resp[i].level >= 35) {
                            roles = 'Silver III'
                        }
                         if (resp[i].level >= 40) {
                            roles = 'Silver II'
                        }
                         if (resp[i].level >= 45) {
                            roles = 'Silver I'
                        }
                         if (resp[i].level >= 50) {
                            roles = 'Gold V'
                        }
                         if (resp[i].level >= 55) {
                            roles = 'Gold IV'
                        }
                         if (resp[i].level >= 60) {
                            roles = 'Gold III'
                        }
                         if (resp[i].level >= 65) {
                            roles = 'Gold II'
                        }
                         if (resp[i].level >= 70) {
                            roles = 'Gold I'
                        }
                         if (resp[i].level >= 75) {
                            roles = 'Platinum V'
                        }
                         if (resp[i].level >= 80) {
                            roles = 'Platinum IV'
                        }
                         if (resp[i].level >= 85) {
                            roles = 'Platinum III'
                        }
                         if (resp[i].level >= 90) {
                            roles = 'Platinum II'
                        }
                         if (resp[i].level >= 95) {
                            roles = 'Platinum I'
                        }
                         if (resp[i].level > 100) {
                            roles = 'Exterminator'
                        }
                        leaderboard += `${i + 1}. wa.me/${_level[i].id.replace('@c.us', '')}\n➸ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n➸ *Role*: ${roles}\n\n`
                    }
                    await bocchi.reply(from, leaderboard, id)
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, eng.minimalDb(), id)
                }
                break

            // Downloader
            case 'twitter':
            case 'twt':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('twitter.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                downloader.tweet(url)
                    .then(async (data) => {
                        const content = data.variants.filter((x) => x.content_type !== 'application/x-mpegURL').sort((a, b) => b.bitrate - a.bitrate)
                        await bocchi.sendFileFromUrl(from, content[0].url, 'video.mp4', null, id)
                            .then(() => console.log('Success sending Twitter video!'))
                            .catch(async (err) => {
                                console.error(err)
                                await bocchi.reply(from, 'Error!', id)
                            })
                    })
                break
            case 'youtube':
            case 'yt':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isUrl(url)) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                downloader.yt(url)
                    .then(async ({ title, path }) => {
                        await bocchi.sendFile(from, path, `${title}.mp4`, null, id)
                            .then(() => fs.unlinkSync(path))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break

            // Misc
            case 'google': // chika-chantekkzz
            case 'googlesearch':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                google({ 'query': q, 'no-display': true })
                    .then(async (results) => {
                        let txt = `*── 「 GOOGLE SEARCH 」 ──*\n\n*by: rashidsiregar28*\n\n_*Search results for: ${q}*_`
                        for (let i = 0; i < results.length; i++) {
                            txt += `\n\n➸ *Title*: ${results[i].title}\n➸ *Desc*: ${results[i].snippet}\n➸ *Link*: ${results[i].link}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                        }
                        await bocchi.reply(from, txt, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break
            case 'say':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.sendText(from, q)
                break
            case 'afk': // by Slavyan
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (isAfkOn) return await bocchi.reply(from, eng.afkOnAlready(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const reason = q ? q : 'Nothing.'
                afk.addAfkUser(sender.id, time, reason, _afk)
                await bocchi.reply(from, eng.afkOn(pushname, reason), id)
                break
            case 'genshininfo': // by chika chantexxzz
            case 'genshin':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                try {
                    console.log('Searching for character...')
                    const character = await genshin.characters(q)
                    await bocchi.sendFileFromUrl(from, character.image, `${character.name}.jpg`, `*「 GENSHIN IMPACT 」*\n\n*${character.name}*\n${character.description}\n\n"_${character.quote}_" - ${character.name}\n\n➸ *Name*: ${character.name}\n➸ *Seiyuu*: ${character.cv}\n➸ *Region*: ${character.city}\n➸ *Rating*: ${character.rating}\n➸ *Vision*: ${character.element}\n➸ *Weapon*: ${character.weapon}\n\n${character.url}`)
                    console.log('Success sending Genshin Impact character!')
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error or character not found!', id)
                }
                break
            case 'tts':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const speech = q.substring(q.indexOf('|') + 2)
                const ptt = tts(ar[0])
                try {
                    ptt.save(`temp/${speech}.mp3`, speech, async () => {
                        await bocchi.sendPtt(from, `temp/${speech}.mp3`, id)
                        fs.unlinkSync(`temp/${speech}.mp3`)
                    })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
                break
            case 'tomp3': // by Piyobot
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isVideo || isQuotedVideo) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedVideo ? quotedMsg : message
                    const _mimetype = isQuotedVideo ? quotedMsg.mimetype : mimetype
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await bocchi.sendFile(from, fileOutputPath, 'audio.mp3', '', id)
                                console.log(color('[WAPI]', 'green'), 'Success sending mp3!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'toptt':
            case 'ptt':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isAudio || isQuotedAudio) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedAudio ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia)
                    const name = new Date() * 1
                    fs.writeFileSync(`./temp/audio/${name}.mp3`, mediaData)
                    await bocchi.sendPtt(from, `./temp/audio/${name}.mp3`, id)
                    fs.unlinkSync(`./temp/audio/${name}.mp3`)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'math':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (typeof mathjs.evaluate(q) !== 'number') {
                    await bocchi.reply(from, eng.notNum(q), id)
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, `*── 「 MATH 」 ──*\n\n${q} = ${mathjs.evaluate(q)}`, id)
                }
                break
            case 'reminder': // by Slavyan
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const timeRemind = q.substring(0, q.indexOf('|') - 1)
                const messRemind = q.substring(q.lastIndexOf('|') + 2)
                const parsedTime = ms(toMs(timeRemind))
                reminder.addReminder(sender.id, messRemind, timeRemind, _reminder)
                await bocchi.sendTextWithMentions(from, eng.reminderOn(messRemind, parsedTime, sender))
                const intervRemind = setInterval(async () => {
                    if (Date.now() >= reminder.getReminderTime(sender.id, _reminder)) {
                        await bocchi.sendTextWithMentions(from, eng.reminderAlert(reminder.getReminderMsg(sender.id, _reminder), sender))
                        _reminder.splice(reminder.getReminderPosition(sender.id, _reminder), 1)
                        fs.writeFileSync('./database/user/reminder.json', JSON.stringify(_reminder))
                        clearInterval(intervRemind)
                    }
                }, 1000)
                break
            case 'imagetourl':
            case 'imgtourl':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia)
                    const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                    await bocchi.reply(from, linkImg, id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'translate':
            case 'tl':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (quotedMsg) {
                    const textos = quotedMsg.body
                    const languagets = args[0]
                    translate(textos, {to: languagets}).then(ress => {bocchi.reply(from, ress.text, id)})
                } else {
                    const texto = q.substring(0, q.indexOf('|') - 1)
                    const languaget = q.substring(q.lastIndexOf('|') + 2)
                    translate(texto, {to: languaget}).then(res => {bocchi.reply(from, res.text, id)})
                }
                break
            case 'bass':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isAudio || isQuotedAudio || isVoice || isQuotedVoice) {
                    if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.mp3`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .audioFilter(`equalizer=f=40:width_type=h:width=50:g=${args[0]}`)
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await bocchi.sendPtt(from, fileOutputPath, id)
                                console.log(color('[WAPI]', 'green'), 'Success sending audio!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'nightcore':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isAudio || isQuotedAudio || isVoice || isQuotedVoice) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedAudio || isQuotedVoice ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.mp3`)
                    const fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
                    fs.writeFile(fileInputPath, mediaData, (err) => {
                        if (err) return console.error(err)
                        ffmpeg(fileInputPath)
                            .audioFilter('asetrate=44100*1.25')
                            .format('mp3')
                            .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                            .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                            .on('end', async () => {
                                console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                await bocchi.sendPtt(from, fileOutputPath, id)
                                console.log(color('[WAPI]', 'green'), 'Success sending audio!')
                                setTimeout(() => {
                                    fs.unlinkSync(fileInputPath)
                                    fs.unlinkSync(fileOutputPath)
                                }, 30000)
                            })
                            .save(fileOutputPath)
                    })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break

            // Bot
            case 'menu':
            case 'help':
                const jumlahUser = _registered.length
                const levelMenu = level.getLevelingLevel(sender.id, _level)
                const xpMenu = level.getLevelingXp(sender.id, _level)
                const reqXpMenu = 5 * Math.pow(levelMenu, 2) + 50 * 1 + 100
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (args[0] === '1') {
                    await bocchi.sendText(from, eng.menuDownloader())
                } else if (args[0] === '2') {
                    await bocchi.sendText(from, eng.menuBot())
                } else if (args[0] === '3') {
                    await bocchi.sendText(from, eng.menuMisc())
                } else if (args[0] === '4') {
                    await bocchi.sendText(from, eng.menuSticker())
                } else if (args[0] === '5') {
                    await bocchi.sendText(from, eng.menuWeeaboo())
                } else if (args[0] === '6') {
                    await bocchi.sendText(from, eng.menuFun())
                } else if (args[0] === '7') {
                    await bocchi.sendText(from, eng.menuModeration())
                } else if (args[0] === '8') {
                    if (!isOwner) return await bocchi.reply(from, eng.ownerOnly())
                    await bocchi.sendText(from, eng.menuOwner())
                } else if (args[0] === '9') {
                    if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                    await bocchi.sendText(from, eng.menuLeveling())
                } else {
                    await bocchi.sendText(from, eng.menu(jumlahUser, levelMenu, xpMenu, role, pushname, reqXpMenu, isPremium ? 'YES' : 'NO'))
                }
                break
            case 'rules':
            case 'rule':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.sendText(from, eng.rules())
                break
            case 'status':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.sendText(from, `*RAM*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${Math.round(os.totalmem / 1024 / 1024)} MB\n*CPU*: ${os.cpus()[0].model}`)
                break
            case 'listblock':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                let block = eng.listBlock(blockNumber)
                for (let i of blockNumber) {
                    block += `@${i.replace('@c.us', '')}\n`
                }
                await bocchi.sendTextWithMentions(from, block)
                break
            case 'ownerbot':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.sendContact(from, ownerNumber)
                break
            case 'runtime': // BY HAFIZH
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                const formater = (seconds) => {
                    const pad = (s) => {
                        return (s < 10 ? '0' : '') + s
                    }
                    const hrs = Math.floor(seconds / (60 * 60))
                    const mins = Math.floor(seconds % (60 * 60) / 60)
                    const secs = Math.floor(seconds % 60)
                    return ' ' + pad(hrs) + ':' + pad(mins) + ':' + pad(secs)
                }
                const uptime = process.uptime()
                await bocchi.reply(from, `*── 「 BOT UPTIME 」 ──*\n\n❏${formater(uptime)}`, id)
                break
            case 'ping':
            case 'p':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.sendText(from, `Pong!\nSpeed: ${processTime(t, moment())} secs`)
                break
            case 'delete':
            case 'del':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!quotedMsg) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isGroupMsg) {
                    if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                    if (isGroupAdmins) {
                        await bocchi.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
                    } else { 
                        if (!quotedMsgObj.fromMe) return await bocchi.reply(from, eng.wrongFormat(), id)
                        await bocchi.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
                    }
                } else {
                    if (!quotedMsgObj.fromMe) return await bocchi.reply(from, eng.wrongFormat(), id)
                    await bocchi.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
                }
                break
            case 'report':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q) return await bocchi.reply(from, eng.emptyMess(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const lastReport = daily.getLimit(sender.id, _daily)
                if (lastReport !== undefined && cd - (Date.now() - lastReport) > 0) {
                    const time = ms(cd - (Date.now() - lastReport))
                    await bocchi.reply(from, eng.daily(time), id)
                } else {
                    if (isGroupMsg) {
                        await bocchi.sendText(ownerNumber, `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Group*: ${(name || formattedTitle)}\n*Message*: ${q}`)
                        await bocchi.reply(from, eng.received(pushname), id)
                    } else {
                        await bocchi.sendText(ownerNumber, `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Message*: ${q}`)
                        await bocchi.reply(from, eng.received(pushname), id)
                    }
                    daily.addLimit(sender.id, _daily)
                }
                break
            case 'tos':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                await bocchi.sendLinkWithAutoPreview(from, 'https://github.com/SlavyanDesu/BocchiBot', eng.tos(ownerNumber))
                break
            case 'join':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isUrl(url) && !url.includes('chat.whatsapp.com')) return await bocchi.reply(from, eng.wrongFormat(), id)
                const checkInvite = await bocchi.inviteInfo(url)
                if (isOwner) {
                    await bocchi.joinGroupViaLink(url)
                    await bocchi.reply(from, eng.ok(), id)
                    await bocchi.sendText(checkInvite.id, `Hello! I was invited by ${pushname}`)
                } else {
                    const getGroupData = await bocchi.getAllGroups()
                    if (getGroupData.length >= groupLimit) {
                        await bocchi.reply(from, `Invite refused. Max group is: ${groupLimit}`, id)
                    } else if (getGroupData.size <= memberLimit) {
                        await bocchi.reply(from, `Invite refused. Minimum member is: ${memberLimit}`, id)
                    } else {
                        if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                        limit.addLimit(sender.id, _limit, isPremium, isOwner)
                        await bocchi.joinGroupViaLink(url)
                        await bocchi.reply(from, eng.ok(), id)
                        await bocchi.sendText(checkInvite.id, `Hello! I was invited by ${pushname}`)
                    }
                }
                break
            case 'premiumcheck':
            case 'cekpremium':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                const cekExp = ms(premium.getPremiumExpired(sender.id, _premium) - Date.now())
                await bocchi.reply(from, `*── 「 PREMIUM EXPIRED 」 ──*\n\n➸ *ID*: ${sender.id}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`, id)
                break
            case 'premiumlist':
            case 'listpremium':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                let listPremi = '*── 「 PREMIUM USERS 」 ──*\n\n'
                const deret = premium.getAllPremiumUser(_premium)
                const arrayPremi = []
                for (let i = 0; i < deret.length; i++) {
                    const checkExp = ms(premium.getPremiumExpired(deret[i], _premium) - Date.now())
                    arrayPremi.push(await bocchi.getContact(premium.getAllPremiumUser(_premium)[i]))
                    listPremi += `${i + 1}. wa.me/${premium.getAllPremiumUser(_premium)[i].replace('@c.us', '')}\n➸ *Name*: ${arrayPremi[i].pushname}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
                }
                await bocchi.reply(from, listPremi, id)
                break
            case 'getpic':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (mentionedJidList.length !== 0) {
                    const userPic = await bocchi.getProfilePicFromServer(mentionedJidList[0])
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    if (userPic === undefined) {
                        var pek = errorImg
                    } else {
                        pek = userPic
                    }
                    await bocchi.sendFileFromUrl(from, pek, 'pic.jpg', '', id)
                } else if (args.length !== 0) {
                    const userPic = await bocchi.getProfilePicFromServer(args[0] + '@c.us')
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    if (userPic === undefined) {
                        var peks = errorImg
                    } else {
                        peks = userPic
                    }
                    await bocchi.sendFileFromUrl(from, peks, 'pic.jpg', '', id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'serial':
                if (!isRegistered) return await bocchi.reply(from, eng.registered(), id)
                if (isGroupMsg) return await bocchi.reply(from, eng.pcOnly(), id)
                if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                const serials = args[0]
                if (register.checkRegisteredUserFromSerial(serials, _registered)) {
                    const name = register.getRegisteredNameFromSerial(serials, _registered)
                    const time = register.getRegisteredTimeFromSerial(serials, _registered)
                    const id = register.getRegisteredIdFromSerial(serials, _registered)
                    await bocchi.sendText(from, eng.registeredFound(name, time, serials, id))
                } else {
                    await bocchi.sendText(from, eng.registeredNotFound(serials))
                }
                break
            case 'limit':
                if (isPremium || isOwner) return await bocchi.reply(from, '⤞ Limit left: ∞ (UNLIMITED)', id)
                await bocchi.reply(from, `⤞ Limit left: ${limit.getLimit(sender.id, _limit, limitCount)} / 25\n\n*_Limit direset pada pukul 00:00 WIB_*`, id)
                break

            // Weeb zone
            case 'neko':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Get neko image...')
                await bocchi.sendFileFromUrl(from, (await neko.neko()).url, 'neko.jpg', '', null, null, true)
                    .then(() => console.log('Success sending neko image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break
            case 'wallpaper':
            case 'wp':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Get wallpaper image...')
                await bocchi.sendFileFromUrl(from, (await neko.wallpaper()).url, 'wallpaper.jpg', '', null, null, true)
                    .then(() => console.log('Success sending wallpaper image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id )
                    })
                break
            case 'kemono':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                console.log('Get kemonomimi image...')
                await bocchi.sendFileFromUrl(from, (await neko.kemonomimi()).url, 'kemono.jpg', '', null, null, true)
                    .then(() => console.log('Success sending kemonomimi image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break
            case 'wait':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia)
                    const imageLink = await uploadImages(mediaData, sender.id)
                    weeaboo.wait(imageLink)
                        .then(async (data) => {
                            if (!data.result.length) {
                                await bocchi.reply(from, 'Anime not found!', id)
                            } else {
                                let text = ''
                                if (data.result[0].similarity < 0.90) {
                                    text += 'Low similarity... 🤔\n\n'
                                }
                                text += `*Title*: ${data.result[0].anilist.title.native}\n*Romaji*: ${data.result[0].anilist.title.romaji}\n*Episode*: ${data.result[0].episode}\n*Frames*: ${data.result[0].from} to ${data.result[0].to}\n*Similarity*: ${(data.result[0].similarity * 100).toFixed(1)}%\n*MyAnimeList*: https://myanimelist.net/anime/${data.result[0].anilist.idMal}`
                                await bocchi.sendFileFromUrl(from, `${data.result[0].video}&size=l`, `${data.result[0].anilist.title.romaji}.mp4`, text, id)
                            }
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await bocchi.reply(from, 'Error!', id)
                        })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'source':
            case 'sauce':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia)
                    try {
                        const imageLink = await uploadImages(mediaData, `sauce.${sender.id}`)
                        console.log('Searching for source...')
                        const results = await saus(imageLink)
                        for (let i = 0; i < results.length; i++) {
                            let teks = ''
                            if (results[i].similarity < 80.00) {
                                teks = 'Low similarity... 🤔\n\n'
                            } else {
                                teks += `*Link*: ${results[i].url}\n*Site*: ${results[i].site}\n*Author name*: ${results[i].authorName}\n*Author link*: ${results[i].authorUrl}\n*Similarity*: ${results[i].similarity}%`
                                await bocchi.sendLinkWithAutoPreview(from, results[i].url, teks)
                                    .then(() => console.log('Source found!'))
                            }
                        }
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'waifu':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.reply(from, eng.wait(), id)
                weeaboo.waifu(false)
                    .then(async ({ url }) => {
                        await bocchi.sendFileFromUrl(from, url, 'waifu.png', '', id)
                            .then(() => console.log('Success sending waifu!'))
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    })
                break

            // Fun
            case 'profile':
            case 'me':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                if (quotedMsg) {
                    const getQuoted = quotedMsgObj.sender.id
                    const profilePic = await bocchi.getProfilePicFromServer(getQuoted)
                    const username = quotedMsgObj.sender.name
                    const statuses = await bocchi.getStatus(getQuoted)
                    const benet = _ban.includes(getQuoted) ? 'Yes' : 'No'
                    const adm = groupAdmins.includes(getQuoted) ? 'Yes' : 'No'
                    const premi = premium.checkPremiumUser(getQuoted, _premium) ? 'Yes' : 'No'
                    const levelMe = level.getLevelingLevel(getQuoted, _level)
                    const xpMe = level.getLevelingXp(getQuoted, _level)
                    const req = 5 * Math.pow(levelMe, 2) + 50 * 1 + 100
                    const { status } = statuses
                    if (profilePic === undefined) {
                        var pfp = errorImg
                    } else {
                        pfp = profilePic
                    }
                    await bocchi.sendFileFromUrl(from, pfp, `${username}.jpg`, eng.profile(username, status, premi, benet, adm, levelMe, req, xpMe), id)
                } else {
                    const profilePic = await bocchi.getProfilePicFromServer(sender.id)
                    const username = pushname
                    const statuses = await bocchi.getStatus(sender.id)
                    const benet = isBanned ? 'Yes' : 'No'
                    const adm = isGroupAdmins ? 'Yes' : 'No'
                    const premi = isPremium ? 'Yes' : 'No'
                    const levelMe = level.getLevelingLevel(sender.id, _level)
                    const xpMe = level.getLevelingXp(sender.id, _level)
                    const req = 5 * Math.pow(levelMe, 2) + 50 * 1 + 100
                    const { status } = statuses
                    if (profilePic === undefined) {
                        var pfps = errorImg
                    } else {
                        pfps = profilePic
                    }
                    await bocchi.sendFileFromUrl(from, pfps, `${username}.jpg`, eng.profile(username, status, premi, benet, adm, levelMe, req, xpMe), id)
                }
                break
            case 'triggered':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.gif`)
                    const fileOutputPath = path.join(temp, 'video', `${name}.mp4`)
                    canvas.Canvas.trigger(mediaData)
                        .then((buffer) => {
                            canvas.write(buffer, fileInputPath)
                            ffmpeg(fileInputPath)
                                .outputOptions([
                                    '-movflags faststart',
                                    '-pix_fmt yuv420p',
                                    '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2'
                                ])
                                .inputFormat('gif')
                                .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                                .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                                .on('end', async () => {
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    await bocchi.sendMp4AsSticker(from, fileOutputPath, { fps: 30, startTime: '00:00:00.0', endTime : '00:00:05.0', loop: 0 })
                                    console.log(color('[WAPI]', 'green'), 'Success sending GIF!')
                                    setTimeout(() => {
                                        fs.unlinkSync(fileInputPath)
                                        fs.unlinkSync(fileOutputPath)
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'trash':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                try {
                    await bocchi.reply(from, eng.wait(), id)
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        const ypics = await bocchi.getProfilePicFromServer(mentionedJidList[i])
                        if (ypics === undefined) {
                            var ypfps = errorImg
                        } else {
                            ypfps = ypics
                        }
                    }
                    canvas.Canvas.trash(ypfps)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_trash.png`)
                            await bocchi.sendFile(from, `./temp/${sender.id}_trash.png`, `${sender.id}_trash.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_trash.png`)
                        })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
                break
            case 'hitler':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                try {
                    await bocchi.reply(from, eng.wait(), id)
                    for (let i = 0; i < mentionedJidList.length; i++) {
                        const ypics = await bocchi.getProfilePicFromServer(mentionedJidList[i])
                        if (ypics === undefined) {
                            var ypf = errorImg
                        } else {
                            ypf = ypics
                        }
                    }
                    canvas.Canvas.hitler(ypf)
                        .then(async (buffer) => {
                            canvas.write(buffer, `./temp/${sender.id}_hitler.png`)
                            await bocchi.sendFile(from, `./temp/${sender.id}_hitler.png`, `${sender.id}_hitler.png`, '', id)
                            fs.unlinkSync(`./temp/${sender.id}_hitler.png`)
                        })
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
                break
            case 'kiss':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                try {
                    if (isMedia && isImage || isQuotedImage) {
                        if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                        limit.addLimit(sender.id, _limit, isPremium, isOwner)
                        await bocchi.reply(from, eng.wait(), id)
                        const encryptMedia = isQuotedImage ? quotedMsg : message
                        const ppRaw = await bocchi.getProfilePicFromServer(sender.id)
                        const ppSecond = await decryptMedia(encryptMedia)
                        if (ppRaw === undefined) {
                            var ppFirst = errorImg
                        } else {
                            ppFirst = ppRaw
                        }
                        canvas.Canvas.kiss(ppFirst, ppSecond)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_kiss.png`)
                                await bocchi.sendFile(from, `${sender.id}_kiss.png`, `${sender.id}_kiss.png`, '', id)
                                fs.unlinkSync(`${sender.id}_kiss.png`)
                            })
                    } else {
                        await bocchi.reply(from, eng.wrongFormat(), id)
                    }
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
                break

            // Sticker
            case 'stikernobg':
            case 'stickernobg': // by: VideFrelan
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia)
                    await bocchi.sendImageAsSticker(from, mediaData, { author: authorWm, pack: packWm, removebg: true })
                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)                
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'stickerwm': // By Slavyan
            case 'stcwm':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isPremium) return await bocchi.reply(from, eng.notPremium(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const packname = q.substring(0, q.indexOf('|') - 1)
                    const author = q.substring(q.lastIndexOf('|') + 2)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia)
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await bocchi.sendImageAsSticker(from, imageBase64, { author: author, pack: packname })
                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'stickermeme': // Chika Chantexx
            case 'stcmeme':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const top = q.substring(0, q.indexOf('|') - 1)
                    const topp = top.replace('', '_').replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('#', '~h').replace('/', '~s')
                    const bottom = q.substring(q.lastIndexOf('|') + 2)
                    const bottomm = bottom.replace('', '_').replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('#', '~h').replace('/', '~s')
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia)
                    const getUrl = await uploadImages(mediaData, `meme.${sender.id}`)
                    const create = `https://api.memegen.link/images/custom/${topp}/${bottomm}.png?background=${getUrl}`
                    await bocchi.sendStickerfromUrl(from, create, null, { author: authorWm, pack: packWm, keepScale: true })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'takestick': // By: VideFrelan, Chika Chantexx
            case 'take':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!q.includes('|')) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (quotedMsg && quotedMsg.type == 'sticker') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const mediaDataTake = await decryptMedia(quotedMsg)
                    const packname = q.substring(0, q.indexOf('|') - 1)
                    const author = q.substring(q.lastIndexOf('|') + 2)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaDataTake.toString('base64')}`
                    await bocchi.sendImageAsSticker(from, imageBase64, { author: author, pack: packname })
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'sticker':
            case 'stiker':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia)
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await bocchi.sendImageAsSticker(from, imageBase64, { author: authorWm, pack: packWm, keepScale: true })
                    console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'stickergif':
            case 'stikergif':
            case 'sgif':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (isMedia && isVideo || isGif || isQuotedVideo || isQuotedGif) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        const encryptMedia = isQuotedGif || isQuotedVideo ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia)
                    const _mimetype = isQuotedVideo || isQuotedGif ? quotedMsg.mimetype : mimetype
                    const videoBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await bocchi.sendMp4AsSticker(from, videoBase64, null, { stickerMetadata: true, author: authorWm, pack: packWm, keepScale: true, fps: 30, startTime: '00:00:00.0', endTime : '00:00:05.0', crop: false, loop: 0 })
                            .then(() => {
                                console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                            })
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, eng.videoLimit(), id)
                    }
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'stickertoimg':
            case 'stikertoimg':
            case 'toimg':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (isQuotedSticker) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    try {
                        const mediaData = await decryptMedia(quotedMsg)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await bocchi.sendFile(from, imageBase64, 'sticker.jpg', '', id)
                    } catch (err) {
                        console.error(err)
                        await bocchi.reply(from, 'Error!', id)
                    }
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break

            // Moderation command
            case 'revoke':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return bocchi.reply(from, eng.botNotAdmin(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.revokeGroupInviteLink(groupId)
                await bocchi.sendTextWithMentions(from, `Group link revoked by @${sender.id.replace('@c.us', '')}`)
                break
            case 'grouplink':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const gcLink = await bocchi.getGroupInviteLink(groupId)
                await bocchi.reply(from, gcLink, id)
                break
            case 'mutegc':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return bocchi.reply(from, eng.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.setGroupToAdminsOnly(groupId, true)
                    await bocchi.sendText(from, eng.gcMute())
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.setGroupToAdminsOnly(groupId, false)
                    await bocchi.sendText(from, eng.gcUnmute())
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'add':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (args.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                try {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.addParticipant(from, `${args[0]}@c.us`)
                    await bocchi.sendText(from, '🎉 Welcome! 🎉')
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, 'Error!', id)
                }
                break
            case 'kick':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (mentionedJidList.length === 0) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.sendTextWithMentions(from, `Good bye~\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
                for (let i of mentionedJidList) {
                    if (groupAdmins.includes(i)) return await bocchi.sendText(from, eng.wrongFormat())
                    await bocchi.removeParticipant(groupId, i)
                }
                break
            case 'promote':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (groupAdmins.includes(mentionedJidList[0])) return await bocchi.reply(from, eng.adminAlready(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.promoteParticipant(groupId, mentionedJidList[0])
                await bocchi.reply(from, eng.ok(), id)
                break
            case 'demote':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (mentionedJidList.length !== 1) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (mentionedJidList[0] === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                if (!groupAdmins.includes(mentionedJidList[0])) return await bocchi.reply(from, eng.notAdmin(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                await bocchi.demoteParticipant(groupId, mentionedJidList[0])
                await bocchi.reply(from, eng.ok(), id)
                break
            case 'leave':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                await bocchi.sendText(from, 'Bye~ 👋')
                await bocchi.leaveGroup(groupId)
                break
            case 'everyone':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const groupMem = await bocchi.getGroupMembers(groupId)
                const lastEveryone = daily.getLimit(sender.id, _daily)
                if (lastEveryone !== undefined && cd - (Date.now() - lastEveryone) > 0) {
                    const time = ms(cd - (Date.now() - lastEveryone))
                    await bocchi.reply(from, eng.daily(time), id)
                } else if (isOwner || isPremium) {
                    let txt = '╔══✪〘 *EVERYONE* 〙✪══\n'
                        for (let i = 0; i < groupMem.length; i++) {
                            txt += '╠➥'
                            txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
                        }
                    txt += '╚═〘 *B O C C H I  B O T* 〙'
                    await bocchi.sendTextWithMentions(from, txt)
                } else {
                    let txt = '╔══✪〘 *EVERYONE* 〙✪══\n'
                        for (let i = 0; i < groupMem.length; i++) {
                            txt += '╠➥'
                            txt += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
                        }
                    txt += '╚═〘 *B O C C H I  B O T* 〙'
                    await bocchi.sendTextWithMentions(from, txt)
                    daily.addLimit(sender.id, _daily)
                }
                break
            case 'groupicon':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return bocchi.reply(from, eng.botNotAdmin(), id)
                if (isMedia && isImage || isQuotedImage) {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await bocchi.reply(from, eng.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await bocchi.setGroupIcon(groupId, imageBase64)
                    await bocchi.sendText(from, eng.ok())
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'antilink':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (isDetectorOn) return await bocchi.reply(from, eng.detectorOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antilink.push(groupId)
                    fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
                    await bocchi.reply(from, eng.detectorOn(name, formattedTitle), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antilink.splice(groupId, 1)
                    fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
                    await bocchi.reply(from, eng.detectorOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'leveling':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isLevelingOn) return await bocchi.reply(from, eng.levelingOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                    await bocchi.reply(from, eng.levelingOn(), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                    await bocchi.reply(from, eng.levelingOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'welcome':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isWelcomeOn) return await bocchi.reply(from, eng.welcomeOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _welcome.push(groupId)
                    fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welcome))
                    await bocchi.reply(from, eng.welcomeOn(), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _welcome.splice(groupId, 1)
                    fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welcome))
                    await bocchi.reply(from, eng.welcomeOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'autosticker':
            case 'autostiker':
            case 'autostik':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isAutoStickerOn) return await bocchi.reply(from, eng.autoStikOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _autosticker.push(groupId)
                    fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(_autosticker))
                    await bocchi.reply(from, eng.autoStikOn(), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _autosticker.splice(groupId, 1)
                    fs.writeFileSync('./database/group/autosticker.json', JSON.stringify(_autosticker))
                    await bocchi.reply(from, eng.autoStikOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'antinsfw':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (isDetectorOn) return await bocchi.reply(from, eng.antiNsfwOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antinsfw.push(groupId)
                    fs.writeFileSync('./database/group/antinsfw.json', JSON.stringify(_antinsfw))
                    await bocchi.reply(from, eng.antiNsfwOn(name, formattedTitle), id)
                } else if (ar[0] === 'disable') {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _antinsfw.splice(groupId, 1)
                    fs.writeFileSync('./database/group/antinsfw.json', JSON.stringify(_antinsfw))
                    await bocchi.reply(from, eng.antiNsfwOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'badwords':
            case 'badword':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (!isBotGroupAdmins) return await bocchi.reply(from, eng.botNotAdmin(), id)
                if (ar[0] === 'enable') {
                    if (isAntiBadWords) return await bocchi.reply(from, eng.antiBadWordsOnAlready(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _badwords.push(groupId)
                    fs.writeFileSync('./database/group/badwords.json', JSON.stringify(_badwords))
                    await bocchi.reply(from, eng.antiBadWordsOn(name, formattedTitle), id)
                } else if (ar[0] === 'disable') {
                    console.log(ar.splice(1).toString())
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    _badwords.splice(groupId, 1)
                    fs.writeFileSync('./database/group/badwords.json', JSON.stringify(_badwords))
                    await bocchi.reply(from, eng.antiBadWordsOff(), id)
                } else if (ar[0] === 'add') {
                    const newBadwords = ar.splice(1)
                    if (newBadwords.length === 0) return await bocchi.reply(from, eng.wrongFormat(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    badwords.addWords(...newBadwords)
                    await bocchi.reply(from, eng.ok(), id)
                } else if (ar[0] === 'remove') {
                    const newBadwords = ar.splice(1)
                    if (newBadwords.length === 0) return await bocchi.reply(from, eng.wrongFormat(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await bocchi.reply(from, eng.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    badwords.removeWords(...newBadwords)
                    await bocchi.reply(from, eng.ok(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break

            // Owner command
            case 'block':
            case 'blok':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (mentionedJidList.length !== 0) {
                    for (let blok of mentionedJidList) {
                        if (blok === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                        await bocchi.contactBlock(blok)
                    }
                    await bocchi.reply(from, eng.ok(), id)
                } else if (args.length === 1) {
                    await bocchi.contactBlock(args[0] + '@c.us')
                    await bocchi.reply(from, eng.ok(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'unblock':
            case 'unblok':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (mentionedJidList.length !== 0) {
                    for (let blok of mentionedJidList) {
                        if (blok === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                        await bocchi.contactUnblock(blok)
                    }
                    await bocchi.reply(from, eng.ok(), id)
                } else if (args.length === 1) {
                    await bocchi.contactUnblock(args[0] + '@c.us')
                    await bocchi.reply(from, eng.ok(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'bc':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q) return await bocchi.reply(from, eng.emptyMess(), id)
                const chats = await bocchi.getAllChatIds()
                for (let bcs of chats) {
                    let cvk = await bocchi.getChatById(bcs)
                    if (!cvk.isReadOnly) await bocchi.sendText(bcs, `${q}\n\n- Bot Admin\n_Broadcasted message_`)
                }
                await bocchi.reply(from, eng.ok(), id)
                break
            case 'clearall':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                const allChats = await bocchi.getAllChats()
                for (let delChats of allChats) {
                    await bocchi.deleteChat(delChats.id)
                }
                await bocchi.reply(from, eng.ok(), id)
                break
            case 'leaveall':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q) return await bocchi.reply(from, eng.emptyMess(), id)
                const allGroup = await bocchi.getAllGroups()
                for (let gclist of allGroup) {
                    await bocchi.sendText(gclist.contact.id, q)
                    await bocchi.leaveGroup(gclist.contact.id)
                }
                await bocchi.reply(from, eng.ok())
                break
            case 'getses':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                const ses = await bocchi.getSnapshot()
                await bocchi.sendFile(from, ses, 'session.png', eng.ok())
                break
            case 'ban':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (ar[0] === 'add') {
                    if (mentionedJidList.length !== 0) {
                        for (let benet of mentionedJidList) {
                            if (benet === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                            _ban.push(benet)
                            fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        }
                        await bocchi.reply(from, eng.ok(), id)
                    } else {
                        _ban.push(args[1] + '@c.us')
                        fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        await bocchi.reply(from, eng.ok(), id)
                    }
                } else if (ar[0] === 'del') {
                    if (mentionedJidList.length !== 0) {
                        if (mentionedJidList[0] === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                        _ban.splice(mentionedJidList[0], 1)
                        fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        await bocchi.reply(from, eng.ok(), id)
                    } else{
                        _ban.splice(args[1] + '@c.us', 1)
                        fs.writeFileSync('./database/bot/banned.json', JSON.stringify(_ban))
                        await bocchi.reply(from, eng.ok(), id)
                    }
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'eval':
            case 'ev':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q) return await bocchi.reply(from, eng.wrongFormat(), id)
                try {
                    let evaled = await eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await bocchi.sendText(from, evaled)
                } catch (err) {
                    console.error(err)
                    await bocchi.reply(from, err, id)
                }
                break
            case 'shutdown':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                await bocchi.sendText(from, 'Good bye~ 👋')
                    .then(async () => await bocchi.kill())
                    .catch(() => new Error('Target closed.'))
                break
            case 'premium':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (ar[0] === 'add') {
                    if (mentionedJidList.length !== 0) {
                        for (let prem of mentionedJidList) {
                            if (prem === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                            premium.addPremiumUser(prem, args[2], _premium)
                            await bocchi.reply(from, `*── 「 PREMIUM ADDED 」 ──*\n\n➸ *ID*: ${prem}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                        }
                    } else {
                        premium.addPremiumUser(args[1] + '@c.us', args[2], _premium)
                        await bocchi.reply(from, `*── 「 PREMIUM ADDED 」 ──*\n\n➸ *ID*: ${args[1]}@c.us\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`, id)
                    }
                } else if (ar[0] === 'del') {
                    if (mentionedJidList.length !== 0) {
                        if (mentionedJidList[0] === botNumber) return await bocchi.reply(from, eng.wrongFormat(), id)
                        _premium.splice(premium.getPremiumPosition(mentionedJidList[0], _premium), 1)
                        fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                        await bocchi.reply(from, eng.ok(), id)
                    } else {
                        _premium.splice(premium.getPremiumPosition(args[1] + '@c.us', _premium), 1)
                        fs.writeFileSync('./database/bot/premium.json', JSON.stringify(_premium))
                        await bocchi.reply(from, eng.ok(), id)
                    }
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'setstatus':
            case 'setstats':
            case 'setstat':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q) return await bocchi.reply(from, eng.emptyMess(), id)
                await bocchi.setMyStatus(q)
                await bocchi.reply(from, eng.ok(), id)
                break
            case 'mute':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(pushname), id)
                if (!isGroupMsg) return await bocchi.reply(from, eng.groupOnly(), id)
                if (!isGroupAdmins) return await bocchi.reply(from, eng.adminOnly(), id)
                if (ar[0] === 'enable') {
                    if (isMute) return await bocchi.reply(from, eng.muteChatOnAlready(), id)
                    _mute.push(groupId)
                    fs.writeFileSync('./database/bot/mute.json', JSON.stringify(_mute))
                    await bocchi.reply(from, eng.muteChatOn(), id)
                } else if (ar[0] === 'disable') {
                    _mute.splice(groupId, 1)
                    fs.writeFileSync('./database/bot/mute.json', JSON.stringify(_mute))
                    await bocchi.reply(from, eng.muteChatOff(), id)
                } else {
                    await bocchi.reply(from, eng.wrongFormat(), id)
                }
                break
            case 'setname':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                if (!q || q.length > 25) return await bocchi.reply(from, eng.wrongFormat(), id)
                await bocchi.setMyName(q)
                await bocchi.reply(from, eng.nameChanged(q), id)
                break
            case 'grouplist':
                if (!isRegistered) return await bocchi.reply(from, eng.notRegistered(), id)
                const getGroups = await bocchi.getAllGroups()
                let txtGc = '*── 「 GROUP LIST 」 ──*\n'
                for (let i = 0; i < getGroups.length; i++) {
                    txtGc += `\n\n❏ *Name*: ${getGroups[i].name}\n❏ *Unread messages*: ${getGroups[i].unreadCount} messages`
                }
                await bocchi.sendText(from, txtGc)
                break
            case 'reset':
                if (!isOwner) return await bocchi.reply(from, eng.ownerOnly(), id)
                _limit = []
                console.log('Hang tight, it\'s time to reset usage limits...')
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                await bocchi.reply(from, eng.ok(), id)
                console.log('Success!')
                break
            default:
                if (isCmd) {
                    await bocchi.reply(from, eng.cmdNotFound(command), id)
                }
                break
        }
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err)
    }
}
/********** END OF MESSAGE HANDLER **********/