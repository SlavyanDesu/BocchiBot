exports.wait = () => {
    return `Please wait~`
}

exports.ok = () => {
    return `Ok desu~`
}

exports.wrongFormat = () => {
    return `Wrong format!`
}

exports.emptyMess = () => {
    return `Please provide a message!`
}

exports.cmdNotFound = () => {
    return `Command not found!`
}

exports.blocked = () => {
    return `Bot is not receiving call. You have have been blocked due to rules breaking!\n\nPlease contact owner: wa.me/6281294958473`
}

exports.ownerOnly = () => {
    return `This command is only for Owner-sama!`
}

exports.doneOwner = () => {
    return `Finished, Owner-sama~`
}

exports.groupOnly = () => {
    return `This command only work in a group!`
}

exports.adminOnly = () => {
    return `Only admin who can use this command!`
}

exports.notNsfw = () => {
    return `NSFW command is not enabled!`
}

exports.nsfwOn = () => {
    return `NSFW command successfully *enabled*!\nType *$nsfwmenu* to see command list.`
}

exports.nsfwOff = () => {
    return `NSFW command successfully *disabled*!`
}

exports.addedGroup = (chat) => {
    return `Thank you for inviting me, *${chat.contact.name}* members!\n\nType *$rules* first ok~`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `-----[ HALL OF SHAME ]-----

Total blocked: *${blockNumber.length}* user(s)\n`
}

exports.notPremium = () => {
    return `Sorry! This command is for premium user only.`
}

exports.notAdmin = () => {
    return `The user is not an admin!`
}

exports.adminAlready = () => {
    return `Can't promote user who is an admin!`
}

exports.botNotPremium = () => {
    return `The bot is not supported premium commands. Please contact the owner of the bot.`
}

exports.botNotAdmin = () => {
    return `Set bot to admin first!`
}

exports.ytLimit = () => {
    return `Video size is too large!`
}

exports.ytFound = (res) => {
    return `Video found!\n\nTitle:\n${res.title}\n\nDescription:\n${res.desc}\n\nDuration: ${res.duration} minutes\n\nSending media, please wait...`
}

exports.notRegistered = () => {
    return `Your account is not registered in my database!\n\nPlease register using this format:\n*$register* <name | region>\n\nWithout <>`
}

exports.registered = () => {
    return `Congratulations! You have been registered. Type *$rules* first ok~`
}

exports.registeredAlready = () => {
    return `Your account is already registered.`
}

exports.received = (pushname) => {
    return `Hello ${pushname}!\nThanks for your reports, we will receive it ASAP.`
}

exports.textMenu = (pushname) => {
    return `
-----[ COMMANDS ]-----

Hello ${pushname}~

Ignore <>

Bot:
1. *$rules*
MUST READ.
Aliases: *rule*
Usage: *$rules*

2. *$menu*
Check commands list.
Aliases: -
Usage: *$menu*

3. *$nsfw*
Toogle NSFW command.
Aliases: -
Usage: *$nsfw* <enable/disable>

4. *$menuowner*
Check owner commands list.
Aliases: -
Usage: *$menuowner*

5. *$usage*
Check server's usage.
Aliases: -
Usage: *$usage*

6. *$listblock*
Check a blocked person(s) by bot.
Aliases: -
Usage: *listblock*

7. *$ping*
Check bot's speed, not YOUR connection.
Aliases: *p*
Usage: *$ping*

8. *$delete*
Delete bot's message.
Aliases: *del*
Usage: Reply the message that is going to be deleted by using caption *$delete*.

9. *$moderation*
Check moderation commands list.
Aliases: -
Usage: *$moderation*

10. *$report*
Report bugs to dev.
Aliases: -
Usage: *$report* <message>

Utility:
1. *$say*
Make the bot say something!
Aliases: -
Usage: *$say* <text>

2. *$lyric*
Search for a song's lyric.
Aliases: *lirik*
Usage: *$lyric* <song's title>

3. *$shortlink*
Create a shortlink
Aliases: -
Usage: *$shortlink* <link>

4. *$wikipedia*
Search Wikipedia from given text.
Aliases: *wiki*
Usage: *$wikipedia* <text>

5. *$kbbi*
Send a definition of Indonesian vocab.
Aliases: -
Usage: *$kbbi* <text>

6. *$igstalk*
Stalk Instagram account.
Aliases: -
Usage: *$igstalk* <username>

Sticker:
1. *$sticker*
Create a sticker from sending or replying an image.
Aliases: *stiker*
Usage: Send an image with caption *$sticker* or reply an image with caption *$sticker*.

Weeb zone:
1. *$neko*
Sending neko anime girl picture :3
Aliases: -
Usage: *$neko*

2. *$wallpaper*
Sending an anime wallpaper
Aliases: *wp*
Usage: *$wallpaper*

3. *$kemono*
Sending a kemonomini anime girl picture! UwU
Aliases: -
Usage: *$kemono*

4. *$kusonime*
Search for anime info and batch download link from Kusonime.
Aliases: -
Usage: *$kusonime* <anime title>

5. *$komiku*
Search for manga info and downloas link from Komiku.
Aliases: -
Usage: *$komiku* <manga title>

6. *$wait*
Search for anime source from screenshot scene.
Aliases: -
Usage: Send a screenshot with caption *$wait* or reply a screenshot with caption *$wait*.

7. *$source*
Search for source from doujin panel, illustration, and anime images related.
Aliases: *sauce*
Usage: Send an image with caption *$source* or reply an image with caption *$source*.

8. *$waifu*
Sending for random waifu pics.
Aliases: -
Usage: *$waifu*
    `
}

exports.textRules = () => {
    return `
-----[ THE RULES ]-----
1. Do NOT spam the bot.
Penalty: *WARN/SOFT BLOCK*

2. Do NOT call the bot.
Penalty: *SOFT BLOCK*

3. Do NOT exploiting the bot.
Penalty: *PERMANENT BLOCK*

If you understand the rules, type *$menu* to start!

Source code by:
wa.me/6281294958473 (Kal)
wa.me/6282125076212 (Riz)
    `
}

exports.textOwner = () => {
    return `
Hello Owner-sama ヽ(・∀・)ﾉ!

1. *$bc*
Create a brodcast message.
Aliases: -
Usage: *$bc* <text> 

2. *$clearall*
Delete all chats from the bot account.
Aliases: -
Usage: *$clearall*

3. *$getses*
Take a screenshot from the current session.
Aliases: -
Usage: *$getses*

4. *$ban*
Ban user.
Aliases: -
Usage: *$ban* @user1

5. *$unban*
Unban user.
Aliases: -
Usage: *$unban* @user1

6. *$leaveall*
Leave from all groups.
Aliases: -
Usage: *$leaveall*

7. *$eval*
Evaluates JS code.
Aliases: *ev*
Usage: *$eval*

8. *$shutdown*
Shutdown the bot.
Aliases: -
Usage: *$shutdown*

9. *$pradd*
Add premium user.
Aliases: -
Usage: *$pradd* @user1

10. *$prdel*
Delete premium user.
Aliases: -
Usage: *$prdel* @user1
    `
}

exports.textNsfw = () => {
    return `
-----[ NSFW ]-----
1. *$lewds*
Sending anime lewds.
Aliases: *lewd*
Usage: *$lewds*

2. *$multilewds*
Sending anime lewds pics up to 5 images. (PREMIUM ONLY)
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *$multilewds*

3. *$nh*
Sending doujinshi info from nHentai.
Aliases: -
Usage: *$nh* <code>

4. *$nhdl*
Download doujinshi from nHentai and sending it as PDF file. (PREMIUM ONLY)
Aliases: -
Usage: *$nhdl* <code>

5. *$nekopoi*
Sending latest video link from Nekopoi.
Aliases: -
Usage: *$nekopoi*

6. *$multifetish*
Sending fetish pics up to 5 images. (PREMIUM ONLY)
Aliases: *mfetish*
Usage: *$multifetish* <armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao>

7. *$waifu18*
Sending random NSFW waifu pics.
Aliases: -
Usage: *$waifu18*
    `
}

exports.textModeration = () => {
    return `
-----[ MODERATION ]-----
1. *$add*
Add user to group.
Aliases: -
Usage: *$add* 628xxxxxxxxxx

2. *$kick*
Kick member from group.
Aliases: -
Usage: *$kick* @member1

3. *$promote*
Promote member to admin.
Aliases: -
Usage: *$promote* @member1

4. *$demote*
Demote member from admin.
Aliases: -
Usage: *$demote* @member1

5. *$leave*
Bot will leave the current group.
Aliases: -
Usage: *$leave*

6. *$everyone*
Mention all group members.
Aliases: -
Usage: *$everyone*
    `
}
---------------------------------
const fs = require('fs-extra')
const { prefix, ownerNumber } = JSON.parse(fs.readFileSync('config.json'))

exports.wait = () => {
    return `Please wait a moment~`
}

exports.ok = () => {
    return `Ok desu~`
}

exports.wrongFormat = () => {
    return `Incorrect format! Please check how to use it at *${prefix}menu.`
}

exports.emptyMess = () => {
    return `Please enter the message you wish to convey!`
}

exports.cmdNotFound = () => {
    return `Command not found!`
}

exports.blocked = () => {
    return `Bot not receiving calls. Because you have broken the rules, then you have been blocked!\n\nHarap hubungi owner: wa.me/${ownerNumber.replace('@c.us', '')}`
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
    return `NSFW command has not been activated!`
}

exports.nsfwOn = () => {
    return `NSFW Command was successfully *activated*!`
}

exports.nsfwOff = () => {
    return `NSFW Command was successfully *disabled*!`
}

exports.addedGroup = (chat) => {
    return `Thank you for inviting me, members *${chat.contact.name}*!\n\nPlease register by typing:\n*${prefix} register name | area`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `------[ HALL OF SHAME ]------
    
Total blocked: *${blockNumber.length}* user\n`
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
    return `*Video found!*\n\n➸ *Title*:${res.title}\n➸ *Description*:${res.desc}\n➸ *Duration*: ${res.duration} minute\n\nMedia is being shipped, please wait...`
}

exports.notRegistered = () => {
    return `You are not registered in the database yet!\n\nPlease register with the format:\n*${prefix}register* name | area`
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
    return `Sorry, but you have reached the limit using this command.\nPlease wait *${time.hours}* hour *${time.minutes}* minute *${time.seconds}* more seconds.`
}

exports.videoLimit = () => {
    return `The video size is too large!`
}

exports.joox = (result) => {
    return `*Song found!*\n\n➸ *Singer*: ${result[0].penyanyi}\n➸ *Judul*: ${result[0].judul}\n➸ *Album*: ${result[0].album}\n➸ *Ext*: ${result[0].ext}\n➸ *Size*: ${result[0].filesize}\n➸ *Duration*: ${result[0].duration}\n\nMedia is being shipped, please wait...`
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

Type *${prefix}menu* <angka_index> to open the selected page menu.

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
Usage: *${prefix}facebook* <video link>

2. *${prefix}ytmp3*
Download YouTube audio.
Aliases: -
Usage: *${prefix}ytmp3* <link>

3. *${prefix}ytmp4*
Download YouTube video.
Aliases: -
Usage: *${prefix}ytmp4* <link>

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
Usage: *${prefix}menu* <angka_index>

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
Usage: Reply to deleted messages with a caption *${prefix}del*.

7. *${prefix}report*
Report bugs to dev.
Aliases: -
Usage: *${prefix}report* <pesan>

_Index of [2]_
    `
}

exports.menuMisc = () => {
    return `
-----[ MISC ]-----

1. *${prefix}say*
The bot will repeat your message.
Aliases: -
Usage: *${prefix}say* <teks>

2. *${prefix}lirik*
Search for song lyrics.
Aliases: -
Usage: *${prefix}lirik* <judul lagu>

3. *${prefix}shortlink*
Create a shortlink.
Aliases: -
Usage: *${prefix}shortlink* <link>

4. *${prefix}wikipedia*
Send Wikipedia from the given text.
Aliases: *wiki*
Usage: *${prefix}wikipedia* <teks>

5. *${prefix}kbbi*
Send word definitions from KBBI.
Aliases: -
Usage: *${prefix}kbbi* <teks>

6. *${prefix}igstalk*
Stalk Instagram account.
Aliases: -
Usage: *${prefix}igstalk* <username>

_Index of [3]_
    `
}

exports.menuSticker = () => {
    return `
-----[ STICKER ]-----

1. *${prefix}sticker*
Make stickers from images sent or replied.
Aliases: *stiker*
Usage: Send pictures with captions *${prefix}sticker* or reply to the image with a caption *${prefix}sticker*.

2. *${prefix}stickergif*
Create stickers from sent or replied MP4 or GIF videos.
Aliases: *stikergif*
Usage: Send videos / GIFs with captions *${prefix}stickergif* or reply video / GIF with caption *${prefix}stickergif*.

3. *${prefix}stickerlightning*
Create a lightning sticker from the images you send or reply to.
Aliases: *slightning*
Usage: Send pictures with captions *${prefix}stickerlightning* or reply to the image with a caption *${prefix}stickerlightning*.

4. *${prefix}stickerfire*
Create fire stickers from images that are sent or replied to.
Aliases: *sfire*
Usage: Send pictures with captions *${prefix}stickerfire* or reply to the image with a caption *${prefix}stickerfire*.

3. *${prefix}ttg*
Create text to GIF stickers.
Aliases: -
Usage: *${prefix}ttg* <teks>

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
Usage: *${prefix}kusonime* <judul anime>

5. *${prefix}komiku*
Looking for manga info and download links on Komiku.
Aliases: -
Usage: *${prefix}komiku* <judul manga>

6. *${prefix}wait*
Search anime source from the screenshot scene.
Aliases: -
Usage: Send a screenshot with a caption *${prefix}wait* or reply screenshot with caption *${prefix}wait*.

7. *${prefix}source*
Look for sources from the doujin panel, illustrations, and images related to anime.
Aliases: *sauce*
Usage: Send pictures with captions *${prefix}source* or reply to the image with a caption *${prefix}source*.

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
Usage: *${prefix}hartatahta* <nama>

2. *${prefix}calender*
Create a calendar from sent photos.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}calender* atau reply gambar dengan caption *${prefix}calender*.

3. *${prefix}partner*
Weton match.
Aliases: *pasangan*
Usage: *${prefix}partner* <nama | pasangan>

4. *${prefix}zodiac*
Weekly zodiac forecast.
Aliases: *zodiak*
Usage: *${prefix}zodiac* <zodiak>

5. *${prefix}write*
Make notes written in a book.
Aliases: *nulis*
Usage: *${prefix}write* <teks>

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
Turn off / turn on NSFW mode.
Aliases: -
Usage: *${prefix}nsfw* <enable/disable>

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
Usage: *${prefix}nh* <kode>

4. *${prefix}nhdl*
Download doujin from nHentai as a PDF file. (PREMIUM ONLY)
Aliases: -
Usage: *${prefix}nhdl* <kode>

5. *${prefix}nekopoi*
Send the latest video link Nekopoi.
Aliases: -
Usage: *${prefix}nekopoi*

6. *${prefix}multifetish*
Send up to 5 fetish pics. (PREMIUM ONLY)
Aliases: *mfetish*
Usage: *${prefix}multifetish* <armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao>

7. *${prefix}waifu18*
Send random NSFW waifu photos.
Aliases: -
Usage: *${prefix}waifu18*

8. *${prefix}fetish*
Send fetish pics.
Aliases: -
Usage: *${prefix}fetish* <armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao>

9. *${prefix}phdl*
Download videos from Pornhub.
Aliases: -
Usage *${prefix}phdl* <link>

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
Usage: *${prefix}bc* <teks> 

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
Usage: *${prefix}ban* <add/del> @user/62812xxxxxxxx

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

_Index of [9]_
    `
}

exports.rules = () => {
    return `
-----[ RULES ]-----

1. Don't spam bot. 
Penalty: *WARN/SOFT BLOCK*

2. Don't call bot.
Penalty: *SOFT BLOCK*

3. Don't exploit bots.
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
The owner / hoster of this bot is independent from the responsibility and supervision of the developer (Slavyan).
Owner / hoster may plagiarize, add, delete, replace source code with notes * do not trade * in any form.
If an error occurs, the first person you should contact is the owner / hoster.  
You can see the source code for this on GitHub:
https://github.com/SlavyanDesu/BocchiBot

Contact person:
wa.me/${ownerNumber.replace('@c.us', '')} (Owner/hoster)
wa.me/6281294958473 (Developer)

You guys can also support me to keep this bot up to date with
081294958473 (OVO/Telkomsel/GoPay)

Thank you!

Slavyan.
    `
}
