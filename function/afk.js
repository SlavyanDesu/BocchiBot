const fs = require('fs-extra')

/**
 * Add AFK.
 * @param {String} userId 
 * @param {String} time 
 * @param {String} reason 
 * @param {Object} _dir 
 */
const addAfkUser = (userId, time, reason, _dir) => {
    const obj = { id: userId, time: time, reason: reason }
    _dir.push(obj)
    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_dir))
}

/**
 * Check user AFK.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkAfkUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

/**
 * Get AFK reason.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {String}
 */
const getAfkReason = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].reason
    }
}

/**
 * Get AFK time.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {String}
 */
const getAfkTime = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}

/**
 * Get AFK ID.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {String}
 */
const getAfkId = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}

/**
 * Get AFK position.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getAfkPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    return position
}

module.exports = {
    addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition
}