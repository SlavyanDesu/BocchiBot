const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('config.json'))

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
    return `Command NSFW berhasil *diaktifkan*!\nKetik *${prefix}nsfwmenu* untuk melihat list command.`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.addedGroup = (chat) => {
    return `Terima kasih telah mengundangku, para member *${chat.contact.name}*!\n\nKetik *${prefix}rules* terlebih dahulu ya~`
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
    return `User bukan admin!`
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

exports.ytFound = (res) => {
    return `Video ditemukan!\n\nTitle:\n${res.title}\n\nDescription:\n${res.desc}\n\nDurasi: ${res.duration} menit\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.notRegistered = () => {
    return `Kamu belum terdafar di database!\n\nSilakan register dengan format:\n*${prefix}register* <nama | daerah>\n\nTanpa tanda <>`
}

exports.registered = () => {
    return `Selamat! Kamu telah terdaftar.\nKetik *${prefix}rules* terlebih dahulu ya~`
}

exports.registeredAlready = () => {
    return `Kamu sudah mendaftar sebelumnya.`
}

exports.received = (pushname) => {
    return `Halo ${pushname}!\nTerima kasih telah melapor, laporanmu akan kami terima segera.`
}

exports.textMenu = (pushname) => {
    return `
-----[ COMMANDS ]-----

Halo *${pushname}*~

Abaikan tanda <>

Downloader [BETA]:
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

Bot:
1. *${prefix}rules*
Wajib baca.
Aliases: *rule*
Usage: *${prefix}rules*

2. *${prefix}menu*
Cek command list.
Aliases: -
Usage: *${prefix}menu*

3. *${prefix}nsfw*
Nyalain command NSFW.
Aliases: -
Usage: *${prefix}nsfw* <enable/disable>

4. *${prefix}menuowner*
Cek owner command list.
Aliases: -
Usage: *${prefix}menuowner*

5. *${prefix}usage*
Cek server usage.
Aliases: -
Usage: *${prefix}usage*

6. *${prefix}listblock*
Cek nomor yang diblokir.
Aliases: -
Usage: *${prefix}listblock*

7. *${prefix}ping*
Cek speed bot, bukan koneksi kamu.
Aliases: *p*
Usage: *${prefix}ping*

8. *${prefix}delete*
Hapus pesan bot.
Aliases: *del*
Usage: Reply pesan yang dihapus dengan caption *${prefix}del*.

9. *${prefix}moderation*
Cek moderation command list.
Aliases: -
Usage: *${prefix}moderation*

10. *${prefix}report*
Lapor bug bot ke dev.
Aliases: -
Usage: *${prefix}report* <pesan>

Misc:
1. *${prefix}say*
Ya gitu.
Aliases: -
Usage: *${prefix}say* <text>

2. *${prefix}lirik*
Mencari lirik lagu.
Aliases: -
Usage: *${prefix}lirik* <judul lagu>

3. *${prefix}shortlink*
Membuat shortlink.
Aliases: -
Usage: *${prefix}shortlink* <link>

4. *${prefix}wikipedia*
Mengirim Wikipedia dari teks yang diberikan.
Aliases: *wiki*
Usage: *${prefix}wikipedia* <text>

5. *${prefix}kbbi*
Mengirim definisi kata dari KBBI.
Aliases: -
Usage: *${prefix}kbbi* <text>

6. *${prefix}igstalk*
Stalk akun Instagram.
Aliases: -
Usage: *${prefix}igstalk* <username>

Sticker:
1. *${prefix}sticker*
Bikin stiker dari gambar yang dikirim atau di-reply.
Aliases: *stiker*
Usage: Kirim gambar dengan caption *${prefix}sticker* atau reply gambar dengan caption *${prefix}sticker*.

2. *${prefix}stickergif*
Bikin stiker dari video MP4 atau GIF yang dikirim atau di-reply.
Aliases: *stikergif*
Usage: Usage: Kirim video/GIF dengan caption *${prefix}stickergif* atau reply video/GIF dengan caption *${prefix}stickergif*.

Weeb zone:
1. *${prefix}neko*
Mengirim foto neko anime girl! :3
Aliases: -
Usage: *${prefix}neko*

2. *${prefix}wallpaper*
Mengirim wallpaper anime.
Aliases: *wp*
Usage: *${prefix}wallpaper*

3. *${prefix}kemono*
Mengirim foto kemonomimi anime girl! UwU
Aliases: -
Usage: *${prefix}kemono*

4. *${prefix}kusonime*
Mencari info anime dan link download batch di Kusonime.
Aliases: -
Usage: *${prefix}kusonime* <judul anime>

5. *${prefix}komiku*
Mencari info manga dan link download di Komiku.
Aliases: -
Usage: *${prefix}komiku* <judul manga>

6. *${prefix}wait*
Mencari source anime dari screenshot cuplikan.
Aliases: -
Usage: Kirim screenshot dengan caption *${prefix}wait* atau reply screenshot dengan caption *${prefix}wait*.

7. *${prefix}source*
Mencari source dari panel doujin, ilustrasi, dan gambar yang berhubungan dengan anime.
Aliases: *sauce*
Usage: Kirim gambar dengan caption *${prefix}source* atau reply gambar dengan caption *${prefix}source*.

8. *${prefix}waifu*
Mengirim random foto waifu.
Aliases: -
Usage: *${prefix}waifu*
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

Jika sudah dipahamin rules-nya, silakan ketik *${prefix}menu* untuk memulai!

Source code oleh:
wa.me/6281294958473 (Kal)
wa.me/6282125076212 (Riz)
    `
}

exports.textOwner = () => {
    return `
Halo Owner-sama ヽ(・∀・)ﾉ!

1. *${prefix}bc*
Kirim broadcast.
Aliases: -
Usage: *${prefix}bc* <text> 

2. *${prefix}clearall*
Hapus semua chat di akun bot.
Aliases: -
Usage: *${prefix}clearall*

3. *${prefix}getses*
Ambil screenshot dari akun bot.
Aliases: -
Usage: *${prefix}getses*

4. *${prefix}ban*
Ban user.
Aliases: -
Usage: *${prefix}ban* @user1 @user2

5. *${prefix}unban*
Unban user.
Aliases: -
Usage: *${prefix}unban* @user1

6. *${prefix}leaveall*
Keluar dari semua grup.
Aliases: -
Usage: *${prefix}leaveall*

7. *${prefix}eval*
Evaluates JS code.
Aliases: *ev*
Usage: *${prefix}eval*

8. *${prefix}shutdown*
Mematikan bot.
Aliases: -
Usage: *${prefix}shutdown*

9. *${prefix}pradd*
Menambah user premium.
Aliases: -
Usage: *${prefix}pradd* @user1

10. *${prefix}prdel*
Menghapus user premium.
Aliases: -
Usage: *${prefix}prdel* @user1
    `
}

exports.textNsfw = () => {
    return `
-----[ NSFW ]-----

1. *${prefix}lewds*
Mengirim gambar anime lewd.
Aliases: *lewd*
Usage: *${prefix}lewds*

2. *${prefix}multilewds*
Mengirim up to 5 anime lewd pics. (PREMIUM ONLY)
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *${prefix}multilewds*

3. *${prefix}nh*
Mengirim info doujinshi dari nHentai.
Aliases: -
Usage: *${prefix}nh* <kode>

4. *${prefix}nhdl*
Mendownload doujin dari nHentai sebagai file PDF. (PREMIUM ONLY)
Aliases: -
Usage: *${prefix}nhdl* <kode>

5. *${prefix}nekopoi*
Mengirim video link Nekopoi terbaru.
Aliases: -
Usage: *${prefix}nekopoi*

6. *${prefix}multifetish*
Mengirim up to 5 fetish pics. (PREMIUM ONLY)
Aliases: *mfetish*
Usage: *${prefix}multifetish* <armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao>

7. *${prefix}waifu18*
Mengirim random foto waifu NSFW.
Aliases: -
Usage: *${prefix}waifu18*

8. *${prefix}fetish*
Mengirim fetish pics.
Aliases: -
Usage: *${prefix}fetish* <armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao>
    `
}

exports.textModeration = () => {
    return `
-----[ MODERATION ]-----
1. *${prefix}add*
Menambah user ke dalam group.
Aliases: -
Usage: *${prefix}add* 628xxxxxxxxxx

2. *${prefix}kick*
Mengeluarkan member dari grup.
Aliases: -
Usage: *${prefix}kick* @member1

3. *${prefix}promote*
Promote member menjadi admin.
Aliases: -
Usage: *${prefix}promote* @member1

4. *${prefix}demote*
Demote member dari admin.
Aliases: -
Usage: *${prefix}demote* @member1

5. *${prefix}leave*
Bot akan meninggalkan grup.
Aliases: -
Usage: *${prefix}leave*

6. *${prefix}everyone*
Mention semua member group.
Aliases: -
Usage: *${prefix}everyone*
    `
}
