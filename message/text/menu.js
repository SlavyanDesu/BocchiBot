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
Kirim foto neko anime girl. :3
Aliases: -
Usage: *$neko*

2. *$wallpaper*
Kirim wallpaper anime.
Aliases: *wp*
Usage: *$wallpaper*

3. *$kemono*
Kirim foto kemonomimi anime girl. UwU
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

3. Eksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahamin rules-nya, silakan ketik *$menu* untuk memulai.

Owner:
wa.me/6281294958473 (Kal)
wa.me/6282125076212 (Riz)
    `
}

exports.textOwner = () => {
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

exports.textNsfw = () => {
    return `
Belum ada h3h3, masih on-development.
    `
}