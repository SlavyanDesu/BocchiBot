exports.textMenuId = (pushname) => {
    return `
Halo *${pushname}*~

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
    `
}

exports.textMenuJp = (pushname) => {
    return `
こんにちは *${pushname}* さん〜

コマンドリスト:
1. *$say*
わかんない...
Aliases: -
Usage: *$say* <text>

2. *$ping*
ボットの速度を確認する。
Aliases: *p*
Usage: *$ping*

3. *$menu*
すべてのコマンドリストを表示。
Aliases: -
Usage: *$menu*

4. *$sticker*
送信された画像からステッカーを作成する。
Aliases: *stiker*
Usage: 「 *$sticker* 」というキャプション付きの画像を送信するか、「 *$sticker* 」というキャプション付きの画像に返信します。
    `
}

exports.textNsfw = () => {
    return `
NSFW list:
1. *$multilewds*
Kirim gambar anime lewd sebanyak 5 gambar.
Aliases: *multilewd* - *mlewds* - *mlewd*
Usage: *$multilewds*
    `
}