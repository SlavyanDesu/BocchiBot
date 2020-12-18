const fs = require('fs-extra')
const { prefix, ownerNumber } = JSON.parse(fs.readFileSync('config.json'))

exports.wait = () => {
    return `Please wait a moment~`
}

exports.ok = () => {
    return `Ok desu~`
}

exports.wrongFormat = () => {
    return `Incorrect format! Please check how to use it at *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Please enter the message you wish to convey!`
}

exports.cmdNotFound = () => {
    return `Command not found!`
}

exports.blocked = () => {
    return `Bot not receiving calls. Because you have broken the rules, then you have been blocked!\n\nContact the owner: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `This command is special Owner-sama!`
}

exports.doneOwner = () => {
    return `Already completed, Owner-sama~`
}

exports.groupOnly = () => {
    return `This command can only be used within a group!`
}

exports.adminOnly = () => {
    return `This command can only be used by group admins!`
}

exports.notNsfw = () => {
    return `NSFW command has not been enabled!`
}

exports.nsfwOn = () => {
    return `NSFW Command was successfully *enabled*!`
}

exports.nsfwOff = () => {
    return `NSFW Command was successfully *disabled*!`
}

exports.addedGroup = (chat) => {
    return `Thank you for inviting me, members *${chat.contact.name}*!\n\nPlease register by typing:\n*${prefix}register* name | age`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `------[ HALL OF SHAME ]------
    
Total blocked: *${blockNumber.length}* user(s)\n`
}

exports.notPremium = () => {
    return `Sorry! This command is only for premium users.`
}

exports.notAdmin = () => {
    return `The user is not an admin!`
}

exports.adminAlready = () => {
    return `Cannot promote a user who is an admin!`
}

exports.botNotPremium = () => {
    return `This bot does not support premium commands. Please contact the owner of this bot.`
}

exports.botNotAdmin = () => {
    return `Make the bot as admin first!`
}

exports.ytFound = (res) => {
    return `*Video found!*\n\n➸ *Title*:${res.title}\n➸ *Description*:${res.desc}\n➸ *Duration*: ${res.duration} minutes\n\nMedia is being shipped, please wait...`
}

exports.notRegistered = () => {
    return `You are not registered in the database yet!\n\nPlease register with the format:\n*${prefix}register* name | age`
}

exports.registered = () => {
    return `Congratulations! You have registered.\nType *${prefix}rules* first okay~`
}

exports.registeredAlready = () => {
    return `You have registered before.`
}

exports.received = (pushname) => {
    return `Hello ${pushname}!\nThank you for reporting, we will receive your report soon.`
}

exports.limit = (time) => {
    return `Sorry, but you have reached the limit using this command.\nPlease wait *${time.hours}* hour(s) *${time.minutes}* minute(s) *${time.seconds}* second(s) more.`
}

exports.videoLimit = () => {
    return `The video size is too large!`
}

exports.joox = (result) => {
    return `*Song found!*\n\n➸ *Singer*: ${result[0].penyanyi}\n➸ *Title*: ${result[0].judul}\n➸ *Album*: ${result[0].album}\n➸ *Ext*: ${result[0].ext}\n➸ *Size*: ${result[0].filesize}\n➸ *Duration*: ${result[0].duration}\n\nMedia is being shipped, please wait...`
}

exports.gsm = (result) => {
    return `➸ *Phone model*: ${result.title}\n➸ *Spesification*: ${result.spec}`
}

exports.receipt = (result) => {
    return `${result.title}\n\n${result.desc}\n\n*Ingredients*: ${result.bahan}\n\n*Steps*:\n${result.cara}`
}

exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `➸ *Title*: ${title}\n➸ *Channel*: ${channel}\n➸ *Durations*: ${duration}\n➸ *Views*: ${views}\n➸ *Link*: ${urlyt}`
}

exports.profile = (username, status, premi, benet, adm) => {
    return `-----[ *USER INFO* ]-----\n\n➸ *Username*: ${username}\n➸ *Status*: ${status}\n➸ *Premium*: ${premi}\n➸ *Banned*: ${benet}\n➸ *Admin*: ${adm}`
}

exports.detectorOn = (name, formattedTitle) => {
    return `*「 ANTI GROUP LINK 」*\n\nAnnouncement for all group members ${(name || formattedTitle)}\nIf somebody sending a group link on this group, they will be kicked automatically by bot.\n\nThank you.\n- Admin ${(name || formattedTitle)}`
}

exports.detectorOff = () => {
    return `Anti-group link feature was successfully *disabled*!`
}

exports.detectorOnAlready = () => {
    return `Anti-group link feature has been enabled before.`
}

exports.linkDetected = () => {
    return `*「 ANTI GROUP LINK 」*\n\nYou've sent a group link!\nSorry, but you have to leave...\nTake care~`
}

exports.levelingOn = () => {
    return `Leveling feature was successfully *enabled*!`
}

exports.levelingOff = () => {
    return `Leveling feature was successfully *disabled*!`
}

exports.levelingOnAlready = () => {
    return `Leveling feature has been enabled before.`
}

exports.levelingNotOn = () => {
    return `Leveling feature has not been enabled!`
}

exports.levelNull = () => {
    return `You don't have any level yet!`
}

exports.welcome = (event) => {
    return `Welcome @${event.who.replace('@c.us', '')}!`
}

exports.welcomeOn = () => {
    return `Welcome feature was successfully *enabled*!`
}

exports.welcomeOff = () => {
    return `Welcome feature was successfully *disabled*!`
}

exports.welcomeOnAlready = () => {
    return `Welcome feature has been enabled before.`
}

exports.minimalDb = () => {
    return `Need at least *10* users that have a level in database!`
}

exports.menu = () => {
    return `
------[ WELCOME ]-----

The following menus are available:

*[1]* Downloader
*[2]* Bot
*[3]* Misc
*[4]* Sticker
*[5]* Weeaboo
*[6]* Fun
*[7]* Moderation
*[8]* NSFW
*[9]* Owner
*[10]* Leveling [ALPHA]

Type *${prefix}menu* index_number to open the selected page menu.

Note:
Treat the bot well, dev will act firmly if the user violates the rules.
This bot has anti-spam in the form of a cooldown command for *5 seconds* every time you use it.

Sincerely,
Slavyan
    `
}

exports.menuDownloader = () => {
    return `
-----[ DOWNLOADER ]-----

1. *${prefix}facebook*
Download Facebook video.
Aliases: *fb*
Usage: *${prefix}facebook* video_link

2. *${prefix}ytmp3*
Download YouTube audio.
Aliases: -
Usage: *${prefix}ytmp3* link

3. *${prefix}ytmp4*
Download YouTube video.
Aliases: -
Usage: *${prefix}ytmp4* link

_Index of [1]_
    `
}

exports.menuBot = () => {
    return `
-----[ BOT ]-----

1. *${prefix}rules*
Must read.
Aliases: *rule*
Usage: *${prefix}rules*

2. *${prefix}menu*
Displays available commands.
Aliases: -
Usage: *${prefix}menu* index_number

3. *${prefix}status*
Displays bot status.
Aliases: *stats*
Usage: *${prefix}status*

4. *${prefix}listblock*
Check blocked numbers.
Aliases: -
Usage: *${prefix}listblock*

5. *${prefix}ping*
Check the bot speed.
Aliases: *p*
Usage: *${prefix}ping*

6. *${prefix}delete*
Delete messages from bots.
Aliases: *del*
Usage: Reply to deleted messages with a caption *${prefix}delete*.

7. *${prefix}report*
Report bugs to dev.
Aliases: -
Usage: *${prefix}report* text

8. *${prefix}tos*
Terms of service.
Aliases: -
Usage: *${prefix}tos*

9. *${prefix}join*
Join to group via link.
Aliases: -
Usage: *${prefix}join* group's_link

_Index of [2]_
    `
}

exports.menuMisc = () => {
    return `
-----[ MISC ]-----

1. *${prefix}say*
The bot will repeat your message.
Aliases: -
Usage: *${prefix}say* text

2. *${prefix}lirik*
Search for song lyrics.
Aliases: -
Usage: *${prefix}lirik* song's_title

3. *${prefix}shortlink*
Create a shortlink.
Aliases: -
Usage: *${prefix}shortlink* link

4. *${prefix}wikipedia*
Send Wikipedia from the given text.
Aliases: *wiki*
Usage: *${prefix}wikipedia* text

5. *${prefix}kbbi*
Send word definitions from KBBI.
Aliases: -
Usage: *${prefix}kbbi* text

6. *${prefix}igstalk*
Stalk Instagram account.
Aliases: -
Usage: *${prefix}igstalk* ig_username

7. *${prefix}gsmarena*
Sending phone info from GSMArena.
Aliases: -
Usage: *${prefix}gsmarena* phone's_model

8. *${prefix}receipt*
Sending food receipt.
Aliases: *resep*
Usage: *${prefix}receipt* food's_name

9. *${prefix}ytsearch*
Sending YouTube search results.
Aliases: *yts*
Usage: *${prefix}ytsearch* query

10. *${prefix}tts*
Create a Text to Speech. You need a language code, you can find it here https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
Aliases: -
Usage: *${prefix}tts* language_code | text

_Index of [3]_
    `
}

exports.menuSticker = () => {
    return `
-----[ STICKER ]-----

1. *${prefix}sticker*
Create stickers from images sent or replied.
Aliases: *stiker*
Usage: Send images with caption *${prefix}sticker* or reply to the images with a caption *${prefix}sticker*.

2. *${prefix}stickergif*
Create stickers from videos/GIFs.
Aliases: *stikergif*
Usage: Send videos/GIFs with caption *${prefix}stickergif* or reply to the videos/GIFs with a caption *${prefix}stickergif*.

3. *${prefix}stickerlightning*
Create lightning sticker from images.
Aliases: *slightning*
Usage: Send images with caption *${prefix}stickerlightning* or reply to the images with a caption *${prefix}stickerlightning*.

4. *${prefix}stickerfire*
Create fire stickers from images that are sent or replied to.
Aliases: *sfire*
Usage: Send images with caption *${prefix}stickerfire* or reply to the images with a caption *${prefix}stickerfire*.

3. *${prefix}ttg*
Create text to GIF stickers.
Aliases: -
Usage: *${prefix}ttg* text

4. *${prefix}stickertoimg*
Convert stickers to image.
Aliases: *stikertoimg*
Usage: Reply to the stickers with a caption *${prefix}stickertoimg*.

_Index of [4]_
    `
}

exports.menuWeeaboo = () => {
    return `
-----[ WEEABOO ]-----

1. *${prefix}neko*
Send a neko girl photo.
Aliases: -
Usage: *${prefix}neko*

2. *${prefix}wallpaper*
Send anime wallpapers.
Aliases: *wp*
Usage: *${prefix}wallpaper*

3. *${prefix}kemono*
Send kemonomimi girl photos.
Aliases: -
Usage: *${prefix}kemono*

4. *${prefix}kusonime*
Look for anime info and batch download links on Kusonime.
Aliases: -
Usage: *${prefix}kusonime* anime's_title

5. *${prefix}komiku*
Looking for manga info and download links on Komiku.
Aliases: -
Usage: *${prefix}komiku* manga's_title

6. *${prefix}wait*
Search anime source from the screenshots scene.
Aliases: -
Usage: Send screenshots with caption *${prefix}wait* or reply to the screenshots with a caption *${prefix}wait*.

7. *${prefix}source*
Look for sources from the doujin panel, illustrations, and images related to anime.
Aliases: *sauce*
Usage: Send images with caption *${prefix}source* or reply to the images with a caption *${prefix}source*.

8. *${prefix}waifu*
Send random waifu photos.
Aliases: -
Usage: *${prefix}waifu*

_Index of [5]_
    `
}

exports.menuFun = () => {
    return `
-----[ FUN ]-----

1. *${prefix}hartatahta*
Make a picture of the "Harta Tahta Nama".
Aliases: -
Usage: *${prefix}hartatahta* name

2. *${prefix}calender*
Create a calendar from sent photos.
Aliases: -
Usage: Send images with caption *${prefix}calender* or reply to the images with a caption *${prefix}calender*.

3. *${prefix}partner*
Weton match.
Aliases: *pasangan*
Usage: *${prefix}partner* name | partner

4. *${prefix}zodiac*
Weekly zodiac forecast.
Aliases: *zodiak*
Usage: *${prefix}zodiac* zodiac

5. *${prefix}write*
Make notes written in a book.
Aliases: *nulis*
Usage: *${prefix}write* text

6. *${prefix}missing*
Create a missing person images.
Aliases: -
Usage: Send images with caption *${prefix}missing* upper_text | center_text | bottom_text or reply to the images with a caption *${prefix}missing* upper_text | center_text| bottom_text.

7. *${prefix}valentine*
Create a valentine images.
Aliases: -
Usage: Send your couple's images with caption *${prefix}valentine* your_name | couple's_name or reply to the couple's images with a caption *${prefix}valentine* your_name | couple's_name.

_Index of [6]_
    `
}

exports.menuModeration = () => {
    return `
-----[ MODERATION ]-----

1. *${prefix}add*
Add users to groups.
Aliases: -
Usage: *${prefix}add* 628xxxxxxxxxx

2. *${prefix}kick*
Remove members from the group.
Aliases: -
Usage: *${prefix}kick* @member1

3. *${prefix}promote*
Promote member to become admin.
Aliases: -
Usage: *${prefix}promote* @member1

4. *${prefix}demote*
Demote member from admin.
Aliases: -
Usage: *${prefix}demote* @member1

5. *${prefix}leave*
The bot will leave the group.
Aliases: -
Usage: *${prefix}leave*

6. *${prefix}everyone*
Mention all group members.
Aliases: -
Usage: *${prefix}everyone*

7. *${prefix}nsfw*
Toogle NSFW mode.
Aliases: -
Usage: *${prefix}nsfw* enable/disable

8. *${prefix}groupicon*
Change group icon.
Aliases: -
Usage: Send images with caption *${prefix}groupicon* or reply to the images with a caption *${prefix}groupicon*.

9. *${prefix}antilink*
Toogle anti-group link feature.
Aliases: -
Usage: *${prefix}antilink* enable/disable

10. *${prefix}welcome*
Toogle welcome feature.
Aliases: -
Usage: *${prefix}welcome* enable/disable

_Index of [7]_
    `
}

exports.menuNsfw = () => {
    return `
-----[ NSFW ]-----

1. *${prefix}lewds*
Send lewd anime pict.
Aliases: *lewd*
Usage: *${prefix}lewds*

2. *${prefix}multilewds*
Send up to 5 anime lewd pics. (PREMIUM ONLY)
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *${prefix}multilewds*

3. *${prefix}nh*
Sending doujinshi info from nHentai.
Aliases: -
Usage: *${prefix}nh* code

4. *${prefix}nhdl*
Download doujin from nHentai as a PDF file. (PREMIUM ONLY)
Aliases: -
Usage: *${prefix}nhdl* code

5. *${prefix}nekopoi*
Send the latest video link Nekopoi.
Aliases: -
Usage: *${prefix}nekopoi*

6. *${prefix}multifetish*
Send up to 5 fetish pics. (PREMIUM ONLY)
Aliases: *mfetish*
Usage: *${prefix}multifetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

7. *${prefix}waifu18*
Send random NSFW waifu photos.
Aliases: -
Usage: *${prefix}waifu18*

8. *${prefix}fetish*
Send fetish pics.
Aliases: -
Usage: *${prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

9. *${prefix}phdl*
Download videos from Pornhub.
Aliases: -
Usage *${prefix}phdl* link

_Index of [8]_
    `
}

exports.menuOwner = () => {
    return `
-----[ OWNER ]-----
Hello Owner-sama ヽ(・∀・)ﾉ!

1. *${prefix}bc*
Make a broadcast.
Aliases: -
Usage: *${prefix}bc* text

2. *${prefix}clearall*
Deletes all chats on the bot account.
Aliases: -
Usage: *${prefix}clearall*

3. *${prefix}getses*
Take a screenshot of the session from the bot account.
Aliases: -
Usage: *${prefix}getses*

4. *${prefix}ban*
Add / remove banned users.
Aliases: -
Usage: *${prefix}ban* add/del @user/62812xxxxxxxx

5. *${prefix}leaveall*
Leave all groups.
Aliases: -
Usage: *${prefix}leaveall*

6. *${prefix}eval*
Evaluate the JavaScript code.
Aliases: *ev*
Usage: *${prefix}eval*

7. *${prefix}shutdown*
Shutdown bot.
Aliases: -
Usage: *${prefix}shutdown*

8. *${prefix}premium*
Add / remove premium users.
Aliases: -
Usage: *${prefix}premium* add/del @user

9. *${prefix}setstatus*
Set about me.
Aliases: *setstatus setstat*
Usage: *${prefix}status* text

_Index of [9]_
    `
}

exports.menuLeveling = () => {
    return `
-----[ LEVELING ]-----

1. *${prefix}level*
Check your level.
Aliases: -
Usage: *${prefix}level*

2. *${prefix}leaderboard*
Check leaderboard.
Aliaases: -
Usage: *${prefix}leaderboard*

_Index of [10]_
    `
}

exports.rules = () => {
    return `
-----[ RULES ]-----

1. Do NOT spam bot. 
Penalty: *WARN/SOFT BLOCK*

2. Do NOT call bot.
Penalty: *SOFT BLOCK*

3. Do NOT exploit bots.
Penalty: *PERMANENT BLOCK*

If the rules are understood, please type *${prefix}menu* to get started!

Source code by:
wa.me/6281294958473 (Kal a.k.a. Slavyan)
    `
}

// Please the owner / hoster, don't edit this, thank you.
exports.tos = () => {
    return `
-----[ TERMS OF SERVICE ]-----

This bot is an open-source bot with the real name BocchiBot which is available on GitHub for free.
The owner/hoster of this bot is independent from the responsibility and supervision of the developer (Slavyan).
Owner/hoster may plagiarize, add, delete, replace source code with notes *DO NOT SELL* this source code in any form.
If an error occurs, the first person you should contact is the owner/hoster.  

If you want to contributing to this project, visit:
https://github.com/SlavyanDesu/BocchiBot

Contact person:
wa.me/${ownerNumber.replace('@c.us', '')} (Owner/hoster)
wa.me/6281294958473 (Developer)

You guys can also support me to keep this bot up to date with:
081294958473 (OVO/Telkomsel/GoPay)

Thank you!

Slavyan.
    `
}
