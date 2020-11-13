exports.wait = () => {
    return `Please wait~`
}

exports.ok = () => {
    return `Ok desu~`
}

exports.wrongFormat = () => {
    return `Wrong format!`
}

exports.emptyMess = () => {
    return `Please provide a message!`
}

exports.cmdNotFound = () => {
    return `Command not found!`
}

exports.blocked = () => {
    return `Bot is not receiving call. You have have been blocked due to rules breaking!\n\nPlease contact owner: wa.me/6281294958473`
}

exports.ownerOnly = () => {
    return `This command is only for Owner-sama!`
}

exports.doneOwner = () => {
    return `Finished, Owner-sama~`
}

exports.groupOnly = () => {
    return `This command only work in a group!`
}

exports.adminOnly = () => {
    return `Only admin who can use this command!`
}

exports.notNsfw = () => {
    return `NSFW command is not enabled!`
}

exports.nsfwOn = () => {
    return `NSFW command successufully *enabled*!\nType *$nsfwmenu* to see command list.`
}

exports.nsfwOff = () => {
    return `NSFW command successfully *disabled*!`
}

exports.addedGroup = (chat) => {
    return `Thank you for inviting me, *${chat.contact.name}* members!\n\nType *$rules* first ok~`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `
    *[ HALL OF SHAME ]*
Total blocked: *${blockNumber.length}* user(s)\n
`
}