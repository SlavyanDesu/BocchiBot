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
    return `------[ HALL OF SHAME ]------
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notPremium = () => {
    return `Maaf! Command ini khusus untuk user premium saja.`
}

exports.notAdmin = () => {
    return `Pengguna bukan admin!`
}

exports.adminAlready = () => {
    return `Tidak dapat promote pengguna yang merupakan admin!`
}

exports.botNotPremium = () => {
    return `Bot ini tidak mendukung command premium. Silakan hubungi pemilik bot ini.`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu!`
}

exports.ytLimit = () => {
    return `Size video terlalu besar!`
}

exports.ytFound = (result) => {
    return `Video ditemukan!\n\nTitle:\n${result.title}\n\nDescription:\n${result.desc}\n\nSize: ${result.filesize} / 50.0 MB\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.textMenu = (pushname) => {
    return `
-----[ COMMANDS ]-----

Halo *${pushname}*~

Abaikan tanda <>

Downloader [BETA]:
1. *$facebook*
Download Facebook video.
Aliases: *fb*
Usage: *$facebook* <video link>

2. *$ytmp3*
Download YouTube audio.
Aliases: -
Usage: *$ytmp3* <link>

3. *$ytmp4*
Download YouTube video.
Aliases: -
Usage: *$ytmp4* <link>

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
Usage: Reply pesan yang dihapus dengan caption *$del*.

9. *$moderation*
Cek moderation command list.
Aliases: -
Usage: *$moderation*

Misc:
1. *$say*
Ya gitu.
Aliases: -
Usage: *$say* <text>

2. *$lirik*
Mencari lirik lagu.
Aliases: -
Usage: *$lirik* <judul lagu>

3. *$shortlink*
Membuat shortlink.
Aliases: -
Usage: *$shortlink* <link>

4. *$wikipedia*
Mengirim Wikipedia dari teks yang diberikan.
Aliases: *wiki*
Usage: *$wikipedia* <text>

5. *$kbbi*
Mengirim definisi kata dari KBBI.
Aliases: -
Usage: *$kbbi* <text>

6. *$igstalk*
Stalk akun Instagram.
Aliases: -
Usage: *$igstalk* <username>

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

4. *$kusonime*
Mencari info anime dan link download batch di Kusonime.
Aliases: -
Usage: *$kusonime* <judul anime>

5. *$komiku*
Mencari info manga dan link download di Komiku.
Aliases: -
Usage: *$komiku* <judul manga>

6. *$wait*
Mencari source anime dari screenshot cuplikan.
Aliases: -
Usage: Kirim screenshot dengan caption *$wait* atau reply screenshot dengan caption *$wait*.
    `
}

exports.textRules = () => {
    return `
-----[ THE RULES ]-----

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahamin rules-nya, silakan ketik *$menu* untuk memulai!

Source code oleh:
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

9. *$pradd*
Menambah user premium.
Aliases: -
Usage: *$pradd* @user1

10. *$prdel*
Menghapus user premium.
Aliases: -
Usage: *$prdel* @user1
    `
}

exports.textNsfw = () => {
    return `
-----[ NSFW ]-----

1. *$lewds*
Mengirim gambar anime lewd.
Aliases: *lewd*
Usage: *$lewds*

2. *$multilewds*
Mengirim up to 5 gambar anime lewd. (PREMIUM ONLY)
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *$multilewds*

3. *$nh*
Mengirim info doujinshi dari nHentai.
Aliases: -
Usage: *$nh* <kode>

4. *$nhdl*
Mendownload doujin dari nHentai sebagai file PDF. (PREMIUM ONLY)
Aliases: -
Usage: *$nhdl* <kode>

5. *$xnxx*
Mendownload video dari XNXX. (PREMIUM ONLY)
Aliases: -
Usage: *$xnxx* <link>

6. *$nekopoi*
Mengirim video link Nekopoi terbaru.
Aliases: -
Usage: *$nekopoi*
    `
}

exports.textModeration = () => {
    return `
-----[ MODERATION ]-----
1. *$add*
Menambah user ke dalam group.
Aliases: -
Usage: *$add* 628xxxxxxxxxx

2. *$kick*
Mengeluarkan member dari grup.
Aliases: -
Usage: *$kick* @member1

3. *$promote*
Promote member menjadi admin.
Aliases: -
Usage: *$promote* @member1

4. *$demote*
Demote member dari admin.
Aliases: -
Usage: *$demote* @member1

5. *$leave*
Bot akan meninggalkan grup.
Aliases: -
Usage: *$leave*

6. *$everyone*
Mention semua member group.
Aliases: -
Usage: *$everyone*
    `
}