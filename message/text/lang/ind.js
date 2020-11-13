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
    return `    *[ HALL OF SHAME ]*Total diblokir: *${blockNumber.length}* user\n`
}