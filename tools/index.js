const chalk = require('chalk')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')

/**
 * Get text with color
 * @param {String} text 
 * @param {String} color 
 */
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

/**
 * URl validator
 * @param {String} url 
 */
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi))
}

/**
 * Get time duration
 * @param {Date} timestamp 
 * @param {Date} now 
 */
const processTime = (timestamp, now) => {
    return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

// Message filter
const usedCommandRecently = new Set()

/**
 * Check is number filtered
 * @param {String} from 
 */
const isFiltered = (from) => {
    return !!usedCommandRecently.has(from)
}

/**
 * Add number to filter
 * @param {String} from 
 */
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