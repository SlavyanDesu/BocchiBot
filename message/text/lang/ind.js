exports.wait = () => {
    return `Mohon tunggu sebentar~`
}

exports.ok = () => {
    return `Ok desu~`
}

exports.wrongFormat = () => {
    return `Format salah!`
}

exports.emptyMess = () => {
    return `Silakan masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = () => {
    return `Command tidak ditemukan!`
}

exports.blocked = () => {
    return `Bot tidak menerima panggilan. Karena kamu telah melanggar rules, maka kamu telah diblok!\n\nHarap hubungi owner: wa.me/6281294958473`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner-sama!`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner-sama~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `Hanya admin grup yang bisa menggunakan command ini!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!\nKetik *$nsfwmenu* untuk melihat list command.`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.addedGroup = (chat) => {
    return `Terima kasih telah mengundangku, para member *${chat.contact.name}*!\n\nKetik $rules terlebih dahulu ya~`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `\t*[ HALL OF SHAME ]*\nTotal diblokir: *${blockNumber.length}* user\n`
}

exports.notPremium = () => {
    return `Maaf! Command ini khusus untuk user premium saja.`
}

exports.textMenu = (pushname) => {
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

7. *$ping*
Cek speed bot, bukan koneksi kamu.
Aliases: *p*
Usage: *$ping*

8. *$delete*
Hapus pesan bot.
Aliases: *del*
Usage: reply pesan yang dihapus dengan caption *$del*.

Misc:
1. *$say*
Ya gitu.
Aliases: -
Usage: *$say* <text>

2. *$lirik*
Mencari lirik lagu.
Aliases: -
Usage: *$lirik* <judul lagu>

3. *$qr*
Membuat QR code.
Aliases: -
Usage: *$qr* <text/link>

4. *$shortlink*
Membuat shortlink.
Aliases: -
Usage: *$shortlink* <link>

5. *$wikipedia*
Mengirim Wikipedia dari teks yang diberikan.
Aliases: *wiki*
Usage: *$wikipedia* <text>

6. *$kbbi*
Mengirim definisi kata dari KBBI.
Aliases: -
Usage: *$kbbi* <text>

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

exports.textRules = () => {
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

9. *$premium*
Menambah user premium.
Aliases: -
Usage: *$premium* @user1
    `
}

exports.textNsfw = () => {
    return `
Belum ada gan, nanti aja habis NNN.
    `
}