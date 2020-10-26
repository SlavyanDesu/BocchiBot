exports.textMenuId = (pushname) => {
    return `
Halo *${pushname}*~

Gak usah pake <>

Command list:
1. *$say*
Ya gitu.
Aliases: -
Usage: *$say* <text>

2. *$ping*
Cek speed bot, bukan koneksi kamu.
Aliases: *p*
Usage: *$ping*

3. *$menu*
Cek command list.
Aliases: -
Usage: *$menu*

4. *$sticker*
Bikin stiker dari gambar yang dikirim atau di-reply.
Aliases: *stiker*
Usage: Kirim gambar dengan caption *$sticker* atau reply gambar dengan caption *$sticker*.

5. *$nsfw*
H3h3.
Aliases: -
Usage: *$nsfw* <enable/disable>
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
    `
}

exports.textNsfw = () => {
    return `
Belum ada h3h3, masih on-development.
    `
}