const fs = require('fs-extra')
const toMs = require('ms')

/**
 * Add reminder for user.
 * @param {String} userId 
 * @param {String} message 
 * @param {Number} time 
 * @param {Object} _dir 
 */
const addReminder = (userId, message, time, _dir) => {
    const obj = { id: userId, msg: message, time: Date.now() + toMs(time) }
    _dir.push(obj)
    fs.writeFileSync('./database/user/reminder.json', JSON.stringify(_dir))
}

/**
 * Get reminder.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getReminderTime = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if(_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}

/**
 * Get reminder message.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {String}
 */
const getReminderMsg = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].msg
    }
}

/**
 * Get position of reminder.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getReminderPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    return position
}

module.exports = {
    addReminder,
    getReminderTime,
    getReminderMsg,
    getReminderPosition
}