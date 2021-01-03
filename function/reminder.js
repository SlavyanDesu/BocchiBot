const fs = require('fs-extra')
const toMs = require('ms')

const addReminder = (userId, message, time, _dir) => {
    const obj = { id: userId, msg: message, time: Date.now() + toMs(time) }
    _dir.push(obj)
    fs.writeFileSync('./database/user/reminder.json', JSON.stringify(_dir))
}

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