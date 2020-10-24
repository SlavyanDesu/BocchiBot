exports.textMenu = (pushname) => {
    return `
Halo *${pushname}*~

Command list:
1. *$say*
Ya gitu.
Aliases: -
Penggunaan: $say <teks>

2. *$ping*
Cek speed bot, bukan koneksi kamu.
Aliases: *p*
Penggunaan: $ping

3. *$help*
Cek command list.
Aliases: -
Penggunaan: $menu

4. *$sticker*
Bikin stiker dari gambar yang dikirim atau di-reply.
Aliases: *stiker*
Penggunaan: Kirim gamber dengan caption $sticker atau reply gambar dengan caption $sticker.
    `
}

exports.textNsfw = () => {
    return `
NSFW list:
1. *$multilewds*
Kirim gambar anime lewd sebanyak 5 gambar.
Aliases: *multilewd* - *mlewds* - *mlewd*
Penggunaan: *$multilewds*
    `
}