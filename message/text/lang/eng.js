const fs = require('fs-extra')
const { prefix, ownerNumber } = JSON.parse(fs.readFileSync('config.json'))

exports.wait = () => {
    return `Please wait a moment~`
}

exports.ok = () => {
    return `Ok desu~`
}

exports.wrongFormat = () => {
    return `Incorrect format! Please check the usage in *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Please enter the message!`
}

exports.cmdNotFound = (cmd) => {
    return `Command *${prefix}${cmd}* not found!`
}

exports.blocked = () => {
    return `Bot not receiving calls. You have been blocked because breaking the rules!\n\nContact the owner: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `This command only Owner-sama can use!`
}

exports.doneOwner = () => {
    return `Done, Owner-sama~`
}

exports.groupOnly = () => {
    return `This command can only be used in group!`
}

exports.adminOnly = () => {
    return `This command can only be used by group admins!`
}

exports.notNsfw = () => {
    return `NSFW command hasn't been enabled!`
}

exports.nsfwOn = () => {
    return `NSFW command was successfully *enabled*!`
}

exports.nsfwOff = () => {
    return `NSFW command was successfully *disabled*!`
}

exports.nsfwAlready = () => {
    return `NSFW command was successfully enabled before.`
}

exports.addedGroup = (chat) => {
    return `Thank you for inviting me, members of *${chat.contact.name}*!\n\nPlease register by typing:\n*${prefix}register* name | age`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `------[ HALL OF SHAME ]------\n\nTotal blocked: *${blockNumber.length}* user(s)\n`
}

exports.notPremium = () => {
    return `Sorry! This command can only be used by premium users.`
}

exports.notAdmin = () => {
    return `The user is not an admin!`
}

exports.adminAlready = () => {
    return `Cannot promote a user who is an admin already!`
}

exports.botNotPremium = () => {
    return `This bot does not support premium commands. Please contact the owner of this bot.`
}

exports.botNotAdmin = () => {
    return `Make the bot as admin first!`
}

exports.ytFound = (res) => {
    return `*Video found!*\n\n➸ *Title*: ${res.title}\n➸ *Description*: ${res.desc}\n➸ *Duration*: ${res.duration} minutes\n\nMedia is being shipped, please wait...`
}

exports.notRegistered = () => {
    return `You haven't registered in our database!\n\nPlease register by typing:\n*${prefix}register* name | age`
}

exports.registered = (name, age, userId, time, serial) => {
    return `*「 REGISTRATION 」*\n\nYour account was successfully registered with the data:\n\n➸ *Name*: ${name}\n➸ *Age*: ${age}\n➸ *ID*: ${userId}\n➸ *Time registered*: ${time}\n➸ *Serial*: ${serial}\n\nNote:\nDO NOT share your *serial* to someone!\n\nConsider to read *${prefix}rules* first.`
}

exports.registeredAlready = () => {
    return `You've registered before.`
}

exports.received = (pushname) => {
    return `Hello ${pushname}!\nThank you for reporting, we will work on it ASAP.`
}

exports.limit = (time) => {
    return `Sorry, but you have reached the limit using this commands.\nPlease wait *${time.hours}* hour(s) *${time.minutes}* minute(s) *${time.seconds}* second(s) more.`
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
    return `*「 ANTI GROUP LINK 」*\n\nAnnouncement for all group members of ${(name || formattedTitle)}\nIf somebody sending a group link on this group, they will be kicked automatically by bot.\n\nThank you.\n- Admin ${(name || formattedTitle)}`
}

exports.detectorOff = () => {
    return `Anti-group link feature was successfully *disabled*!`
}

exports.detectorOnAlready = () => {
    return `Anti-group link feature has been enabled before.`
}

exports.linkDetected = () => {
    return `*「 ANTI GROUP LINK 」*\n\nYou've sent a group link!\nSorry, but you have to leave...\nNice knowing you~`
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
    return `Leveling feature hasn't been enabled!`
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

exports.autoStikOn = () => {
    return `Auto-sticker feature was successfully *enabled*!`
}

exports.autoStikOff = () => {
    return `Auto-sticker feature was successfully *enabled*!`
}

exports.autoStikOnAlready = () => {
    return `Auto-sticker feature has been enabled before.`
}

exports.afkOn = (pushname, reason) => {
    return `AFK feature was successfully *enabled*!\n\n➸ *Username*: ${pushname}\n➸ *Reason*: ${reason}`
}

exports.afkOnAlready = () => {
    return `AFK feature has been enabled before.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! The person is on AFK state, don't bother!\n➸ *Reason*: ${getReason}\n➸ *Since*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* is back from AFK, welcome~`
}

exports.gcMute = () => {
    return `*「 MUTED 」*\n\nOnly admins who can send message in this group.` 
}

exports.gcUnmute = () => {
    return `*「 UNMUTED 」*\n\nAll members can send message in this group now.`
}

exports.notNum = (q) => {
    return `"${q}", are not a numbers!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `➸ *Name*: ${title}\n➸ *ID*: ${app_id}\n➸ *Developer*: ${developer}\n➸ *Free*: ${free}\n➸ *Price*: ${price}\n➸ *Description*: ${description}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸ *Name*: ${nama}\n➸ *Price*: ${harga}\n➸ *Sold*: ${terjual}\n➸ *Location*: ${shop_location}\n➸ *Product link*: ${link_product}\n➸ *Description*: ${description}`
}

exports.pc = (pushname) => {
    return `*「 REGISTRATION 」*\n\nYour account is successfully registered! Please check my message in your private chat ${pushname}~ :3`
}

exports.registeredFound = (name, age, time, serial, userId) => {
    return `*「 REGISTERED 」*\n\nAccount found!\n\n➸ *Name*: ${name}\n➸ *Age*: ${age}\n➸ *ID*: ${userId}\n➸ *Time registered*: ${time}\n➸ *Serial*: ${serial}`
}

exports.registeredNotFound = (serial) => {
    return `Account with serial: *${serial}* not found!`
}

exports.ytPlay = (result) => {
    return `*「 PLAY 」*\n\n➸ *Title*: ${result.title}\n➸ *Duration*: ${result.duration}\n➸ *Link*: ${result.url}\n\nMedia is being shipped, please wait...`
}

exports.pcOnly = () => {
    return `This command can only be used in private chat!`
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

4. *${prefix}joox*
Download music from Joox.
Aliases: -
Usage: *${prefix}joox* song's_title

5. *${prefix}tiktok*
Downlaod TikTok video.
Aliases: -
Usage: *${prefix}tiktok* link

6. *${prefix}twitter*
Download Twitter media.
Aliases: *twt*
Usage: *${prefix}twiter* link

7. *${prefix}tiktokpic*
Download TikTok profile pic.
Aliases: -
Usage: *${prefix}tiktokpic* username

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

10. *${prefix}ownerbot*
Send owner contact.
Aliases: -
Usage: *${prefix}ownerbot*

11. *${prefix}getpic*
Send user's profile pic.
Aliases: -
Usage: *${prefix}getpic* @user/62812xxxxxxxx

12. *${prefix}premiumcheck*
Premium active time check.
Aliases: *cekpremium*
Usage: *${prefix}premiumcheck*

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

2. *${prefix}lyric*
Search for song lyrics.
Aliases: -
Usage: *${prefix}lyric* song's_title

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

11. *${prefix}afk*
Set your account to AFK mode, I will them who mentioned you.
Aliases: -
Usage: *${prefix}afk* reason. Send any message to group to disable.

12. *${prefix}distance*
Sending city distance information.
Aliases: -
Usage: *${prefix}distance* from | to

13. *${prefix}findsticker*
Search sticker.
Aliases: *findstiker*
Usage: *${prefix}findsticker* text

14. *${prefix}math*
A calculator.
* = multiplication
+ = addition
- = subtraction
/ = division
Aliases: -
Usage: *${prefix}math* 12*12

15. *${prefix}listsurah*
Sending Al-Qur'an list.
Aliases: -
Usage: *${prefix}listsurah*

16. *${prefix}surah*
Sending surah.
Aliases: -
Usage: *${prefix}surah* surah_number

17. *${prefix}js*
Get sholat schedule.
Aliases: - 
Usage: *${prefix}js* area

18. *${prefix}mutual*
Get random contact.
Aliases: -
Usage: *${prefix}mutual*

19. *${prefix}whois*
IP look-up.
Aliases: -
Usage: *${prefix}whois* ip_address

20. *${prefix}play*
Play audio from YouTube.
Aliases: - 
Usage: *${prefix}play* title

21. *${prefix}sms*
Send SMS as anonymous. (SMS gateway)
Aliases: -
Usage: *${prefix}sms* message | number

22. *${prefix}toxic*
Random toxic. (Indonesian)
Aliases: -
Usage: *${prefix}toxic*

23. *${prefix}tafsir*
Al-Qur'an tafsir. (Indonesian)
Aliases: -
Usage: *${prefix}tafsir* surah_name ayat

24. *${prefix}motivasi*
Motivation text. (Indonesian)
Aliases: -
Usage: *${prefix}motivasi*

25. *${prefix}linesticker*
Latest Line sticker.
Aliases: *linestiker*
Usage: *${prefix}linesticker*

26. *${prefix}alkitab*
Bible search. (Indonesian)
Aliases: -
Usage: *${prefix}* gospel_name

27. *${prefix}cekongkir*
Postal fee check. (Indonesian)
Aliases: -
Usage: *${prefix}ongkir* service_name | from | to

28. *${prefix}movie*
Search for movies.
Aliases: -
Usage: *${prefix}movie* title

28. *${prefix}reminder*
Reminder. 
*s* - seconds
*m* - minutes
*h* - hours
*d* - days
Aliases: -
Usage: *${prefix}reminder* 10s | reminder_message

29. *${prefix}imagetourl*
Image uploader.
Aliases: *imgtourl*
Usage: Send images with caption *${prefix}imagetourl* or reply to the image with a caption *${prefix}imagetourl*.

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

5. *${prefix}ttg*
Create text to GIF stickers.
Aliases: -
Usage: *${prefix}ttg* text

6. *${prefix}stickertoimg*
Convert sticker to image.
Aliases: *stikertoimg*
Usage: Reply to the stickers with a caption *${prefix}stickertoimg*.

7. *${prefix}emojisticker*
Convert emoji to sticker.
Aliases: *emojistiker*
Usage: *${prefix}emojisticker* emoji

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

9. *${prefix}anitoki*
Anitoki fansub latest update.
Aliases: -
Usage: *${prefix}anitoki*

10. *${prefix}neonime*
Neonime fansub latest update.
Aliases: -
Usage: *${prefix}neonime*

11. *${prefix}anoboy*
On-going anime on Anoboy fansub.
Aliases: -
Usage: *${prefix}anoboy*

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

2. *${prefix}calendar*
Create a calendar from sent photos.
Aliases: -
Usage: Send images with caption *${prefix}calendar* or reply to the images with a caption *${prefix}calendar*.

3. *${prefix}partner*
Weton match. (Indonesian)
Aliases: *pasangan*
Usage: *${prefix}partner* name | partner

4. *${prefix}zodiac*
Weekly zodiac fortune. (Indonesian)
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

8. *${prefix}glitchtext*
Create a glitch styled text.
Aliases: *glitext*
Usage: *${prefix}glitchtext* text1 | text2

9. *${prefix}simi*
SimiSimi chat. (Indonesian)
Aliases: -
Usage: *${prefix}simi* text

10. *${prefix}blackpink*
Create a Blackpink logo styled text.
Aliases: -
Usage: *${prefix}blackpink* text

11. *${prefix}phmaker*
Create a Pornhub logo styled text.
Aliases: -
Usage: *${prefix}phmaker* left_text | right_text

12. *${prefix}galaxy*
Create a galaxy styled text.
Aliases: -
Usage: *${prefix}galaxy* text

13. *${prefix}tod*
Play truth or dare. (Indonesian)
Aliases: -
Usage: *${prefix}tod*

14. *${prefix}weton*
Weton fortune. (Indonesian)
Aliases: -
Usage: *${prefix}weton* date | month | year

15. *${prefix}triggered*
Apply a triggered effect to image.
Aliases: -
Usage: Send image with caption *${prefix}triggered* or reply to someone message with caption *${prefix}triggered* or you can directly use *${prefix}triggered*.

16. *${prefix}kiss*
Kiss someone ( ͡° ͜ʖ ͡°).
Aliases: -
Usage: Send image with caption *${prefix}kiss* or reply image with caption *${prefix}kiss*.

17. *${prefix}asupan*
Daily dose of TikTok.
Aliases: -
Usage: *${prefix}asupan*

17. *${prefix}citacita*
Cita-cita meme. (Indonesian)
Aliases: -
Usage: *${prefix}citacita*

17. *${prefix}phcomment*
Create a Pornhub comment section styled image.
Aliases: -
Usage: *${prefix}phcomment* username | text

18. *${prefix}ffbanner*
Create a Free Fire banner.
Aliases: -
Usage: *${prefix}ffbanner* text1 | text2

19. *${prefix}fflogo*
Create a Free Fire characters logo.
Aliases: -
Usage: *${prefix}fflogo* text1 | text2

_Index of [6]_
    `
}

exports.menuModeration = () => {
    return `
-----[ MODERATION ]-----

1. *${prefix}add*
Add users to group.
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
Leave bot from group.
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

11. *${prefix}autosticker*
Toogle auto-sticker feature. Every sended image will made into a sticker.
Aliases: *autostiker autostik*
Usage: *${prefix}autostiker* enable/disable

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

3. *${prefix}nhentai*
Sending doujinshi info from nHentai.
Aliases: *nh*
Usage: *${prefix}nhentai* code

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

10. *${prefix}yuri*
Send random yuri pics.
Aliases: -
Usage: *${prefix}yuri*

11. *${prefix}lewdavatar*
Send random lewd avatars.
Aliases: -
Usage: *${prefix}lewdavatar*

12. *${prefix}femdom*
Send random femdom pics.
Aliases: -
Usage: *${prefix}femdom*

13. *${prefix}nhsearch*
nHentai search.
Aliases: -
Usage: *${prefix}nhsearch* query

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
Add/remove banned users.
Aliases: -
Usage: *${prefix}ban* add/del @user/62812xxxxxxxx

5. *${prefix}leaveall*
Leave from all groups.
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
Add/remove premium users.
Aliases: -
Usage: *${prefix}premium* add/del @user

9. *${prefix}setstatus*
Set about me.
Aliases: *setstatus setstat*
Usage: *${prefix}status* text

10. *${prefix}serial*
Check user's serial.
Aliases: -
Usage: *${prefix}serial* user_serial

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

3. *${prefix}setbackground*
Set background level card.
Aliases: *setbg*
Usage: *${prefix}setbackground* image_link

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

If you've understand these rules, please type *${prefix}menu* to get started.

Source code by:
wa.me/6281294958473 (Slavyan)
    `
}

// Note for owner/hoster, please DO NOT edit this section.
exports.tos = () => {
    return `
-----[ TERMS OF SERVICE ]-----

This bot is an open-source bot, come with the name of BocchiBot which is available on GitHub for free.
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

- Slavyan
    `
}
