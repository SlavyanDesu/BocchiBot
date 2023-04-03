/* eslint-disable quotes */
const { prefix } = require('../../../config.json')

exports.wait = () => {
    return `Mohon tunggu sebentar...`
}

exports.ok = () => {
    return `Done!`
}

exports.videoLimit = () => {
    return `Ukuran video/GIF terlalu besar!`
}

exports.wrongFormat = () => {
    return `Format salah! Silakan cek cara penggunaan di *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd) => {
    return `Command *${prefix}${cmd}* tidak ditemukan!`
}

exports.blocked = (ownerNumber) => {
    return `Bot tidak menerima panggilan. Kamu diblokir karena telah melanggar rules!\n\nHubungi owner: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `Command ini hanya bisa digunakan oleh owner!`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `Command ini hanya bisa digunakan oleh admin grup!`
}

exports.addedGroup = (chat) => {
    return `Terima kasih telah mengundangku, para member *${chat.contact.name}*!\n\nSilakan register di *private chat* dengan format:\n*${prefix}register* nama`
}

exports.listBlock = (blockNumber) => {
    return `
*── 「 HALL OF SHAME 」 ──*

Total user diblokir: *${blockNumber.length}*\n
    `
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

exports.notRegistered = () => {
    return `Kamu belum terdaftar di database!\n\nSilakan register di *private chat* dengan format:\n*${prefix}register* nama`
}

exports.registered = (name, userId, time, serial) => {
    return `
*── 「 REGISTRATION 」 ──*

Akun kamu telah terdaftar dengan data:
➸ *Nama*: ${name}
➸ *ID*: ${userId}
➸ *Waktu pendaftaran*: ${time}
➸ *Serial*: ${serial}

Catatan:
Jangan pernah menyebarkan data *serial* ke pada siapapun!

Ketik *${prefix}rules* terlebih dahulu ya~
    `
}

exports.registeredAlready = () => {
    return `Kamu sudah mendaftar sebelumnya.`
}

exports.received = (pushname) => {
    return `Halo ${pushname}!\nTerima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.daily = (time) => {
    return `Maaf, tetapi kamu telah mencapai limit menggunakan command ini.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.`
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

Pengumuman untuk member *${(name || formattedTitle)}*.
Grup ini memiliki group link detector, apabila ada member yang mengirim group link, maka dia akan ter-kick secara otomatis.

Sekian terima kasih.
- Admin *${(name || formattedTitle)}*
    `
}

exports.linkDetected = () => {
    return `
*── 「 ANTI GROUP LINK 」 ──*

Kamu mengirim link group chat!
Maaf tapi kamu harus keluar...
    `
}

exports.detectorOff = () => {
    return `Fitur anti-group link berhasil *dinonaktifkan*!`
}

exports.detectorOnAlready = () => {
    return `Fitur anti-group link telah diaktifkan sebelumnya.`
}

exports.antiNsfwOn = (name, formattedTitle) => {
    return `
*── 「 ANTI NSFW LINK 」 ──*

Pengumuman untuk member *${(name || formattedTitle)}*.
Grup ini memiliki NSFW link detector, apabila ada member yang mengirim NSFW link, maka dia akan ter-kick secara otomatis.

Sekian terima kasih.
- Admin *${(name || formattedTitle)}*
    `
}

exports.antiNsfwOff = () => {
    return `Fitur anti-NSFW link berhasil *dinonaktifkan*!`
}

exports.antiNsfwOnAlready = () => {
    return `Fitur anti-NSFW link telah diaktifkan sebelumnya.`
}

exports.antiBadWordsOn = (name, formattedTitle) => {
    return `
*── 「 ANTI BAD WORDS 」 ──*

Pengumuman untuk member *${(name || formattedTitle)}*.
Grup ini memiliki bad word detector, apabila ada member yang mengirim bad word/kata kasar, maka pesannya akan segera dihapus.

Sekian terima kasih.
- Admin *${(name || formattedTitle)}*
    `
}

exports.antiBadWordsOff = () => {
    return `Fitur anti-bad word berhasil *dinonaktifkan*!`
}

exports.antiBadWordsOnAlready = () => {
    return `Fitur anti-bad word telah diaktifkan sebelumnya.`
}

exports.antiBadWordsError = () => {
    return `Fitur anti-bad word belum diaktifkan!`
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
    return `Selamat datang @${event.who.replace('@c.us', '')}!`
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

exports.afkOn = (pushname, reason) => {
    return `
*── 「 AFK MODE 」 ──*

Fitur AFK berhasil *diaktifkan*!
➸ *Username*: ${pushname}
➸ *Alasan*: ${reason}
    `
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `
*── 「 AFK MODE 」 ──*

Sssttt! Orangnya lagi AFK, jangan diganggu!
➸ *Alasan*: ${getReason}
➸ *Sejak*: ${getTime}
    `
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.gcMute = () => {
    return `
*── 「 MUTED 」 ──*

Hanya admin yang dapat mengirim pesan ke grup ini.
    `
}

exports.gcUnmute = () => {
    return `
*── 「 UNMUTED 」 ──*

Sekarang semua anggota dapat mengirim chat di grup ini.
    `
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.registeredFound = (name, time, serial, userId) => {
    return `
*── 「 REGISTERED 」 ──*

Akun ditemukan!
➸ *Nama*: ${name}
➸ *ID*: ${userId}
➸ *Waktu pendaftaran*: ${time}
➸ *Serial*: ${serial}
    `
}

exports.registeredNotFound = (serial) => {
    return `Akun dengan serial: *${serial}* tidak ditemukan!`
}

exports.pcOnly = () => {
    return `Command ini hanya bisa digunakan di dalam private chat saja!`
}

exports.linkNsfw = () => {
    return `
*── 「 ANTI NSFW LINK 」 ──*

Kamu telah mengirim link NSFW!
Maaf, tapi aku harus mengeluarkan mu...
    `
}

exports.fakeLink = () => {
    return `Ups, link ini terlihat mencurigakan. Demi keamanan grup, aku harus mengeluarkan mu...\n`
}

exports.muteChatOn = () => {
    return `Berhasil *mute* bot pada grup ini!`
}

exports.muteChatOff = () => {
    return `Berhasil *unmute* bot pada grup ini!`
}

exports.muteChatOnAlready = () => {
    return `Mute telah diaktifkan di grup ini sebelumnya!`
}

exports.limit = () => {
    return `
*── 「 LIMIT 」 ──*

Limit penggunaan kamu telah habis! Silakan lakukan hal berikut:
❏ *_Tunggu hingga jam 00:00 WIB_*
    `
}

exports.reminderOn = (messRemind, parsedTime, sender) => {
    return `
*── 「 REMINDER 」 ──*

Reminder berhasil diaktifkan!
➸ *Pesan*: ${messRemind}
➸ *Durasi*: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ *Untuk*: @${sender.id.replace('@c.us', '')}
    `
}

exports.reminderAlert = (messRemind, sender) => {
    return `
*── 「 REMINDER 」 ──*

⏰ @${sender.id.replace('@c.us', '')} ⏰
➸ *Pesan*: ${messRemind}`
}

exports.nameChanged = (q) => {
    return `Username berhasil diubah ke *${q}*`
}

exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
*── 「 WELCOME 」 ──*

======================
➸ *Nama*: ${pushname}
➸ *Level*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
➸ *Role*: ${role}
➸ *Premium*: ${premium}
======================

Total pendaftar: *${jumlahUser}*

Berikut adalah menu yang tersedia:

*[1]* Downloader
*[2]* Bot
*[3]* Misc
*[4]* Sticker
*[5]* Weeaboo
*[6]* Fun
*[7]* Moderation
*[8]* Owner
*[9]* Leveling

Ketik *${prefix}menu* angka_index untuk membuka menu page yang dipilih.

Catatan:
Bot ini terdapat cooldown command selama *5 detik* setiap kali pemakaian.
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
Wajib baca.
Aliases: *rule*
Usage: *${prefix}rules*

2. *${prefix}menu*
Menampilkan commands yang tersedia.
Aliases: *help*
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

10. *${prefix}ownerbot*
Mengirim kontak owner.
Aliases: -
Usage: *${prefix}ownerbot*

11. *${prefix}getpic*
Mengirim foto profil user.
Aliases: -
Usage: *${prefix}getpic* @user/62812xxxxxxxx

12. *${prefix}premiumcheck*
Cek masa aktif premium.
Aliases: *cekpremium*
Usage: *${prefix}premiumcheck*

13. *${prefix}premiumlist*
Cek list user premium.
Aliases: *listpremium*
Usage: *${prefix}premiumlist*

14. *${prefix}limit*
Cek limit kamu.
Aliases: -
Usage: *${prefix}limit*

15. *${prefix}serial*
Cek biodata menggunakan serial.
Aliases: -
Usage: *${prefix}serial* serial

16. *${prefix}runtime*
Cek runtime host.
Aliases: -
Usage: *${prefix}runtime*

_Index of [2]_
    `
}

exports.menuMisc = () => {
    return `
*── 「 MISC 」 ──*

1. *${prefix}say*
Bot akan mengulang pesan mu.
Aliases: -
Usage: *${prefix}say* teks

2. *${prefix}tts*
Membuat Text to Speech. Kalian perlu kode bahasa setiap menggunakan, cek di sini https://id.wikipedia.org/wiki/Daftar_bahasa_menurut_ISO_639-2
Aliases: -
Usage: *${prefix}tts* kode_bahasa | teks

3. *${prefix}afk*
Set akun kamu ke mode AFK, aku akan mengirim pesan ke orang yang me-mention kamu.
Aliases: -
Usage: *${prefix}afk* alasan. Kirim pesan ke grup untuk menonaktifkan mode AFK.

4. *${prefix}math*
Kalkulator.
* = Perkalian
+ = Pertambahan
- = Pengurangan
/ = Pembagian
Aliases: -
Usage: *${prefix}math* 12*12

5. *${prefix}reminder*
Pengingat.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}reminder* 10s | pesan_pengingat

6. *${prefix}imagetourl*
Image uploader.
Aliases: *imgtourl*
Usage: Kirim gambar dengan caption *${prefix}imagetourl* atau reply gambar dengan caption *${prefix}imagetourl*.

7. *${prefix}genshininfo*
Kirim info karakter Genshin Impact.
Aliases: *genshin*
Usage: *${prefix}genshininfo* nama_karakter

8. *${prefix}translate*
Terjemahkan teks.
Aliases: *trans*
Usage: *${prefix}translate* teks | kode_bahasa, bisa menggunakan reply juga

9. *${prefix}tomp3*
Format video ke MP3.
Aliases: -
Usage: Kirim video dengan caption *${prefix}tomp3* atau reply video dengan caption *${prefix}tomp3*.

10. *${prefix}bass*
Bass boost, bikin telinga sakit.
Aliases: -
Usage: Reply audio/voice dengan caption *${prefix}bass* tingkat_dB.

11. *${prefix}nightcore*
Membuat efek nightcore dari audio.
Aliases: -
Usage: Reply audio/voice dengan caption *${prefix}nightcore*

12. *${prefix}google*
Mencari via Google.
Aliases: *googlesearch*
Usage: *${prefix}google* query

13. *${prefix}toptt*
Buat audio PTT.
Aliases: *ptt*
Usage: Reply audio/voice dengan caption *${prefix}toptt*

14. *${prefix}quizizz*
Mengambil Data Quizizz 
Aliases: *quizizz hack*
Usage: *${prefix}quizizz* query


_Index of [3]_
    `
}

exports.menuSticker = () => {
    return `
*── 「 STICKER 」 ──*

1. *${prefix}sticker*
Membuat stiker dari gambar yang dikirim atau di-reply.
Aliases: *stiker*
Usage: Kirim gambar dengan caption *${prefix}sticker* atau reply gambar dengan caption *${prefix}sticker*.

2. *${prefix}stickergif*
Membuat stiker dari video MP4 atau GIF yang dikirim atau di-reply.
Aliases: *stikergif*
Usage: Kirim video/GIF dengan caption *${prefix}stickergif* atau reply video/GIF dengan caption *${prefix}stickergif*.

3. *${prefix}stickertoimg*
Konversi stiker ke foto.
Aliases: *stikertoimg toimg*
Usage: Reply sticker dengan caption *${prefix}stickertoimg*.

4. *${prefix}stickerwm*
Buat stiker dengan WM.
Aliases: *stcwm*
Usage: Kirim gambar dengan caption *${prefix}stickerwm* pack_name | author_name atau reply gambar dengan caption *${prefix}stickerwm* pack_name | author_name.

5. *${prefix}stickermeme*
Buat sticker meme.
Aliases: *stcmeme*
Usage: Kirim gambar dengan caption *${prefix}stickermeme* teks_atas | teks_bawah atau reply gambar dengan caption *${prefix}stickermeme* teks_atas | teks_bawah.

6. *${prefix}takestick*
Merubah watermark sticker.
Aliases: -
Usage: Reply stiker dengan caption *${prefix}takestick* pack_name | author_name

7. *${prefix}stickernobg*
Membuat stiker tanpa background.
Aliases: *take*
Usage: Kirim gambar dengan caption *${prefix}stickernobg* atau reply gambar dengan caption *${prefix}stickernobg*


_Index of [4]_
    `
}

exports.menuWeeaboo = () => {
    return `
*── 「 WEEABOO 」 ──*

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

4. *${prefix}wait*
Mencari source anime dari screenshot scene.
Aliases: -
Usage: Kirim screenshot dengan caption *${prefix}wait* atau reply screenshot dengan caption *${prefix}wait*.

5. *${prefix}source*
Mencari source dari panel doujin, ilustrasi, dan gambar yang berhubungan dengan anime.
Aliases: *sauce*
Usage: Kirim gambar dengan caption *${prefix}source* atau reply gambar dengan caption *${prefix}source*.

6. *${prefix}waifu*
Mengirim random foto waifu.
Aliases: -
Usage: *${prefix}waifu*

_Index of [5]_
    `
}

exports.menuFun = () => {
    return `
*── 「 FUN 」 ──*

1. *${prefix}triggered*
Membuat efek triggered.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}triggered* atau reply pesan orang dengan *${prefix}triggered*.

2. *${prefix}kiss*
Kiss someone ( ͡° ͜ʖ ͡°).
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}kiss* atau reply gambar dengan *${prefix}kiss*.

3. *${prefix}profile*
Cek profile.
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

7. *${prefix}groupicon*
Mengganti icon grup.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}groupicon* atau reply gambar dengan caption *${prefix}groupicon*.

8. *${prefix}antilink*
Mematikan/menyalakan fitur anti-group link.
Aliases: -
Usage: *${prefix}antilink* enable/disable

9. *${prefix}welcome*
Mematikan/menyalakan fitur welcome di grup agar menyambut setiap kedatangan member.
Aliases: -
Usage: *${prefix}welcome* enable/disable

10. *${prefix}autosticker*
Mematikan/menyalakan fitur auto-stiker. Setiap foto yang dikirim akan selalu diubah ke stiker.
Aliases: *autostiker autostik*
Usage: *${prefix}autostiker* enable/disable

11. *${prefix}antinsfw*
Mematikan/menyalakan fitur anti-NSFW link.
Aliases: -
Usage: *${prefix}antinsfw* enable/disable

12. *${prefix}mutegc*
Set group hanya admin yang bisa mengirim pesan.
Aliases: -
Usage: *${prefix}mutegc* enabled/disable

13. *${prefix}grouplink*
Melihat invite link grup.
Aliases: -
Usage: *${prefix}grouplink*

14. *${prefix}revoke*
Revoke invite link grup.
Aliases: -
Usage: *${prefix}revoke*

15. *${prefix}leveling*
Mematikan/menyalakan fitur leveling.
Aliases: -
Usage: *${prefix}leveling* enable/disable

16. *${prefix}badwords*
Setting fitur anti-bad word.
Aliases: *badword*
Usage: *${prefix}badwords* enable/disable atau add/remove untuk menambahkan/menghapus kata kasar.


_Index of [7]_
    `
}

exports.menuOwner = () => {
    return `
*── 「 OWNER 」 ──*

1. *${prefix}bc*
Membuat broadcast.
Aliases: -
Usage: *${prefix}bc* teks

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
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}premium* add/del @user/62812xxxxxxxx 30d

9. *${prefix}setstatus*
Mengganti status about me.
Aliases: *setstats setstat*
Usage: *${prefix}status* teks

10. *${prefix}serial*
Cek pendaftaran akun via serial.
Aliases: -
Usage: *${prefix}serial* serial_user

11. *${prefix}exif*
Atur WM stiker bot.
Aliases: -
Usage: *${prefix}exif* pack_name | author_name

12. *${prefix}mute*
Mute semua user.
Aliases: -
Usage: Gunakan *${prefix}mute* untuk mute dan gunakan *${prefix}mute* kembali untuk unmute.

13. *${prefix}setname*
Mengganti username bot. Maksimal 25 huruf.
Aliases: -
Usage: *${prefix}name* username_baru

14. *${prefix}block*
Blok user.
Aliases: *blok*
Usage: *${prefix}block* @user/62812xxxxxxxx

15. *${prefix}unblock*
Unblok user.
Aliases: *unblok*
Usage: *${prefix}unblock* @user/62812xxxxxxxx

_Index of [9]_
    `
}

exports.menuLeveling = () => {
    return `
*── 「 LEVELING 」 ──*

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
*── 「 RULES 」 ──*

1. Jangan spam bot.
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!
    `
}

// Dimohon untuk owner/hoster jangan mengedit ini, terima kasih.
exports.tos = (ownerNumber) => {
    return `
*── 「 TERMS OF SERVICE 」 ──*

Bot ini merupakan open-source bot dengan nama asli BocchiBot yang tersedia di GitHub secara gratis.
Owner/hoster dari bot ini terlepas dari tanggung jawab dan pengawasan developer (Slavyan).
Owner/hoster boleh menjiplak, menambahkan, menghapus, mengganti source code dengan catatan *tidak memperjualbelikannya* dalam bentuk apapun.
Apabila terjadi sebuah error, orang yang pertama yang harus kalian hubungi ialah owner/hoster.

Jika kalian ingin berkontribusi dalam projek ini, silakan kunjungi:
https://github.com/SlavyanDesu/BocchiBot

Contact person:
wa.me/${ownerNumber.replace('@c.us', '')} (Owner/hoster)

Regards,
Slavyan.
    `
}
