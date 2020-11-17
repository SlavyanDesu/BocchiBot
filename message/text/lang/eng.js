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
    return `NSFW command successufully *enabled*!\nType *$nsfwmenu* to see command list.`
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
    return `\t*[ HALL OF SHAME ]*\nTotal blocked: *${blockNumber.length}* user(s)\n`
}

exports.notPremium = () => {
    return `Sorry! This command is for premium user only.`
}

exports.textMenu = (pushname) => {
    return `
Hello ${pushname}~

[ COMMANDS ]

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


Utility:
1. *$say*
Make the bot say something!
Aliases: -
Usage: *$say* <text>

2. *$lyric*
Search for a song's lyric.
Aliases: *lirik*
Usage: *$lyric* <song's title>

3. *$qr*
Create a QR code.
Aliases: -
Usage: *$qr* <text/link>

4. *$shortlink*
Create a shortlink
Aliases: -
Usage: *$shortlink* <link>

5. *$wikipedia*
Search Wikipedia from given text.
Aliases: *wiki*
Usage: *$wikipedia* <text>

6. *$kbbi*
Send a definition of Indonesian verb.
Aliases: -
Usage: *$kbbi* <text>

Sticker:
1. *$sticker*
Create a sticker from sending or replying an image.
Aliases: *stiker*
Usage: Send an image with caption $sticker or reply an image with caption *$sticker*.

Weeb zone:
1. *$neko*
Send neko anime girl picture :3
Aliases: -
Usage: *$neko*

2. *$wallpaper*
Send an anime wallpaper
Aliases: *wp*
Usage: *$wallpaper*

3. *$kemono*
Send a kemonomini anime girl picture! UwU
Aliases: -
Usage: *$kemono*
    `
}

exports.textRules = () => {
    return `
    *[ THE RULES ]*
1. Do NOT spam the bot.
Penalty: *WARN/SOFT BLOCK*

2. Do NOT call the bot.
Penalty: *SOFT BLOCK*

3. Do NOT exploiting the bot.
Penalty: *PERMANENT BLOCK*

If you understand the rules, type *$menu* to start!

Owner:
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

9. *$premium*
Add a premium user.
Aliases: -
Usage: *$premium* @user1
    `
}

exports.textNsfw = () => {
    return `
There's nothing here... Wait until NNN end.
    `
}