const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('config.json'))

exports.wait = () => {
    return `Mohon tunggu sebentar~`
}

exports.ok = () => {
    return `Ok desu~`
}

exports.wrongFormat = () => {
    return `Format salah! Silakan cek cara penggunaan di *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = () => {
    return `Command tidak ditemukan!`
}

exports.blocked = (ownerNumber) => {
    return `Bot tidak menerima panggilan. Karena kamu telah melanggar rules, maka kamu telah diblok!\n\nHarap hubungi owner: wa.me/${ownerNumber.replace('@c.us', '')}`
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
    return `Command ini hanya bisa digunakan oleh admin grup!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

exports.addedGroup = (chat) => {
    return `Terima kasih telah mengundangku, para member *${chat.contact.name}*!\n\nSilakan register dengan cara ketik:\n*${prefix}register* nama | umur`
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
    return `User bukan seorang admin!`
}

exports.adminAlready = () => {
    return `Tidak dapat mem-promote user yang merupakan admin!`
}

exports.botNotPremium = () => {
    return `Bot ini tidak mendukung command premium. Silakan hubungi pemilik bot ini.`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu!`
}

exports.ytFound = (res) => {
    return `*Video ditemukan!*\n\n➸ *Judul*:${res.title}\n➸ *Deskripsi*:${res.desc}\n➸ *Durasi*: ${res.duration} menit\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.notRegistered = () => {
    return `Kamu belum terdaftar di database!\n\nSilakan register dengan format:\n*${prefix}register* nama | umur`
}

exports.registered = () => {
    return `Selamat! Kamu telah terdaftar.\nKetik *${prefix}rules* terlebih dahulu ya~`
}

exports.registeredAlready = () => {
    return `Kamu sudah mendaftar sebelumnya.`
}

exports.received = (pushname) => {
    return `Halo ${pushname}!\nTerima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.limit = (time) => {
    return `Maaf, tetapi kamu telah mencapai limit menggunakan command ini.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.`
}

exports.videoLimit = () => {
    return `Ukuran video terlalu besar!`
}

exports.joox = (result) => {
    return `*Lagu ditemukan!*\n\n➸ *Penyanyi*: ${result[0].penyanyi}\n➸ *Judul*: ${result[0].judul}\n➸ *Album*: ${result[0].album}\n➸ *Ext*: ${result[0].ext}\n➸ *Size*: ${result[0].filesize}\n➸ *Durasi*: ${result[0].duration}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.gsm = (result) => {
    return `➸ *Model HP*: ${result.title}\n➸ *Spesifikasi*: ${result.spec}`
}

exports.receipt = (result) => {
    return `${result.title}\n\n${result.desc}\n\n*Bahan*: ${result.bahan}\n\n*Cara membuat*:\n${result.cara}`
}

exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `➸ *Judul*: ${title}\n➸ *Channel*: ${channel}\n➸ *Durasi*: ${duration}\n➸ *Views*: ${views}\n➸ *Link*: ${urlyt}`
}

exports.profile = (username, status, premi, benet, adm) => {
    return `-----[ *USER INFO* ]-----\n\n➸ *Username*: ${username}\n➸ *Status*: ${status}\n➸ *Premium*: ${premi}\n➸ *Banned*: ${benet}\n➸ *Admin*: ${adm}`
}

exports.detectorOn = (name, formattedTitle) => {
    return `*「 ANTI GROUP LINK 」*\n\nPerhatian untuk penghuni grup ${(name || formattedTitle)}\nGrup ini memiliki anti-group link detector, apabila ada salah satu member mengirim group link di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`
}

exports.detectorOff = () => {
    return `Fitur anti-group link berhasil *dinonaktifkan*!`
}

exports.detectorOnAlready = () => {
    return `Fitur anti-group link telah diaktifkan sebelumnya.`
}

exports.linkDetected = () => {
    return `*「 ANTI GROUP LINK 」*\n\nKamu mengirim link group chat!\nMaaf tapi kami harus mengkick kamu...\nSelamat tinggal~`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}

exports.levelNull = () => {
    return `Kamu belum memiliki level!`
}

exports.welcome = (event) => {
    return `Selamat datang @${event.who.replace('@c.us', '')}!\n\nSemoga betah terus di grup kami ya~`
}

exports.welcomeOn = () => {
    return `Fitur welcome berhasil *diaktifkan*!`
}

exports.welcomeOff = () => {
    return `Fitur welcome berhasil *dinonaktifkan*!`
}

exports.welcomeOnAlready = () => {
    return `Fitur welcome telah diaktifkan sebelumnya.`
}

exports.minimalDb = () => {
    return `Perlu setidaknya *10* user yang memiliki level di database!`
}

exports.autoStikOn = () => {
    return `Fitur auto-stiker berhasil *diaktifkan*!`
}

exports.autoStikOff = () => {
    return `Fitur auto-stiker berhasil *dinonaktifkan*!`
}

exports.autoStikOnAlready = () => {
    return `Fitur auto-stiker telah diaktifkan sebelumnya.`
}

exports.afkOn = () => {
    return `Fitur AFK berhasil *diaktifkan*!`
}

exports.afkOff = () => {
    return `Fitur AFK berhasil *dinonaktifkan*!`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = () => {
    return `Ssttt!\n\nOrangnya lagi AFK, jangan diganggu!`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.menu = () => {
    return `
------[ WELCOME ]-----

Berikut adalah menu yang tersedia:

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

Ketik *${prefix}menu* angka_index untuk membuka menu page yang dipilih.

Catatan:
Perlakukan bot secara baik, dev akan bertindak tegas apabila user melanggar rules.
Bot ini terdapat anti-spam yang berupa cooldown command selama *5 detik* setiap kali pemakaian.

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
Wajib baca.
Aliases: *rule*
Usage: *${prefix}rules*

2. *${prefix}menu*
Menampilkan commands yang tersedia.
Aliases: -
Usage: *${prefix}menu* angka_index

3. *${prefix}status*
Menampilkan status bot.
Aliases: *stats*
Usage: *${prefix}status*

4. *${prefix}listblock*
Cek nomor yang diblokir.
Aliases: -
Usage: *${prefix}listblock*

5. *${prefix}ping*
Cek speed bot.
Aliases: *p*
Usage: *${prefix}ping*

6. *${prefix}delete*
Hapus pesan dari bot.
Aliases: *del*
Usage: Reply pesan yang dihapus dengan caption *${prefix}delete*.

7. *${prefix}report*
Laporkan bug ke dev.
Aliases: -
Usage: *${prefix}report* pesan

8. *${prefix}tos*
Syarat dan ketentuan. (TOS)
Aliases: -
Usage: *${prefix}tos*

9. *${prefix}join*
Join grup via link.
Aliases: -
Usage: *${prefix}join* link_group

_Index of [2]_
    `
}

exports.menuMisc = () => {
    return `
-----[ MISC ]-----

1. *${prefix}say*
Bot akan mengulang pesan mu.
Aliases: -
Usage: *${prefix}say* teks

2. *${prefix}lirik*
Mencari lirik lagu.
Aliases: -
Usage: *${prefix}lirik* judul_lagu

3. *${prefix}shortlink*
Membuat shortlink.
Aliases: -
Usage: *${prefix}shortlink* link

4. *${prefix}wikipedia*
Mengirim Wikipedia dari teks yang diberikan.
Aliases: *wiki*
Usage: *${prefix}wikipedia* teks

5. *${prefix}kbbi*
Mengirim definisi kata dari KBBI.
Aliases: -
Usage: *${prefix}kbbi* teks

6. *${prefix}igstalk*
Stalk akun Instagram.
Aliases: -
Usage: *${prefix}igstalk* username

7. *${prefix}gsmarena*
Mengirim info spesifikasi HP dari GSMArena.
Aliases: -
Usage: *${prefix}gsmarena* model_hp

8. *${prefix}receipt*
Mengirim resep makanan.
Aliases: *resep*
Usage: *${prefix}receipt* nama_makanan

9. *${prefix}ytsearch*
Mengirim hasil pencarian di YouTube.
Aliases: *yts*
Usage: *${prefix}ytsearch* query

10. *${prefix}tts*
Membuat Text to Speech. Kalian perlu kode bahasa setiap menggunakan, cek di sini https://id.wikipedia.org/wiki/Daftar_bahasa_menurut_ISO_639-2
Aliases: -
Usage: *${prefix}tts* kode_bahasa | teks

11. *${prefix}afk*
Set akun kamu ke mode AFK, aku akan mengirim pesan ke orang yang me-mention kalian.
Aliases: -
Usage: *${prefix}afk* enable/disable atau kirim pesan ke grup untuk mematikan mode AFK.

_Index of [3]_
    `
}

exports.menuSticker = () => {
    return `
-----[ STICKER ]-----

1. *${prefix}sticker*
Membuat stiker dari gambar yang dikirim atau di-reply.
Aliases: *stiker*
Usage: Kirim gambar dengan caption *${prefix}sticker* atau reply gambar dengan caption *${prefix}sticker*.

2. *${prefix}stickergif*
Membuat stiker dari video MP4 atau GIF yang dikirim atau di-reply.
Aliases: *stikergif*
Usage: Kirim video/GIF dengan caption *${prefix}stickergif* atau reply video/GIF dengan caption *${prefix}stickergif*.

3. *${prefix}stickerlightning*
Membuat stiker lightning dari gambar yang dikirim atau di-reply.
Aliases: *slightning*
Usage: Kirim gambar dengan caption *${prefix}stickerlightning* atau reply gambar dengan caption *${prefix}stickerlightning*.

4. *${prefix}stickerfire*
Membuat stiker fire dari gambar yang dikirim atau di-reply.
Aliases: *sfire*
Usage: Kirim gambar dengan caption *${prefix}stickerfire* atau reply gambar dengan caption *${prefix}stickerfire*.

3. *${prefix}ttg*
Membuat stiker text to GIF.
Aliases: -
Usage: *${prefix}ttg* teks

4. *${prefix}stickertoimg*
Konversi stiker ke foto.
Aliases: *stikertoimg*
Usage: Reply sticker dengan caption *${prefix}stickertoimg*.

_Index of [4]_
    `
}

exports.menuWeeaboo = () => {
    return `
-----[ WEEABOO ]-----

1. *${prefix}neko*
Mengirim foto neko girl.
Aliases: -
Usage: *${prefix}neko*

2. *${prefix}wallpaper*
Mengirim wallpaper anime.
Aliases: *wp*
Usage: *${prefix}wallpaper*

3. *${prefix}kemono*
Mengirim foto kemonomimi girl.
Aliases: -
Usage: *${prefix}kemono*

4. *${prefix}kusonime*
Mencari info anime dan link download batch di Kusonime.
Aliases: -
Usage: *${prefix}kusonime* judul_anime

5. *${prefix}komiku*
Mencari info manga dan link download di Komiku.
Aliases: -
Usage: *${prefix}komiku* judul_manga

6. *${prefix}wait*
Mencari source anime dari screenshot scene.
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

_Index of [5]_
    `
}

exports.menuFun = () => {
    return `
-----[ FUN ]-----

1. *${prefix}hartatahta*
Membuat gambar Harta Tahta Nama.
Aliases: -
Usage: *${prefix}hartatahta* nama

2. *${prefix}calender*
Membuat calender dari foto yang dikirim.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}calender* atau reply gambar dengan caption *${prefix}calender*.

3. *${prefix}partner*
Weton jodoh.
Aliases: *pasangan*
Usage: *${prefix}partner* nama | pasangan

4. *${prefix}zodiac*
Ramalan zodiak Mingguan.
Aliases: *zodiak*
Usage: *${prefix}zodiac* zodiak

5. *${prefix}write*
Membuat catatan tulisan di buku.
Aliases: *nulis*
Usage: *${prefix}write* teks

6. *${prefix}missing*
Membuat gambar missing person.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}missing* teks_atas | teks_tengah | teks_bawah atau reply gambar dengan caption *${prefix}missing* teks_atas | teks_tengah | teks_bawah.

7. *${prefix}valentine*
Membuat gambar valentine.
Aliases: -
Usage: Kirim gambar pasangan dengan caption *${prefix}valentine* nama | pasangan atau reply gambar pasangan dengan caption *${prefix}valentine* nama | pasangan.

8. *${prefix}glitchtext*
Membuat gambar teks glitch.
Aliases: *glitext*
Usage: *${prefix}glitchtext* teks1 | teks2

9. *${prefix}simi*
Chat SimiSimi.
Aliases: -
Usage: *${prefix}simi* teks

_Index of [6]_
    `
}

exports.menuModeration = () => {
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

7. *${prefix}nsfw*
Mematikan/menyalakan mode NSFW.
Aliases: -
Usage: *${prefix}nsfw* enable/disable

8. *${prefix}groupicon*
Mengganti icon grup.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}groupicon* atau reply gambar dengan caption *${prefix}groupicon*.

9. *${prefix}antilink*
Mematikan/menyalakan fitur anti group link.
Aliases: -
Usage: *${prefix}antilink* enable/disable

10. *${prefix}welcome*
Mematikan/menyalakan fitur welcome di grup agar menyambut setiap kedatangan member.
Aliases: -
Usage: *${prefix}welcome* enable/disable

11. *${prefix}autostiker*
Mematikan/menyalakan fitur auto-stiker. Setiap foto yang dikirim akan selalu diubah ke stiker.
Aliases: *autostik autstik*
Usage: *${prefix}autostiker* enable/disable

_Index of [7]_
    `
}

exports.menuNsfw = () => {
    return `
-----[ NSFW ]-----

1. *${prefix}lewds*
Mengirim pict anime lewd.
Aliases: *lewd*
Usage: *${prefix}lewds*

2. *${prefix}multilewds*
Mengirim up to 5 anime lewd pics. (PREMIUM ONLY)
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *${prefix}multilewds*

3. *${prefix}nh*
Mengirim info doujinshi dari nHentai.
Aliases: -
Usage: *${prefix}nh* kode

4. *${prefix}nhdl*
Mendownload doujin dari nHentai sebagai file PDF. (PREMIUM ONLY)
Aliases: -
Usage: *${prefix}nhdl* kode

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
Usage: *${prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

9. *${prefix}phdl*
Download video dari Pornhub.
Aliases: -
Usage *${prefix}phdl* link

_Index of [8]_
    `
}

exports.menuOwner = () => {
    return `
-----[ OWNER ]-----
Halo Owner-sama ヽ(・∀・)ﾉ!

1. *${prefix}bc*
Membuat broadcast.
Aliases: -
Usage: *${prefix}bc* <teks> 

2. *${prefix}clearall*
Menghapus semua chat di akun bot.
Aliases: -
Usage: *${prefix}clearall*

3. *${prefix}getses*
Mengambil screenshot sesi dari akun bot.
Aliases: -
Usage: *${prefix}getses*

4. *${prefix}ban*
Menambah/menghapus user yang diban.
Aliases: -
Usage: *${prefix}ban* add/del @user/62812xxxxxxxx

5. *${prefix}leaveall*
Keluar dari semua grup.
Aliases: -
Usage: *${prefix}leaveall*

6. *${prefix}eval*
Evaluate kode JavaScript.
Aliases: *ev*
Usage: *${prefix}eval*

7. *${prefix}shutdown*
Men-shutdown bot.
Aliases: -
Usage: *${prefix}shutdown*

8. *${prefix}premium*
Menambah/menghapus user premium.
Aliases: -
Usage: *${prefix}premium* add/del @user

9. *${prefix}setstatus*
Mengganti status about me.
Aliases: *setstats setstat*
Usage: *${prefix}status* teks

_Index of [9]_
    `
}

exports.menuLeveling = () => {
    return `
-----[ LEVELING ]-----

1. *${prefix}level*
Untuk melihat level kamu.
Aliases: -
Usage: *${prefix}level*

2. *${prefix}leaderboard*
Untuk melihat leaderboard.
Aliaases: -
Usage: *${prefix}leaderboard*

_Index of [10]_
    `
}

exports.rules = () => {
    return `
-----[ RULES ]-----

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

Source code oleh:
wa.me/6281294958473 (Kal a.k.a. Slavyan)
    `
}

// Dimohon untuk owner/hoster jangan mengedit ini, terima kasih.
exports.tos = (ownerNumber) => {
    return `
-----[ TERMS OF SERVICE ]-----

Bot ini merupakan open-source bot dengan nama asli BocchiBot yang tersedia di GitHub secara gratis.
Owner/hoster dari bot ini terlepas dari tanggung jawab dan pengawasan developer (Slavyan).
Owner/hoster boleh menjiplak, menambahkan, menghapus, mengganti source code dengan catatan *tidak memperjualbelikannya* dalam bentuk apapun.
Apabila terjadi sebuah error, orang yang pertama yang harus kalian hubungi ialah owner/hoster.

Jika kalian ingin berkontribusi dalam projek ini, silakan kunjungi:
https://github.com/SlavyanDesu/BocchiBot

Contact person:
wa.me/${ownerNumber.replace('@c.us', '')} (Owner/hoster)
wa.me/6281294958473 (Developer)

Kalian juga bisa mendukung saya agar bot ini tetap up to date dengan:
081294958473 (OVO/Telkomsel/GoPay)

Terima kasih!

Slavyan.
    `
}
