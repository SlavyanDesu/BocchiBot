const fs = require('fs-extra')

/**
 * Add limit.
 * @param {String} userId 
 * @param {String} dir 
 * @param {Object} _dir 
 */
const addLimit = (userId, _dir) => {
    const obj = { id: userId, time: Date.now() }
    _dir.push(obj)
    fs.writeFileSync('./database/user/limit.json', JSON.stringify(_dir))
}

/**
 * Get time limit.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getLimit = (userId, _dir) => {
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

module.exports = {
    addLimit,
    getLimit
}