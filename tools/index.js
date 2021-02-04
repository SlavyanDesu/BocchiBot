const chalk = require('chalk')
const crypto = require('crypto')
const moment = require('moment-timezone')
moment.tz.setDefault('Asia/Jakarta').locale('id')

/**
 * Get text with color.
 * @param {String} text 
 * @param {String} color 
 */
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

/**
 * Create serial ID.
 * @param {Number} size 
 * @returns {String}
 */
const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}

/**
 * URL validator.
 * @param {String} url 
 * @returns {Boolean}
 */
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi))
}

/**
 * Get time duration.
 * @param {Date} timestamp 
 * @param {Date} now 
 * @returns {Number}
 */
const processTime = (timestamp, now) => {
    return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

/**
 * Client options.
 * @param {Function} start 
 * @returns {Object}
 */
const options = (start) => {
    const options = {
        sessionId: 'BocchiBot',
        headless: true,
        qrTimeout: 0,
        authTimeout: 0,
        restartOnCrash: start,
        cacheEnabled: false,
        useChrome: true,
        killProcessOnBrowserClose: true,
        throwErrorOnTosBlock: false,
        chromiumArgs: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--aggressive-cache-discard',
            '--disable-cache',
            '--disable-application-cache',
            '--disable-offline-load-stale-cache',
            '--disk-cache-size=0'
        ]
    }
    return options
}

// Message filter
const usedCommandRecently = new Set()

/**
 * Check is number filtered.
 * @param {String} from 
 * @returns {Boolean}
 */
const isFiltered = (from) => {
    return !!usedCommandRecently.has(from)
}

/**
 * Add number to filter.
 * @param {String} from 
 */
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => {
        return usedCommandRecently.delete(from)
    }, 5000) // 5 seconds delay, I don't recommend below that.
}

module.exports = {
    msgFilter: {
        isFiltered,
        addFilter
    },
    color,
    isUrl,
    processTime,
    options,
    createSerial
}
