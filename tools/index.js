const chalk = require('chalk')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi))
}

const processTime = (timestamp, now) => {
    return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

const usedCommandRecently = new Set()

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from)
}

const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => {
        return usedCommandRecently.delete(from)
    }, 5000)
}

module.exports = {
    msgFilter: {
        isFiltered,
        addFilter
    },
    color,
    isUrl,
    processTime,
}