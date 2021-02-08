const fs = require('fs-extra')

/**
 * Add user daily limit.
 * @param {string} userId 
 * @param {string} dir 
 * @param {object} _dir 
 */
const addLimit = (userId, _dir) => {
    const obj = { id: userId, time: Date.now() }
    _dir.push(obj)
    fs.writeFileSync('./database/user/daily.json', JSON.stringify(_dir))
}

/**
 * Get user time left.
 * @param {string} userId 
 * @param {object} _dir 
 * @returns {number}
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