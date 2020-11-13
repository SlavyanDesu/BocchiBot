exports.textMenuId = (pushname) => {
    return `
Halo *${pushname}*~

*[ COMMANDS ]*

Abaikan tanda <>

Bot:
1. *$rules*
Wajib baca.
Aliases: *rule*
Usage: *$rules*

2. *$menu*
Cek command list.
Aliases: -
Usage: *$menu*

3. *$nsfw*
Nyalain command NSFW.
Aliases: -
Usage: *$nsfw* <enable/disable>

4. *$menuowner*
Cek owner command list.
Aliases: -
Usage: *$menuowner*

5. *$usage*
Cek server usage.
Aliases: -
Usage: *$usage*

6. *$listblock*
Cek nomor yang diblokir.
Aliases: -
Usage: *$listblock*

Utility:
1. *$say*
Ya gitu.
Aliases: -
Usage: *$say* <text>

2. *$ping*
Cek speed bot, bukan koneksi kamu.
Aliases: *p*
Usage: *$ping*

3. *$delete*
Hapus pesan bot.
Aliases: *del*
Usage: reply pesan yang dihapus dengan caption *$del*.

4. *$lirik*
Mencari lirik lagu.
Aliases: -
Usage: *$lirik* <judul lagu>

5. *$qr*
Membuat QR code.
Aliases: -
Usage: *$qr* <text/link>

6. *$shortlink*
Membuat shortlink.
Aliases: -
Usage: *$shortlink* <link>

Sticker:
1. *$sticker*
Bikin stiker dari gambar yang dikirim atau di-reply.
Aliases: *stiker*
Usage: Kirim gambar dengan caption *$sticker* atau reply gambar dengan caption *$sticker*.

Weeb zone:
1. *$neko*
Kirim foto neko anime girl! :3
Aliases: -
Usage: *$neko*

2. *$wallpaper*
Kirim wallpaper anime.
Aliases: *wp*
Usage: *$wallpaper*

3. *$kemono*
Kirim foto kemonomimi anime girl! UwU
Aliases: -
Usage: *$kemono*
    `
}

exports.textMenuEn = (pushname) => {
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

Utility:
1. *$say*
Make the bot say something!
Aliases: -
Usage: *$say* <text>

2. *$ping*
Check bot's speed, not YOUR connection.
Aliases: *p*
Usage: *$ping*

3. *$delete*
Delete bot's message.
Aliases: *del*
Usage: Reply the message that is going to be deleted by using caption *$delete*.

4. *$lyric*
Search for a song's lyric.
Aliases: *lirik*
Usage: *$lyric* <song's title>

5. *$qr*
Create a QR code.
Aliases: -
Usage: *$qr* <text/link>

6. *$shortlink*
Create a shortlink
Aliases: -
Usage: *$shortlink* <link>

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

exports.textRulesId = () => {
    return `
    *[ THE RULES ]*
1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahamin rules-nya, silakan ketik *$menu* untuk memulai!

Owner:
wa.me/6281294958473 (Kal)
wa.me/6282125076212 (Riz)
    `
}

exports.textRulesEn = () => {
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

exports.textOwnerId = () => {
    return `
Halo Owner-sama ヽ(・∀・)ﾉ!

1. *$bc*
Kirim broadcast.
Aliases: -
Usage: *$bc* <text> 

2. *$clearall*
Hapus semua chat di akun bot.
Aliases: -
Usage: *$clearall*

3. *$getses*
Ambil screenshot dari akun bot.
Aliases: -
Usage: *$getses*

4. *$ban*
Ban user.
Aliases: -
Usage: *$ban* @user1 @user2

5. *$unban*
Unban user.
Aliases: -
Usage: *$unban* @user1

6. *$leaveall*
Keluar dari semua grup.
Aliases: -
Usage: *$leaveall*

7. *$eval*
Evaluates JS code.
Aliases: *ev*
Usage: *$eval*

8. *$shutdown*
Mematikan bot.
Aliases: -
Usage: *$shutdown*
    `
}

exports.textOwnerEn = () => {
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
Usage: *$ban* @user1 @user2

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
    `
}

exports.textNsfwId = () => {
    return `
Belum ada gan, nanti aja habis NNN.
    `
}

exports.textNsfwEn = () => {
    return `
There's nothing here... Wait until NNN end.
    `
}