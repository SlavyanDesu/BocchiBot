/* eslint-disable quotes */
const { prefix } = require('../../../config.json')

exports.unreg = () => {
    return `Successfully unregistered!`
}

exports.wait = () => {
    return `Please wait a moment...`
}

exports.ok = () => {
    return `Done!`
}

exports.videoLimit = () => {
    return `Video/GIF size is too large!`
}

exports.wrongFormat = () => {
    return `Incorrect format! Please check usage at *${prefix}menu*`
}

exports.emptyMess = () => {
    return `Please enter the message!`
}

exports.cmdNotFound = (cmd) => {
    return `Command *${prefix}${cmd}* not found!`
}

exports.blocked = (ownerNumber) => {
    return `The bot cannot receive calls. You have been blocked because breaking the rules!\n\nContact the owner: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `This command can only be used by owner!`
}

exports.groupOnly = () => {
    return `This command can only be used in group!`
}

exports.adminOnly = () => {
    return `This command can only be used by group admins!`
}

exports.addedGroup = (chat) => {
    return `Thanks for inviting me, members of *${chat.contact.name}*!\n\nPlease register in *private chat* by typing:\n*${prefix}register* name`
}

exports.listBlock = (blockNumber) => {
    return `
*── 「 HALL OF SHAME 」 ──*

Total blocked: *${blockNumber.length}* user(s)\n
    `
}

exports.notPremium = () => {
    return `Sorry! This command can only be used by premium users.`
}

exports.notAdmin = () => {
    return `The user is not an admin!`
}

exports.adminAlready = () => {
    return `Cannot promote user who is an admin already!`
}

exports.botNotPremium = () => {
    return `This bot doesn't support premium commands. Please contact the owner of this bot.`
}

exports.botNotAdmin = () => {
    return `Make the bot as admin first!`
}

exports.notRegistered = () => {
    return `You haven't registered in our database!\n\nPlease register in *private chat* by typing:\n*${prefix}register* name`
}

exports.registered = (name, userId, time, serial) => {
    return `
*── 「 REGISTRATION 」 ──*

Your account has been created with data below:
➸ *Name*: ${name}
➸ *ID*: ${userId}
➸ *Registered on*: ${time}
➸ *Serial*: ${serial}

Note:
Don't share your *serial* to anyone!

Type *${prefix}rules* to see the rules.
    `
}

exports.registeredAlready = () => {
    return `You've registered before.`
}

exports.received = (pushname) => {
    return `Hello ${pushname}!\nThanks for the report, we will work on it ASAP.`
}

exports.daily = (time) => {
    return `Sorry, but you've reached your limit using this command.\nPlease wait for *${time.hours}* hour(s) *${time.minutes}* minute(s) *${time.seconds}* second(s) more.`
}

exports.profile = (username, status, premi, benet, adm, level, requiredXp, xp) => {
    return `
*── 「 USER INFO」 ──*

➸ *Username*: ${username}
➸ *Status*: ${status}
➸ *Premium*: ${premi}
➸ *Banned*: ${benet}
➸ *Admin*: ${adm}

=_=_=_=_=_=_=_=_=_=_=_=_=

*── 「 PROGRESS 」 ──*

➸ *Level*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
    `
}

exports.detectorOn = (name, formattedTitle) => {
    return `
*── 「 ANTI GROUP LINK 」 ──*

Announcement for all *${(name || formattedTitle)}* members.
This group has a group link detector, if someone sends a group link then he'll be kicked out immediately.

Thanks for your attention.
- Admin *${(name || formattedTitle)}*
    `
}

exports.linkDetected = () => {
    return `
*── 「 ANTI GROUP LINK 」 ──*

You sent a group chat link!
Sorry, but you have to leave...
    `
}

exports.detectorOff = () => {
    return `Anti-group link feature was successfully *disabled*!`
}

exports.detectorOnAlready = () => {
    return `Anti-group link feature has been enabled before.`
}

exports.antiNsfwOn = (name, formattedTitle) => {
    return `
*── 「 ANTI NSFW LINK 」 ──*

Announcement for all *${(name || formattedTitle)}* members.
This group has a NSFW link detector, if someone sends a NSFW link then he'll be kicked out immediately.

Thanks for your attention.
- Admin *${(name || formattedTitle)}*
    `
}

exports.antiNsfwOff = () => {
    return `Anti-NSFW link feature was successfully *disabled*!`
}

exports.antiNsfwOnAlready = () => {
    return `Anti-NSFW link feature has been enabled before.`
}

exports.antiBadWordsOn = (name, formattedTitle) => {
    return `
*── 「 ANTI BAD WORDS 」 ──*

Announcement for all *${(name || formattedTitle)}* members.
This group has a bad words detector, if someone sends a bad words/profane words then the related message will be deleted.

Thanks for your attention.
- Admin *${(name || formattedTitle)}*
    `
}

exports.antiBadWordsOff = () => {
    return `Anti-bad words feature was successfully *disabled*!`
}

exports.antiBadWordsOnAlready = () => {
    return `Anti-bad words feature has been enabled before.`
}

exports.antiBadWordsError = () => {
    return `Anti-bad words feature is currently *off*, please enable it first.`
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
    return `Auto-sticker feature was successfully *disabled*!`
}

exports.autoStikOnAlready = () => {
    return `Auto-sticker feature has been enabled before.`
}

exports.afkOn = (pushname, reason) => {
    return `
*── 「 AFK MODE 」 ──*

AFK feature has been successfully *enabled*!
➸ *Username*: ${pushname}
➸ *Reason*: ${reason}
    `
}

exports.afkOnAlready = () => {
    return `AFK feature has been enabled before.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `
*── 「 AFK MODE 」 ──*

Ssshhh! This person is currently AFK!
➸ *Reason*: ${getReason}
➸ *Since*: ${getTime}
    `
}

exports.afkDone = (pushname) => {
    return `*${pushname}* is back from AFK!`
}

exports.gcMute = () => {
    return `
*── 「 MUTED 」 ──*

Only admins who can send message in this group.
    `
}

exports.gcUnmute = () => {
    return `
*── 「 UNMUTED 」 ──*

All members can send message in this group now.
    `
}

exports.notNum = (q) => {
    return `"${q}", are not a numbers!`
}

exports.registeredFound = (name, time, serial, userId) => {
    return `
*── 「 REGISTERED 」 ──*

Account has been found!
➸ *Name*: ${name}
➸ *ID*: ${userId}
➸ *Registered time*: ${time}
➸ *Serial*: ${serial}
    `
}

exports.registeredNotFound = (serial) => {
    return `Account with serial: *${serial}* not found!`
}

exports.pcOnly = () => {
    return `This command can only be used in private chat!`
}

exports.linkNsfw = () => {
    return `
*── 「 ANTI NSFW LINK 」 ──*

You've sent a group link!
Sorry, but you have to leave...
    `
}

exports.fakeLink = () => {
    return `The link you sent is suspicious, for the safety of the group I will kick you out.\nBye~.`
}

exports.muteChatOn = () => {
    return `Successfully *mute* bot for this group!`
}

exports.muteChatOff = () => {
    return `Successfully *unmute* bot for this group!`
}

exports.muteChatOnAlready = () => {
    return `Bot is already muted in this group!`
}

exports.limit = () => {
    return `
*── 「 LIMIT 」 ──*

You ran out of usage limit! Please do the following:
❏ *_Wait until 12:00 AM (UTC+7)_*
    `
}

exports.reminderOn = (messRemind, parsedTime, sender) => {
    return `
*── 「 REMINDER 」 ──*

Reminder has been set!
➸ *Message*: ${messRemind}
➸ *Duration*: ${parsedTime.hours} hour(s) ${parsedTime.minutes} minute(s) ${parsedTime.seconds} second(s)
➸ *For*: @${sender.id.replace('@c.us', '')}
    `
}

exports.reminderAlert = (messRemind, sender) => {
    return `
*── 「 REMINDER 」 ──*

⏰ @${sender.id.replace('@c.us', '')} ⏰
➸ *Message*: ${messRemind}`
}

exports.nameChanged = (q) => {
    return `Username has been changed to *${q}*`
}

exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
*── 「 WELCOME 」 ──*

======================
➸ *Name*: ${pushname}
➸ *Level*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
➸ *Role*: ${role}
➸ *Premium*: ${premium}
======================

Total registered: *${jumlahUser}*

*[1]* Downloader
*[2]* Bot
*[3]* Misc
*[4]* Sticker
*[5]* Weeaboo
*[6]* Fun
*[7]* Moderation
*[8]* Owner
*[9]* Leveling
*[10]* AI

Type *${prefix}menu* index_number to open the selected page menu.

Note:
The bot has a cooldown for *5 seconds* every time you use it.
    `
}

exports.menuDownloader = () => {
    return `
*── 「 DOWNLOADER 」 ──*

1. *${prefix}twitter*
Download Twitter media.
Aliases: *twt*
Usage: *${prefix}twitter* link

2. *${prefix}youtube*
Download YouTube video.
Aliases: *yt*
Usage: *${prefix}youtube* link

_Index of [1]_
    `
}

exports.menuBot = () => {
    return `
*── 「 BOT 」 ──*

1. *${prefix}rules*
Must read.
Aliases: *rule*
Usage: *${prefix}rules*

2. *${prefix}menu*
Display available commands.
Aliases: -
Usage: *${prefix}menu* index_number

3. *${prefix}status*
Display bot status.
Aliases: *stats*
Usage: *${prefix}status*

4. *${prefix}listblock*
Check blocked numbers.
Aliases: -
Usage: *${prefix}listblock*

5. *${prefix}ping*
Check bot speed.
Aliases: *p*
Usage: *${prefix}ping*

6. *${prefix}delete*
Delete messages from bot.
Aliases: *del*
Usage: Reply to deleted messages with a caption *${prefix}delete*

7. *${prefix}report*
Report bugs to owner.
Aliases: -
Usage: *${prefix}report* text

8. *${prefix}tos*
Terms of service.
Aliases: -
Usage: *${prefix}tos*

9. *${prefix}join*
Join a group via link.
Aliases: -
Usage: *${prefix}join* group_link

10. *${prefix}ownerbot*
Send owner contact.
Aliases: -
Usage: *${prefix}ownerbot*

11. *${prefix}getpic*
Send user's profile pic.
Aliases: -
Usage: *${prefix}getpic* @user/62812xxxxxxxx

12. *${prefix}premiumcheck*
Check your remaining premium time limit.
Aliases: *cekpremium*
Usage: *${prefix}premiumcheck*

13. *${prefix}premiumlist*
Premium user list.
Aliases: *listpremium*
Usage: *${prefix}premiumlist*

14. *${prefix}limit*
Check your remaining limit.
Aliases: -
Usage: *${prefix}limit*

15. *${prefix}serial*
Check your bio using serial.
Aliases: -
Usage: *${prefix}serial* serial

16. *${prefix}runtime*
Check your host runtime.
Aliases: -
Usage: *${prefix}runtime*

17. *${prefix}unregister*
Unregister your account.
Aliases: *unreg*
Usage: *${prefix}unregister*

_Index of [2]_
    `
}

exports.menuMisc = () => {
    return `
*── 「 MISC 」 ──*

1. *${prefix}say*
The bot will repeat your message.
Aliases: -
Usage: *${prefix}say* text

2. *${prefix}tts*
Create a text to speech audio. You can find language code here https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
Aliases: -
Usage: *${prefix}tts* language_code | text

3. *${prefix}afk*
Set your account to AFK mode.
Aliases: -
Usage: *${prefix}afk* reason. Send any message to group to disable.

4. *${prefix}math*
A calculator.
* = multiplication
+ = addition
- = subtraction
/ = division
Aliases: -
Usage: *${prefix}math* 12*12

5. *${prefix}reminder*
Reminder.
*s* - seconds
*m* - minutes
*h* - hours
*d* - days
Aliases: -
Usage: *${prefix}reminder* 10s | reminder_message

6. *${prefix}imagetourl*
Image uploader.
Aliases: *imgtourl*
Usage: Send images with caption *${prefix}imagetourl* or reply to the image with a caption *${prefix}imagetourl*

7. *${prefix}genshininfo*
Genshin Impact characters info.
Aliases: *genshin*
Usage: *${prefix}genshininfo* chara_name

8. *${prefix}translate*
Translate a text.
Aliases: *tl*
Usage: *${prefix}translate* text | code_lang

9. *${prefix}tomp3*
Convert a video to audio only (MP3).
Aliases: -
Usage: Send a video with caption *${prefix}tomp3* or reply video with a caption *${prefix}tomp3*

10. *${prefix}bass*
Bass boost.
Aliases: -
Usage: Reply audio/voice with caption *${prefix}bass* dB_level.

11. *${prefix}nightcore*
Create a nightcore effect.
Aliases: -
Usage: Reply audio/voice with caption *${prefix}nightcore*

12. *${prefix}google*
Search through Google.
Aliases: *googlesearch*
Usage: *${prefix}google* query

13. *${prefix}toptt*
Create PTT audio.
Aliases: *ptt*
Usage: Reply audio/voice with caption *${prefix}toptt*

_Index of [3]_
    `
}

exports.menuSticker = () => {
    return `
*── 「 STICKER 」 ──*

1. *${prefix}sticker*
Create stickers from images sent or replied.
Aliases: *stiker*
Usage: Send images with caption *${prefix}sticker* or reply to the images with a caption *${prefix}sticker*

2. *${prefix}stickergif*
Create stickers from videos/GIFs.
Aliases: *stikergif* *sgif*
Usage: Send videos/GIFs with caption *${prefix}stickergif* or reply to the videos/GIFs with a caption *${prefix}stickergif*

3. *${prefix}stickertoimg*
Convert sticker to image.
Aliases: *stikertoimg* *toimg*
Usage: Reply to the stickers with a caption *${prefix}stickertoimg*

4. *${prefix}stickerwm*
Create a sticker with metadata/WM.
Aliases: *stcwm*
Usage: Send images with caption *${prefix}stickerwm* pack_name | author_name or reply to the image with a caption *${prefix}stickerwm* pack_name | author_name

5. *${prefix}stickermeme*
Create a sticker meme.
Aliases: *stcmeme*
Usage: Send images with caption *${prefix}sticker* upper_text | bottom_text or reply to the images with a caption *${prefix}sticker* upper_text | bottom_text

6. *${prefix}takestick*
Edit sticker metadata.
Aliases: *take*
Usage: Reply to the stickers with a caption *${prefix}takestick* pack_name | author_name

7. *${prefix}stickernobg*
Create stickers from images sent or replied with blank background.
Aliases: *take*
Usage: Send images with caption *${prefix}stickernobg* or reply to the images with a caption *${prefix}stickernobg*

_Index of [4]_
    `
}

exports.menuWeeaboo = () => {
    return `
*── 「 WEEABOO 」 ──*

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

4. *${prefix}wait*
Search anime source from the screenshots scene.
Aliases: -
Usage: Send screenshots with caption *${prefix}wait* or reply to the screenshots with a caption *${prefix}wait*

5. *${prefix}source*
Look for sources from the doujin panel, illustrations, and images related to anime.
Aliases: *sauce*
Usage: Send images with caption *${prefix}source* or reply to the images with a caption *${prefix}source*

6. *${prefix}waifu*
Send random waifu photos.
Aliases: -
Usage: *${prefix}waifu*

_Index of [5]_
    `
}

exports.menuFun = () => {
    return `
*── 「 FUN 」 ──*

1. *${prefix}triggered*
Apply a triggered effect to image.
Aliases: -
Usage: Send image with caption *${prefix}triggered* or reply to someone message with caption *${prefix}triggered* or you can directly use *${prefix}triggered*

2. *${prefix}kiss*
Kiss someone ( ͡° ͜ʖ ͡°).
Aliases: -
Usage: Send image with caption *${prefix}kiss* or reply image with caption *${prefix}kiss*

3. *${prefix}profile*
Check my profile.
Aliases: *me*
Usage: *${prefix}profile*

4. *${prefix}trash*
Trash?
Aliases: -
Usage: *${prefix}trash*

5. *${prefix}hitler*
Worse than hitler.
Aliases: -
Usage: *${prefix}hitler*

_Index of [6]_
    `
}

exports.menuModeration = () => {
    return `
*── 「 MODERATION 」 ──*

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

7. *${prefix}groupicon*
Change group icon.
Aliases: -
Usage: Send images with caption *${prefix}groupicon* or reply to the images with a caption *${prefix}groupicon*

8. *${prefix}antilink*
Toogle anti-group link feature.
Aliases: -
Usage: *${prefix}antilink* enable/disable

9. *${prefix}welcome*
Toogle welcome feature.
Aliases: -
Usage: *${prefix}welcome* enable/disable

10. *${prefix}autosticker*
Toogle auto-sticker feature. Every sended image will made into a sticker.
Aliases: *autostiker autostik*
Usage: *${prefix}autostiker* enable/disable

11. *${prefix}antinsfw*
Toogle anti-NSFW link.
Aliases: -
Usage: *${prefix}antinsfw* enable/disable

12. *${prefix}mutegc*
Set group to admin only who can send a message.
Aliases: -
Usage: *${prefix}mutegc* enable/disable

13. *${prefix}grouplink*
Send a invite link of current group.
Aliases: -
Usage: *${prefix}grouplink*

14. *${prefix}revoke*
Revoke invite link of current group.
Aliases: -
Usage: *${prefix}revoke*

15. *${prefix}leveling*
Toogle leveling feature.
Aliases: -
Usage: *${prefix}leveling* enable/disable

16. *${prefix}badwords*
Setting up anti-bad words feature.
Aliases: *badword*
Usage: *${prefix}badwords* enable/disable or add/remove to add/remove a blacklist words.

_Index of [7]_
    `
}

exports.menuOwner = () => {
    return `
*── 「 OWNER 」 ──*

1. *${prefix}bc*
Create a broadcast.
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
Add/remove premium user.
*s* - seconds
*m* - minutes
*h* - hours
*d* - days
Aliases: -
Usage: *${prefix}premium* add/del @user/62812xxxxxxxx 30d

9. *${prefix}setstatus*
Set about me.
Aliases: *setstatus setstat*
Usage: *${prefix}status* text

10. *${prefix}serial*
Check user's serial.
Aliases: -
Usage: *${prefix}serial* user_serial

11. *${prefix}exif*
Adjust your sticker WM.
Aliases: -
Usage: *${prefix}exif* pack_name | author_name

12. *${prefix}mute*
Mute all users.
Aliases: -
Usage: Use *${prefix}mute* to mute and use *${prefix}mute* once again to unmute.

13. *${prefix}setname*
Change bot's name. Maximum 25 characters.
Aliases: -
Usage: *${prefix}name* new_username

14. *${prefix}block*
Block user.
Aliases: *blok*
Usage: *${prefix}block* @user/62812xxxxxxxx

15. *${prefix}unblock*
Unblock user.
Aliases: *unblok*
Usage: *${prefix}unblock* @user/62812xxxxxxxx

16. *${prefix}xp*
Add XP to someone.
Aliases: -
Usage: *${prefix}xp* @user amount_xp

_Index of [8]_
    `
}

exports.menuLeveling = () => {
    return `
*── 「 LEVELING 」 ──*

1. *${prefix}level*
Check your level.
Aliases: -
Usage: *${prefix}level*

2. *${prefix}leaderboard*
Check leaderboard.
Aliaases: -
Usage: *${prefix}leaderboard*

_Index of [9]_
    `
}

exports.menuAi = () => {
    return `
*── 「 AI 」 ──*

1. *${prefix}ai*
ChatGPT 3.5 implementation.
Aliases: -
Usage: *${prefix}ai* your_question

2. *${prefix}image*
Create image from given prompt.
Aliases: *img*
Usage: *${prefix}image* prompt

_Index of [10]_
    `
}

exports.rules = () => {
    return `
*── 「 RULES 」 ──*

1. Do NOT spam bot.
Penalty: *WARN/SOFT BLOCK*

2. Do NOT call bot.
Penalty: *SOFT BLOCK*

3. Do NOT exploit bots.
Penalty: *PERMANENT BLOCK*

If you've understand these rules, please type *${prefix}menu* to get started.
    `
}

// Note for owner/hoster, please DO NOT edit this section.
exports.tos = (ownerNumber) => {
    return `
*── 「 TERMS OF SERVICE 」 ──*

This bot is an open-source bot, come with the name of BocchiBot which is available on GitHub for free.
The owner/hoster of this bot is independent from the responsibility and supervision of the developer (Slavyan).
Owner/hoster may plagiarize, add, delete, replace source code with notes *DO NOT SELL* this source code in any form.
If an error occurs, the first person you should contact is the owner/hoster.  

If you want to contributing to this project, visit:
https://github.com/SlavyanDesu/BocchiBot

Contact person:
wa.me/${ownerNumber.replace('@c.us', '')} (Owner/hoster)

Regards,
Slavyan
    `
}
